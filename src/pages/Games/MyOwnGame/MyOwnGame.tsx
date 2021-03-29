import React, { useEffect, useRef, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Howl } from 'howler';
import { useHotkeys } from 'react-hotkeys-hook';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

import './MyOwnGame.scss';
import { MyOwnGameEl } from './MyOwnGameEl/MyOwnGameEl';
import { MyOwnGameElSelect } from './MyOwnGameElSelect/MyOwnGameElSelect';
import question from '../../../assets/img/question-mark.png';
import { useTypedSelector } from '../../../hooks/useTypeSelector';

export const MyOwnGame: React.FC = (): JSX.Element => {
    const { words } = useTypedSelector((state) => state.wordCard);
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [index, setIndex] = useState<number>(0);
    const [word, setWord] = useState<string[]>([]);
    const [randomWord, setRandomWord] = useState<string[]>([]);
    const [help, setHelp] = useState<boolean>(false);
    const [clicked, setClicked] = useState<number[]>([]);
    const gameRef = useRef<HTMLInputElement>(null);
    const BASE_URL = 'https://react-learnwords-example.herokuapp.com/';

    const fullscreenHandle = useFullScreenHandle();
    console.log(index);
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

    useHotkeys(
        'space',
        () => {
            if (wordIndex === words[index].word.length) {
                console.log('next');
                nextHandler();
                setClicked([]);
            } else {
                console.log('show');

                showHandler();
            }
        },
        { filterPreventDefault: true },
        [wordIndex, index],
    );

    // for (let i = 0; i < ALPHABET.length; i += 1) {
    //     useHotkeys(
    //         ALPHABET[i],
    //         () => {
    //             if (ALPHABET[i] === currentWord[wordIndex]) {
    //                 let idx = randomWord.indexOf(ALPHABET[i]);
    //                 if (clicked.indexOf(idx) >= 0) {
    //                     idx = randomWord.lastIndexOf(ALPHABET[i]);
    //                 }
    //                 clickHandler(ALPHABET[i], idx);
    //             }
    //         },
    //         {},
    //         [wordIndex, randomWord],
    //     );
    // }
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
            src: [`${BASE_URL}${words[index].audio}`],
        });
        sound.playing() ? sound.stop() : sound.play();
    };
    const showHandler = () => {
        setWord(currentWord);
        setWordIndex(words[index].word.length);
    };
    const nextHandler = () => {
        setWordIndex(0);
        setClicked([]);
        setHelp((prev) => !prev);
        if (index < words.length - 1) {
            setIndex((prev) => prev + 1);
        } else setIndex(0);
    };
    const fullscreanHandler = () => (fullscreenHandle.active ? fullscreenHandle.exit : fullscreenHandle.enter);
    if (wordIndex < words[index].word.length) {
        return (
            <FullScreen handle={fullscreenHandle}>
                <div className='game-my-wrapper' ref={gameRef}>
                    <button className='game-my-fullscrean' onClick={fullscreanHandler()}>
                        fs
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
                            style={{ backgroundImage: `url("${BASE_URL}${words[index].image}")` }}
                        ></div>
                    ) : (
                        <div
                            className='game-my-picture'
                            style={{ backgroundImage: `url(${question})` }}
                            onClick={() => setHelp((prev) => !prev)}
                        ></div>
                    )}
                    <div className='game-my-buttons-wrapper'>
                        <button className='game-my-button' onClick={showHandler}>
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
                    fs
                </button>
                <p className='game-my-word-translate par'>{`${words[index].wordTranslate}`}</p>
                <div className='game-my-answer'>
                    <button className='game-my-audio-button' onClick={playHandler}>
                        звук
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
                    style={{ backgroundImage: `url("${BASE_URL}${words[index].image}")` }}
                ></div>
                <div className='game-my-sentence'>{ReactHtmlParser(words[index].textMeaning)}</div>
                <div className='game-my-buttons-wrapper'>
                    <button className='game-my-button' onClick={nextHandler}>
                        Следующий
                    </button>
                </div>
            </div>
        </FullScreen>
    );
};
