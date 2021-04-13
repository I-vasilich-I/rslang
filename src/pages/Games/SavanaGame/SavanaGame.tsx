import React, { useEffect, useRef, useState } from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { Howl } from 'howler';
import { useHotkeys } from 'react-hotkeys-hook';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useActions } from '../../../hooks/useActions';
import { GameResult } from '../../../types/gameResult';
import { useHistory } from 'react-router-dom';
import { gameToStat } from '../../../types/dayStat';
import './SavanaGame.scss';
import { SavanaEl } from './SavanaEl/SavanaEl';
import { SavanaLife } from './SavanaLife/SavanaLife';
import { SavanaAccum } from './SavanaEl/SavanaAccum/SavanaAccum';
import { addLearningWord } from '../../../helpers/helpers';

const soundCorrect = require('../../../components/Sprint/sounds/correct.mp3').default;
const soundIncorrect = require('../../../components/Sprint/sounds/incorrect.mp3').default;

const dayStat: gameToStat = { name: 'audio', series: 0, right: 0, wrong: 0, date: Date.now() };
let currentSeries = 0;
export const SavanaGame: React.FC = () => {
    const { setResults, clearResults } = useActions();
    const { SetStat } = useActions();
    const { words } = useTypedSelector((state) => state.wordCard);
    const [index, setIndex] = useState(0);
    const [randomSet, setRandomSet] = useState<(string | number)[]>([]);
    const fullscreenHandle = useFullScreenHandle();
    const history = useHistory();
    const [lifes, setLifes] = useState(5);
    const timerId = useRef<number>();
    const { words: userWords } = useTypedSelector((state) => state.userWords);
    const { userId, token } = useTypedSelector((state) => state.user);

    const correct = new Howl({
        src: [soundCorrect],
    });
    const inCorrect = new Howl({
        src: [soundIncorrect],
    });

    const onlyValue: string[] = words.map((el) => el.wordTranslate);

    for (let i = 1; i <= 5; i++) {
        useHotkeys(
            i.toString(),
            () => {
                clickHandler(randomSet[i - 1]);
            },
            [randomSet],
        );
    }

    useEffect(() => {
        setRandomSet(getRandomSet(onlyValue, index));
        const id = window.setInterval(() => {
            clickHandler('');
        }, 3000);
        timerId.current = id;
        return () => {
            clearInterval(timerId.current);
        };
    }, [index]);

    useEffect(() => {
        clearResults();
    }, []);

    useEffect(() => {
        if (lifes === 0) {
            if (currentSeries && currentSeries > dayStat.series) dayStat.series = currentSeries;
            SetStat(dayStat);
            clearInterval(timerId.current);
            history.push('result');
        }
    }, [lifes]);

    const randomSample = (arr: string[], n: number) => {
        if (n >= arr.length - 1) {
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

    const shuffleArray = (array: (string | number)[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    const getRandomSet = (wordsArr: string[], index: number) => {
        const filteredWords = wordsArr.filter((el, idx) => idx !== index);
        const random = shuffleArray([...randomSample(filteredWords, 3), wordsArr[index]]);
        return random;
    };

    const clickHandler = async (translation: string | number) => {
        await addLearningWord(words[index].id, userWords, userId, token);
        const rez: GameResult = {
            resultWord: words[index],
            game: {
                right: 0,
                wrong: 0,
            },
        };
        if (translation === words[index].wordTranslate) {
            rez.game.right = 1;
            dayStat.right += 1;
            currentSeries += 1;
            correct.play();
        } else {
            setLifes((prev) => prev - 1);
            rez.game.wrong = 1;
            dayStat.wrong += 1;
            if (currentSeries > dayStat.series) dayStat.series = currentSeries;
            currentSeries = 0;
            inCorrect.play();
        }
        setResults(rez);
        if (index < words.length - 1) setIndex((prev) => prev + 1);
        else {
            if (currentSeries && currentSeries > dayStat.series) dayStat.series = currentSeries;
            SetStat(dayStat);
            history.push('result');
            clearInterval(timerId.current);
        }
    };

    const fullscreanHandler = () => (fullscreenHandle.active ? fullscreenHandle.exit : fullscreenHandle.enter);
    return (
        <FullScreen handle={fullscreenHandle}>
            <div className='game-savana-wrapper'>
                <div className='game-savana-title'>Савана </div>
                <button className='game-my-fullscrean' onClick={fullscreanHandler()}>
                    <FullscreenIcon />
                </button>
                <SavanaLife lifes={lifes} />

                <SavanaEl word={words[index].word} />
                <div className='game-savana-var-wrapper'>
                    {randomSet.map((el, idx) => (
                        <div className='game-savana-el' key={idx} onClick={() => clickHandler(el)}>
                            <span className='game-savana-number'>{idx + 1}</span>{' '}
                            <span className='game-savana-word'> {el}</span>
                        </div>
                    ))}
                </div>
                <SavanaAccum />
            </div>
        </FullScreen>
    );
};
