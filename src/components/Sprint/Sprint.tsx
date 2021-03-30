import React, { useEffect, useState } from 'react';

import './Sprint.scss';
import { ControlPanel } from './ControlPanel/ControlPanel';
import { AnswerPanel } from './AnswerPanel/AnswerPanel';
import { ComboPanel } from './ComboPanel/ComboPanel';
import { QuestionPanel } from './QuestionPanel/QuestionPanel';
import { ButtonsPanel } from './ButtonsPanel/ButtonsPanel';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { Word } from '../../types/wordCard';
import useSound from 'use-sound';
import { useTimer } from '../../hooks/useTimer';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

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

export const Sprint: React.FC = () => {
    const { words } = useTypedSelector((state) => state.wordCard);
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

    const [score, setScore] = useState(0);
    const [point, setPoint] = useState(10);
    const [speedCombo, setSpeedCombo] = useState(1);
    const [answers, setAnswers] = useState<Array<boolean>>([]);

    const [selectWord, setSelectWord] = useState<Word>(initialStateAnswer);
    const [selectIndex, setSelectIndex] = useState(0);
    const [randomWord, setRandomWord] = useState<Word>(initialStateAnswer);
    const [selectRandomIndex, setSelectRandomIndex] = useState(0);
    const [wordsArray, setWordsArray] = useState<Array<Word>>(words);
    const [gameDone, setGameDone] = useState(false);

    const timer = useTimer(10, () => {
        setGameDone((gameDone) => !gameDone);
        winSound();
    });

    useEffect(() => {
        shuffleWords();
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

    const correctClick = () => {
        if (selectWord.id === randomWord.id) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    };

    const incorrectClick = () => {
        if (selectWord.id !== randomWord.id) {
            correctAnswer();
        } else {
            incorrectAnswer();
        }
    };

    const correctAnswer = () => {
        setScore((score) => score + point);
        setAnswer(true);
        correctSound();
        setSelectIndex((selectIndex) => selectIndex + 1);
        setSelectRandomIndex(getRandomIndexWord());
    };

    const incorrectAnswer = () => {
        setAnswer(false);
        resetCombo();
        incorrectSound();
        setSelectIndex((selectIndex) => selectIndex + 1);
        setSelectRandomIndex(getRandomIndexWord());
    };

    const setAnswer = (state: boolean) => {
        setAnswers((answers) => {
            const answersCopy = Array.from(answers);
            answersCopy.push(state);
            return answersCopy;
        });
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
                        <QuestionPanel word={selectWord.word} translate={randomWord.wordTranslate} />
                        <ButtonsPanel correctClickHandler={correctClick} incorrectClickHandler={incorrectClick} />
                    </>
                )}
            </div>
        </FullScreen>
    );
};