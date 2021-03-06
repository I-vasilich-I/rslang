import React, { useEffect, useState } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import useSound from 'use-sound';
import { ControlPanel } from './ControlPanel/ControlPanel';
import { AnswerPanel } from './AnswerPanel/AnswerPanel';
import { ComboPanel } from './ComboPanel/ComboPanel';
import { QuestionPanel } from './QuestionPanel/QuestionPanel';
import { ButtonsPanel } from './ButtonsPanel/ButtonsPanel';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { Word } from '../../types/wordCard';
import { useTimer } from '../../hooks/useTimer';
import { Startbox } from './Startbox/Startbox';
import { useHistory } from 'react-router-dom';
import { GameResult } from '../../types/gameResult';
import { useActions } from '../../hooks/useActions';
import { gameToStat } from '../../types/dayStat';
import { addLearningWord } from '../../helpers/helpers';
import './Sprint.scss';
import { useHotkeys } from 'react-hotkeys-hook';

const soundCorrect = require('./sounds/correct.mp3').default;
const soundIncorrect = require('./sounds/incorrect.mp3').default;
const soundComboUp = require('./sounds/combo.mp3').default;
const soundWin = require('./sounds/win.mp3').default;

const initialStateAnswer = {
    audio: '',
    audioExample: '',
    audioMeaning: '',
    group: 0,
    id: '',
    image: '',
    page: 0,
    textExample: '',
    textExampleTranslate: '',
    textMeaning: '',
    textMeaningTranslate: '',
    transcription: '',
    word: '',
    wordTranslate: '',
};

const dayStat: gameToStat = { name: 'audio', series: 0, right: 0, wrong: 0, date: Date.now() };
let currentSeries = 0;

export const Sprint: React.FC = () => {
    const { words } = useTypedSelector((state) => state.wordCard);
    const { words: userWords } = useTypedSelector((state) => state.userWords);
    const { userId, token } = useTypedSelector((state) => state.user);
    const fullscreenHandle = useFullScreenHandle();
    const [soundEnabled, setSoundEnabled] = React.useState(true);
    const [correctSound] = useSound(soundCorrect, {
        soundEnabled: soundEnabled,
    });
    const [incorrectSound] = useSound(soundIncorrect, {
        soundEnabled: soundEnabled,
    });
    const [comboSound] = useSound(soundComboUp, {
        soundEnabled: soundEnabled,
    });
    const [winSound] = useSound(soundWin, {
        soundEnabled: soundEnabled,
    });
    const history = useHistory();

    const [score, setScore] = useState(0);
    const [point, setPoint] = useState(10);
    const [speedCombo, setSpeedCombo] = useState(1);
    const [answers, setAnswers] = useState<Array<boolean>>([]);
    const [selectWord, setSelectWord] = useState<Word>(initialStateAnswer);
    const [selectIndex, setSelectIndex] = useState(0);
    const [randomWord, setRandomWord] = useState<Word>(initialStateAnswer);
    const [selectRandomIndex, setSelectRandomIndex] = useState(0);
    const [wordsArray, setWordsArray] = useState<Array<Word>>(words);
    const [gameStart, setGameStart] = useState(false);
    const [gameDone, setGameDone] = useState(false);
    const { setResults, clearResults } = useActions();
    const { SetStat } = useActions();

    const timer = useTimer(60, gameStart, () => {
        setGameDone((gameDone) => !gameDone);
        winSound();
        if (currentSeries) dayStat.series = currentSeries;
        SetStat(dayStat);
        history.push('result');
    });

    useEffect(() => {
        shuffleWords();
        clearResults();
    }, []);

    useEffect(() => {
        if (selectIndex > wordsArray.length - 1) {
            shuffleWords();
            setSelectIndex(0);
        } else {
            setSelectWord(wordsArray[selectIndex]);
            setRandomWord(wordsArray[selectRandomIndex]);
        }
    }, [selectIndex]);

    useEffect(() => {
        if (answers.length === 3 || answers.includes(false)) {
            setTimeout(() => {
                setAnswers(() => []);
            }, 250);
            updateCombo();
        }
    }, [answers]);

    useHotkeys(
        'right',
        () => {
            correctClick();
        },
        [],
    );
    useHotkeys(
        'left',
        () => {
            incorrectClick();
        },
        [],
    );

    const correctClick = () => {
        const rez: GameResult = {
            resultWord: selectWord,
            game: {
                right: 0,
                wrong: 0,
            },
        };
        if (selectWord.id === randomWord.id) {
            rez.game.right = 1;
            correctAnswer();
            dayStat.right += 1;
            currentSeries += 1;
        } else {
            rez.game.wrong = 1;
            incorrectAnswer();
            dayStat.wrong += 1;
            if (currentSeries > dayStat.series) dayStat.series = currentSeries;
            currentSeries = 0;
        }
        setResults(rez);
    };

    const incorrectClick = () => {
        const rez: GameResult = {
            resultWord: selectWord,
            game: {
                right: 0,
                wrong: 0,
            },
        };
        if (selectWord.id !== randomWord.id) {
            rez.game.right = 1;
            correctAnswer();
            dayStat.right += 1;
            currentSeries += 1;
        } else {
            rez.game.wrong = 1;
            incorrectAnswer();
            dayStat.wrong += 1;
            if (currentSeries > dayStat.series) dayStat.series = currentSeries;
            currentSeries = 0;
        }

        setResults(rez);
    };

    const correctAnswer = () => {
        setScore((score) => score + point);
        setAnswer(true);
        correctSound();
    };

    const incorrectAnswer = () => {
        setAnswer(false);
        resetCombo();
        incorrectSound();
    };

    const setAnswer = async (state: boolean) => {
        await addLearningWord(wordsArray[selectIndex].id, userWords, userId, token);
        setAnswers((answers) => {
            const answersCopy = Array.from(answers);
            answersCopy.push(state);
            return answersCopy;
        });
        setSelectIndex((selectIndex) => selectIndex + 1);
        setSelectRandomIndex(getRandomIndexWord());
    };

    const updateCombo = () => {
        if (answers.length === 3 && !answers.includes(false) && speedCombo < 4) {
            setSpeedCombo((speedCombo) => speedCombo + 1);
            setPoint((point) => point * 2);
            comboSound();
        }
    };

    const resetCombo = () => {
        setSpeedCombo(1);
        setPoint(10);
    };

    const shuffleWords = () => {
        const array = Array.from(wordsArray);
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setWordsArray(array);
    };

    const getRandomIndexWord = (): number => {
        const probability = Math.random();
        if (probability <= 0.6) {
            return selectIndex === wordsArray.length - 1 ? 0 : selectIndex + 1;
        } else {
            return getRandomNumber(1, wordsArray.length - 1);
        }
    };

    const getRandomNumber = (min: number, max: number): number => {
        const randNumber: number = min + Math.random() * (max + 1 - min);
        return Math.floor(randNumber);
    };

    const fullscreenHandler = () => (fullscreenHandle.active ? fullscreenHandle.exit : fullscreenHandle.enter);

    const onChangeVolume = () => {
        setSoundEnabled((soundEnabled) => !soundEnabled);
    };

    return (
        <FullScreen handle={fullscreenHandle}>
            <div className={`sprint-game ${fullscreenHandle.active ? 'sprint-game__fullscreen' : ''}`}>
                <ControlPanel
                    score={score}
                    time={timer.time}
                    onFullscreen={fullscreenHandler()}
                    onChangeVolume={onChangeVolume}
                />
                {gameDone ? (
                    <h1>Done</h1>
                ) : (
                    <>
                        <AnswerPanel answers={answers} />
                        <ComboPanel gainPoint={speedCombo - 1} />
                        {gameStart ? (
                            <>
                                <QuestionPanel word={selectWord.word} translate={randomWord.wordTranslate} />
                                <ButtonsPanel
                                    correctClickHandler={correctClick}
                                    incorrectClickHandler={incorrectClick}
                                />
                            </>
                        ) : (
                            <Startbox
                                onStart={() => {
                                    setGameStart(true);
                                }}
                            />
                        )}
                    </>
                )}
            </div>
        </FullScreen>
    );
};
