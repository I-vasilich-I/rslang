import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { WordButtons } from './WordButtons/WordButtons';
import { WordGamesStats } from './WordGamesStats/WordGamesStats';
import { Word } from '../../types/wordCard';
import { WordAudio } from './WordAudio/WordAudio';
import { BACKEND_API_URL } from '../../constants/constants';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import './WordCard.scss';

interface Props {
    word: Word;
}

export const WordCard: React.FC<Props> = ({ word }: Props) => {
    const { buttons, display } = useTypedSelector((state) => state.settings);
    const { words: userWords } = useTypedSelector((state) => state.userWords);
    const indicator = `difficulty-indicator difficulty-indicator--complicated`;
    const [indicatorComponent, setIndicatorComponent] = useState(
        userWords.find((elem) => elem.wordId === word.id && elem.difficulty === 'complicated') ? (
            <div className={indicator}>Сложно</div>
        ) : null,
    );
    const userWord = userWords.find((elem) => elem.wordId === word.id) || null;

    useEffect(() => {
        setIndicatorComponent(
            userWords.find((elem) => elem.wordId === word.id && elem.difficulty === 'complicated') ? (
                <div className={indicator}>Сложно</div>
            ) : null,
        );
    }, [userWords]);

    return (
        <div className='word-card-wrapper'>
            <div className='wodr-wrapper'>
                <div
                    className='word-image-wrapper'
                    style={{ backgroundImage: `url("${BACKEND_API_URL}${word.image}")` }}
                ></div>
                <div className='word-discription'>
                    <div className='word'>
                        {' '}
                        {word.word}
                        <WordAudio
                            audio={word.audio}
                            audioMeaning={word.audioMeaning}
                            audioExample={word.audioExample}
                        />
                    </div>
                    <div className='transcription'> {word.transcription}</div>

                    {display ? <div className='translation'> {word.wordTranslate}</div> : null}
                    <div className='word-sentence'>{ReactHtmlParser(word.textMeaning)} </div>
                    {display ? <div className='word-sentence-translation'>{word.textMeaningTranslate}</div> : null}
                    <div className='word-sentence'>{ReactHtmlParser(word.textExample)} </div>
                    {display ? <div className='word-sentence-translation'>{word.textExampleTranslate}</div> : null}
                </div>
            </div>
            <div className='registration-wrapper '>
                {buttons ? <WordButtons wordId={word.id} /> : null}
                <WordGamesStats wordId={word.id} userWord={userWord} />
            </div>
            {indicatorComponent}
        </div>
    );
};
