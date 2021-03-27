import React, { useEffect, useState } from 'react';

import './Sprint.scss';
import { ControlPanel } from './ControlPanel/ControlPanel';
import { AnswerPanel } from './AnswerPanel/AnswerPanel';
import { ComboPanel } from './ComboPanel/ComboPanel';
import { QuestionPanel } from './QuestionPanel/QuestionPanel';
import { ButtonsPanel } from './ButtonsPanel/ButtonsPanel';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { Word } from '../../types/wordCard';

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
    const [score, setScore] = useState(0);
    const [point, setPoint] = useState(10);
    const [speedCombo, setSpeedCombo] = useState(1);
    const [answers, setAnswers] = useState<Array<boolean>>([]);

    const { words } = useTypedSelector((state) => state.wordCard);

    const [selectWord, setSelectWord] = useState<Word>(initialStateAnswer);
    const [selectIndex, setSelectIndex] = useState(0);
    const [randomWord, setRandomWord] = useState<Word>(initialStateAnswer);
    const [wordsArray, setWordsArray] = useState<Array<Word>>(words);

    console.log(words, wordsArray);

    useEffect(() => {
        shuffleWords();
    }, []);

    useEffect(() => {
        if (selectIndex > wordsArray.length - 1) {
            shuffleWords();
            setSelectIndex(0);
        } else {
            setSelectWord(wordsArray[selectIndex]);
            setRandomWord(wordsArray[selectIndex]);
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
        setSelectIndex((selectIndex) => selectIndex + 1);
        setScore((score) => score + point);
        setAnswer(true);
    };

    const incorrectClick = () => {
        setSelectIndex((selectIndex) => selectIndex + 1);
        setAnswer(false);
        resetCombo();
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

    return (
        <div className='sprint-game'>
            <ControlPanel score={score} />
            <AnswerPanel answers={answers} />
            <ComboPanel gainPoint={speedCombo - 1} />
            <QuestionPanel word={selectWord.word} translate={randomWord.wordTranslate} />
            <ButtonsPanel correctClickHandler={correctClick} incorrectClickHandler={incorrectClick} />
        </div>
    );
};
