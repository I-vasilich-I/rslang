import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { Howl } from 'howler';
import { useHotkeys } from 'react-hotkeys-hook';

import './AudioChallengeGame.scss';

export const AudioChallengeGame: React.FC = () => {
    const { words } = useTypedSelector((state) => state.wordCard);
    const [index, setIndex] = useState(0);
    const [guessed, setGuessed] = useState(false);
    const [clicked, setClicked] = useState<string | number>('');
    const [randomSet, setRandomSet] = useState<(string | number)[]>([]);

    const onlyValue: string[] = words.map((el) => el.wordTranslate);
    const BASE_URL = 'https://react-learnwords-example.herokuapp.com/';

    useHotkeys(
        'space',
        () => {
            if (guessed) {
                nextHandler();
            } else {
                showHandler();
            }
        },
        { filterPreventDefault: true },
        [guessed],
    );

    for (let i = 1; i <= 5; i++) {
        useHotkeys(
            i.toString(),
            () => {
                clickHandler(randomSet[i - 1]);
            },
            { enabled: !guessed },
            [randomSet],
        );
    }

    useEffect(() => {
        setRandomSet(getRandomSet(onlyValue, index));
        playHandler();
        return () => {
            console.log('clear');
        };
    }, [index]);

    const randomSample = (arr: string[], n: number) => {
        if (n > arr.length) {
            throw new RangeError('to many items');
        }

        const sample = arr
            .map((a) => [a, Math.random()])
            .sort((a, b) => {
                return a[1] < b[1] ? -1 : 1;
            })
            .slice(0, n)
            .map((a) => a[0]);

        return sample;
    };

    const playHandler = () => {
        const sound = new Howl({
            src: [`${BASE_URL}${words[index].audio}`],
        });
        sound.play();
    };

    const playHelpHandler = () => {
        const sound = new Howl({
            src: [`${BASE_URL}${words[index].audioExample}`],
        });
        sound.playing() ? sound.stop() : sound.play();
    };

    const shuffleArray = (array: (string | number)[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    const getRandomSet = (wordsArr: string[], index: number) => {
        const filteredWords = wordsArr.filter((el, idx) => idx !== index);
        const random = shuffleArray([...randomSample(filteredWords, 4), wordsArr[index]]);
        return random;
    };
    const nextHandler = () => {
        setClicked('');
        setGuessed(false);
        if (index < words.length - 1) {
            setIndex((prev) => prev + 1);
        } else {
            setIndex(0);
        }
    };
    const clickHandler = (translation: string | number) => {
        setClicked(translation);
        if (translation === words[index].wordTranslate) {
            setGuessed((prev) => !prev);
        } else {
            setTimeout(() => setClicked(''), 1000);
        }
    };
    const showHandler = () => {
        setGuessed(true);
    };

    if (!guessed) {
        return (
            <div className='game-audio-wrapper'>
                <h1>Аудиовызов </h1>
                <button className='game-audio-button-play' onClick={() => playHandler()}>
                    Звук
                </button>
                <div className='game-audio-word-wrapper'>
                    <button className='game-audio-button-play-liitle' onClick={() => playHelpHandler()}>
                        помощь
                    </button>
                </div>
                <div className='game-audio-var-wrapper'>
                    {randomSet.map((el, idx) => (
                        <div
                            className={clicked === el ? 'game-audio-el clicked' : 'game-audio-el'}
                            key={idx}
                            onClick={() => clickHandler(el)}
                        >
                            <span className='game-audio-number'>{idx + 1}</span>{' '}
                            <span className='game-audio-word'> {el}</span>
                        </div>
                    ))}
                </div>
                <button className='game-audio-button' onClick={() => showHandler()}>
                    Показать
                </button>
            </div>
        );
    }
    return (
        <div className='game-audio-wrapper'>
            <h1>Аудиовызов </h1>
            <div
                className='game-audio-picture'
                style={{ backgroundImage: `url("${BASE_URL}${words[index].image}")` }}
            ></div>
            <div className='game-audio-word-wrapper'>
                <button className='game-audio-button-play-liitle' onClick={() => playHandler()}>
                    Звук
                </button>
                <div className='game-audio-word'>{words[index].word}</div>
            </div>
            <div className='game-audio-var-wrapper'>
                {randomSet.map((el, idx) => (
                    <div className={clicked === el ? 'game-audio-el rigth' : 'game-audio-el'} key={idx}>
                        <span className='game-audio-number'>{idx + 1}</span>{' '}
                        <span className='game-audio-word'> {el}</span>
                    </div>
                ))}
            </div>
            <button className='game-audio-button' onClick={() => nextHandler()}>
                Следующий
            </button>
        </div>
    );
};
