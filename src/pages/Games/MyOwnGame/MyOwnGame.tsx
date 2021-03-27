import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Howl } from 'howler';

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
    const BASE_URL = 'https://react-learnwords-example.herokuapp.com/';

    useEffect(() => {
        const arrayCopy: string[] = words[index].word.split('').slice();
        for (let i = arrayCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
        }
        console.log(arrayCopy);
        setRandomWord(arrayCopy);
        setWord(new Array(words[index].word.length).fill(''));
    }, [index]);

    const clickHandler = (e: string) => {
        if (words[index].word.split('')[wordIndex] === e) {
            setWordIndex((prev) => prev + 1);
            setWord(
                word.map((el, idx) => {
                    if (idx < wordIndex) {
                        return el;
                    } else if (idx === wordIndex) {
                        return e;
                    } else return '';
                }),
            );
        }
    };
    const playHandler = () => {
        const sound = new Howl({
            src: [`${BASE_URL}${words[index].audio}`],
        });
        sound.playing() ? sound.stop() : sound.play();
    };
    const showHandler = () => {
        setWord(words[index].word.split(''));
        setWordIndex(words[index].word.length);
    };
    const nextHandler = () => {
        if (index < words.length - 1) {
            setIndex((prev) => prev + 1);
        } else {
            setIndex(0);
        }
        setWordIndex(0);
        setHelp(false);
    };
    if (wordIndex < words[index].word.length) {
        return (
            <div className='game-my-wrapper'>
                <h1>My game</h1>
                <p className='game-my-word-translate par'>{`${words[index].wordTranslate}`}</p>
                <div className='game-my-word-wrapper'>
                    {word.map((el, idx) => (
                        <MyOwnGameEl letter={el} key={idx} />
                    ))}
                </div>

                <div className='game-my-word-variant-wrapper'>
                    {randomWord.map((el, idx) => (
                        <MyOwnGameElSelect letter={el} key={idx} click={clickHandler} />
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
                    <button className='game-my-button' onClick={() => showHandler()}>
                        show
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className='game-my-wrapper'>
            <h1>My game</h1>

            <p className='game-my-word-translate par'>{`${words[index].wordTranslate}`}</p>
            <div className='game-my-answer'>
                <button className='game-my-audio-button' onClick={() => playHandler()}>
                    sound
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
                <button className='game-my-button' onClick={() => nextHandler()}>
                    next
                </button>
            </div>
        </div>
    );
};
