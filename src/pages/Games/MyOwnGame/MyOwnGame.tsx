import React, { useEffect, useRef, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Howl } from 'howler';
import { useHotkeys } from 'react-hotkeys-hook';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import VolumeOn from '@material-ui/icons/VolumeUp';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import { useHistory } from 'react-router-dom';
import { MyOwnGameEl } from './MyOwnGameEl/MyOwnGameEl';
import { MyOwnGameElSelect } from './MyOwnGameElSelect/MyOwnGameElSelect';
import question from '../../../assets/img/question-mark.png';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { useActions } from '../../../hooks/useActions';
import { GameResult } from '../../../types/gameResult';
import { BACKEND_API_URL } from '../../../constants/constants';
import { gameToStat } from '../../../types/dayStat';
import { addLearningWord } from '../../../helpers/helpers';
import './MyOwnGame.scss';

const dayStat: gameToStat = { name: 'own', series: 0, right: 0, wrong: 0, date: Date.now() };
let currentSeries = 0;

export const MyOwnGame: React.FC = (): JSX.Element => {
    const { setResults, clearResults } = useActions();
    const { words } = useTypedSelector((state) => state.wordCard);
    const { words: userWords } = useTypedSelector((state) => state.userWords);
    const { userId, token } = useTypedSelector((state) => state.user);
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [index, setIndex] = useState<number>(0);
    const [word, setWord] = useState<string[]>([]);
    const [randomWord, setRandomWord] = useState<string[]>([]);
    const [help, setHelp] = useState<boolean>(false);
    const [clicked, setClicked] = useState<number[]>([]);
    const gameRef = useRef<HTMLInputElement>(null);
    const [isWrong, setIsWrong] = useState(false);
    const history = useHistory();
    const { SetStat } = useActions();

    const fullscreenHandle = useFullScreenHandle();
    const currentWord = words[index].word.split('');
    const ALPHABET = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];

    useEffect(() => {
        const arrayCopy: string[] = currentWord.slice();
        for (let i = arrayCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
        }
        setRandomWord(arrayCopy);

        setWord(new Array(words[index].word.length).fill(''));
    }, [index]);

    useEffect(() => {
        clearResults();
    }, []);

    useHotkeys(
        'space',
        (event) => {
            if (wordIndex === words[index].word.length) {
                nextHandler();
                setClicked([]);
            } else {
                showHandler();
            }
            event.preventDefault();
        },
        { filterPreventDefault: true },
        [wordIndex, index],
    );

    ALPHABET.map((el) => {
        return useHotkeys(
            el,
            () => {
                if (el === currentWord[wordIndex]) {
                    let idx = randomWord.indexOf(el);
                    if (clicked.indexOf(idx) >= 0) {
                        idx = randomWord.lastIndexOf(el);
                    }
                    clickHandler(el, idx);
                }
            },
            {},
            [wordIndex, randomWord],
        );
    });

    const clickHandler = (letter: string, id: number) => {
        if (currentWord[wordIndex] === letter) {
            setClicked([...clicked, id]);
            setWordIndex((prev) => prev + 1);
            setWord((prev) => {
                return prev.map((el, idx) => {
                    if (idx < wordIndex) {
                        return el;
                    } else if (idx === wordIndex) {
                        return letter;
                    } else return '';
                });
            });
        }
    };
    const playHandler = () => {
        const sound = new Howl({
            src: [`${BACKEND_API_URL}${words[index].audio}`],
        });
        sound.playing() ? sound.stop() : sound.play();
    };
    const showHandler = () => {
        setIsWrong(true);
        setWord(currentWord);
        setWordIndex(words[index].word.length);
    };

    const nextHandler = async () => {
        await addLearningWord(words[index].id, userWords, userId, token);
        setWordIndex(0);
        setClicked([]);
        setHelp((prev) => !prev);

        const rez: GameResult = {
            resultWord: words[index],
            game: {
                right: 0,
                wrong: 0,
            },
        };
        if (isWrong) {
            rez.game.wrong = 1;
            dayStat.wrong += 1;
            if (currentSeries > dayStat.series) dayStat.series = currentSeries;
            currentSeries = 0;
            setIsWrong(false);
        } else {
            rez.game.right = 1;
            dayStat.right += 1;
            currentSeries += 1;
        }
        if (index < words.length - 1) {
            setIndex((prev) => prev + 1);
        } else {
            if (currentSeries && currentSeries > dayStat.series) dayStat.series = currentSeries;
            SetStat(dayStat);
            history.push('result');
        }
        setResults(rez);
    };
    const fullscreanHandler = () => (fullscreenHandle.active ? fullscreenHandle.exit : fullscreenHandle.enter);
    if (wordIndex < words[index].word.length) {
        return (
            <FullScreen handle={fullscreenHandle}>
                <div className='game-my-wrapper' ref={gameRef}>
                    <button className='game-my-fullscrean' onClick={fullscreanHandler()}>
                        <FullscreenIcon />
                    </button>
                    <h1>Конструктор слов</h1>
                    <p className='game-my-word-translate par'>{`${words[index].wordTranslate}`}</p>
                    <div className='game-my-word-wrapper'>
                        {word.map((el, idx) => (
                            <MyOwnGameEl letter={el} key={idx} />
                        ))}
                    </div>

                    <div className='game-my-word-variant-wrapper'>
                        {randomWord.map((el, idx) => (
                            <MyOwnGameElSelect letter={el} key={idx} id={idx} clicked={clicked} click={clickHandler} />
                        ))}
                    </div>

                    {help ? (
                        <div
                            className='game-my-picture'
                            style={{ backgroundImage: `url("${BACKEND_API_URL}${words[index].image}")` }}
                        ></div>
                    ) : (
                        <div
                            className='game-my-picture'
                            style={{ backgroundImage: `url(${question})` }}
                            onClick={() => setHelp((prev) => !prev)}
                        ></div>
                    )}
                    <div className='game-my-buttons-wrapper'>
                        <button className='game-my-button button-show' onClick={showHandler}>
                            показать
                        </button>
                    </div>
                </div>
            </FullScreen>
        );
    }

    return (
        <FullScreen handle={fullscreenHandle}>
            <div className='game-my-wrapper'>
                <h1>Конструктор слов</h1>
                <button className='game-my-fullscrean' onClick={fullscreanHandler()}>
                    <FullscreenIcon />
                </button>
                <p className='game-my-word-translate par'>{`${words[index].wordTranslate}`}</p>
                <div className='game-my-answer'>
                    <button className='game-my-audio-button' onClick={playHandler}>
                        <VolumeOn />
                    </button>
                    <p className='game-my-word par'>{`${words[index].word}`}</p>

                    <p className='game-my-transcr par'>{`${words[index].transcription}`}</p>
                </div>
                <div className='game-my-word-wrapper'>
                    {word.map((el, idx) => (
                        <MyOwnGameEl letter={el} key={idx} />
                    ))}
                </div>
                <div
                    className='game-my-picture'
                    style={{ backgroundImage: `url("${BACKEND_API_URL}${words[index].image}")` }}
                ></div>
                <div className='game-my-sentence par'>{ReactHtmlParser(words[index].textMeaning)}</div>
                <div className='game-my-buttons-wrapper'>
                    <button className='game-my-button button-next' onClick={nextHandler}>
                        Следующий
                    </button>
                </div>
            </div>
        </FullScreen>
    );
};
