import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Howl } from 'howler';
import { useHotkeys } from 'react-hotkeys-hook';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import VolumeOn from '@material-ui/icons/VolumeUp';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { useActions } from '../../../hooks/useActions';
import { GameResult } from '../../../types/gameResult';
import { BACKEND_API_URL } from '../../../constants/constants';
import { gameToStat } from '../../../types/dayStat';
import { addLearningWord } from '../../../helpers/helpers';
import './AudioChallengeGame.scss';

const dayStat: gameToStat = { name: 'audio', series: 0, right: 0, wrong: 0, date: Date.now() };
let currentSeries = 0;

export const AudioChallengeGame: React.FC = () => {
    const { setResults, clearResults } = useActions();
    const { SetStat } = useActions();
    const { words } = useTypedSelector((state) => state.wordCard);
    const { words: userWords } = useTypedSelector((state) => state.userWords);
    const { userId, token } = useTypedSelector((state) => state.user);
    const [index, setIndex] = useState(0);
    const [guessed, setGuessed] = useState(false);
    const [clicked, setClicked] = useState<string | number>('');
    const [randomSet, setRandomSet] = useState<(string | number)[]>([]);
    const fullscreenHandle = useFullScreenHandle();
    const history = useHistory();
    const [isWrong, setIsWrong] = useState(false);
    const onlyValue: string[] = words.map((el) => el.wordTranslate);

    useHotkeys(
        'space',
        (event) => {
            if (guessed) {
                nextHandler();
            } else {
                showHandler();
            }
            event.preventDefault();
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
    }, [index]);

    useEffect(() => {
        clearResults();
    }, []);

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
            src: [`${BACKEND_API_URL}${words[index].audio}`],
        });
        sound.play();
    };

    const playHelpHandler = () => {
        const sound = new Howl({
            src: [`${BACKEND_API_URL}${words[index].audioExample}`],
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
    const nextHandler = async () => {
        await addLearningWord(words[index].id, userWords, userId, token);
        setClicked('');
        setGuessed(false);

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
    const clickHandler = (translation: string | number) => {
        setClicked(translation);
        if (translation === words[index].wordTranslate) {
            setGuessed((prev) => !prev);
        } else {
            setTimeout(() => setClicked(''), 1000);
            setTimeout(() => showHandler(), 1500);
        }
    };
    const showHandler = () => {
        setIsWrong(true);
        setGuessed(true);
    };

    const fullscreanHandler = () => (fullscreenHandle.active ? fullscreenHandle.exit : fullscreenHandle.enter);

    if (!guessed) {
        return (
            <FullScreen handle={fullscreenHandle}>
                <div className='game-audio-wrapper'>
                    <button className='game-my-fullscrean' onClick={fullscreanHandler()}>
                        <FullscreenIcon />
                    </button>
                    <h1>???????????????????? </h1>
                    <button className='game-audio-button-play' onClick={() => playHandler()}>
                        <VolumeOn />
                    </button>
                    <div className='game-audio-word-wrapper'>
                        <button className='game-audio-button-play-help' onClick={() => playHelpHandler()}>
                            ????????????
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
                    <button className='game-my-button button-show' onClick={showHandler}>
                        ????????????????
                    </button>
                </div>
            </FullScreen>
        );
    }
    return (
        <FullScreen handle={fullscreenHandle}>
            <div className='game-audio-wrapper'>
                <button className='game-my-fullscrean' onClick={fullscreanHandler()}>
                    <FullscreenIcon />
                </button>
                <h1>???????????????????? </h1>
                <div
                    className='game-audio-picture'
                    style={{ backgroundImage: `url("${BACKEND_API_URL}${words[index].image}")` }}
                ></div>
                <div className='game-audio-word-wrapper'>
                    <button className='game-audio-button-play-liitle' onClick={() => playHandler()}>
                        <VolumeOn />
                    </button>
                    <div className='game-audio-word par'>{`${words[index].word} - ${words[index].wordTranslate}`}</div>
                </div>
                <div className='game-audio-var-wrapper'>
                    {randomSet.map((el, idx) => (
                        <div className={clicked === el ? 'game-audio-el rigth' : 'game-audio-el'} key={idx}>
                            <span className='game-audio-number'>{idx + 1}</span>{' '}
                            <span className='game-audio-word'> {el}</span>
                        </div>
                    ))}
                </div>
                <button className='game-my-button button-next' onClick={nextHandler}>
                    ??????????????????
                </button>
            </div>
        </FullScreen>
    );
};
