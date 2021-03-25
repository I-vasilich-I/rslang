import React, { useEffect, useState } from 'react';

import './MyOwnGame.scss';
import { MyOwnGameEl } from './MyOwnGameEl/MyOwnGameEl';
import { MyOwnGameElSelect } from './MyOwnGameElSelect/MyOwnGameElSelect';
import question from '../../../assets/img/question-mark.png';

export const MyOwnGame: React.FC = (): JSX.Element => {
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [index, setIndex] = useState<number>(0);
    const [word, setWord] = useState<string[]>([]);
    const [randomWord, setRandomWord] = useState<string[]>([]);
    const [help, setHelp] = useState<boolean>(false);
    const BASE_URL = 'https://react-learnwords-example.herokuapp.com/';
    const words = [
        {
            id: '5e9f5ee35eb9e72bc21af4a0',
            group: 0,
            page: 0,
            word: 'alcohol',
            image: 'files/01_0002.jpg',
            audio: 'files/01_0002.mp3',
            audioMeaning: 'files/01_0002_meaning.mp3',
            audioExample: 'files/01_0002_example.mp3',
            textMeaning: '<i>Alcohol</i> is a type of drink that can make people drunk.',
            textExample: 'A person should not drive a car after he or she has been drinking <b>alcohol</b>.',
            transcription: '[ǽlkəhɔ̀ːl]',
            textExampleTranslate: 'Человек не должен водить машину после того, как он выпил алкоголь',
            textMeaningTranslate: 'Алкоголь - это тип напитка, который может сделать людей пьяными',
            wordTranslate: 'алкоголь',
        },
        {
            id: '5e9f5ee35eb9e72bc21af4a2',
            group: 0,
            page: 0,
            word: 'boat',
            image: 'files/01_0005.jpg',
            audio: 'files/01_0005.mp3',
            audioMeaning: 'files/01_0005_meaning.mp3',
            audioExample: 'files/01_0005_example.mp3',
            textMeaning: 'A <i>boat</i> is a vehicle that moves across water.',
            textExample: 'There is a small <b>boat</b> on the lake.',
            transcription: '[bout]',
            textExampleTranslate: 'На озере есть маленькая лодка',
            textMeaningTranslate: 'Лодка - это транспортное средство, которое движется по воде',
            wordTranslate: 'лодка',
        },
        {
            id: '5e9f5ee35eb9e72bc21af4a1',
            group: 0,
            page: 0,
            word: 'agree',
            image: 'files/01_0001.jpg',
            audio: 'files/01_0001.mp3',
            audioMeaning: 'files/01_0001_meaning.mp3',
            audioExample: 'files/01_0001_example.mp3',
            textMeaning: 'To <i>agree</i> is to have the same opinion or belief as another person.',
            textExample: 'The students <b>agree</b> they have too much homework.',
            transcription: '[əgríː]',
            textExampleTranslate: 'Студенты согласны, что у них слишком много домашней работы',
            textMeaningTranslate: 'Согласиться - значит иметь то же мнение или убеждение, что и другой человек',
            wordTranslate: 'согласна',
        },
        {
            id: '5e9f5ee35eb9e72bc21af4a7',
            group: 0,
            page: 0,
            word: 'capital',
            image: 'files/01_0008.jpg',
            audio: 'files/01_0008.mp3',
            audioMeaning: 'files/01_0008_meaning.mp3',
            audioExample: 'files/01_0008_example.mp3',
            textMeaning: 'A <i>capital</i> is a city where a country’s government is based.',
            textExample: 'The <b>capital</b> of the United States is Washington, D.C.',
            transcription: '[kæpətl]',
            textExampleTranslate: 'Столица Соединенных Штатов - Вашингтон, округ Колумбия',
            textMeaningTranslate: 'Столица - это город, в котором базируется правительство страны',
            wordTranslate: 'столица',
        },
    ];
    const wordArray = words[index].word.split('');

    useEffect(() => {
        const arrayCopy: string[] = wordArray.slice();
        for (let i = arrayCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
        }
        console.log(arrayCopy);
        setRandomWord(arrayCopy);
        setWord(new Array(wordArray.length).fill(''));
    }, [index]);

    useEffect(() => {
        if (wordIndex === wordArray.length) console.log('win');
    }, [wordIndex, index]);

    const clickHandler = (e: string) => {
        if (wordArray[wordIndex] === e) {
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

    const showHandler = () => {
        setWord(wordArray);
        setWordIndex(wordArray.length);
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

    if (wordIndex < wordArray.length) {
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
                        <MyOwnGameElSelect letter={el} key={idx} select={'a'} click={clickHandler} />
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
                <button className='game-my-audio-button'>sound</button>
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
            <div className='game-my-sentence'>{words[index].textMeaning}</div>
            <div className='game-my-buttons-wrapper'>
                <button className='game-my-button' onClick={() => nextHandler()}>
                    next
                </button>
            </div>
        </div>
    );
};
