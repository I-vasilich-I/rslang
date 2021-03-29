import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { WordButtons } from './WordButtons/WordButtons';
import { WordGamesStats } from './WordGamesStats/WordGamesStats';
import { Word } from '../../types/wordCard';
import { WordAudio } from './WordAudio/WordAudio';
import { BACKEND_API_URL } from '../../constants/constants';
import './WordCard.scss';

interface Props {
    word: Word;
}

export const WordCard: React.FC<Props> = ({ word }: Props) => {
    return (
        <div className='word-card-wrapper'>
            <div className='wodr-wrapper'>
                <div
                    className='word-image-wrapper'
                    style={{ backgroundImage: `url("${BACKEND_API_URL}${word.image}")` }}
                >
                    {/* <img src={`${BASE_URL}${word.image}`} alt={`${word.word}`} /> */}
                </div>
                <div className='word-discription'>
                    <div className='word'>
                        {word.word}
                        {` | ${word.transcription}`}
                        {` | ${word.wordTranslate}`}
                    </div>
                    <div className='word-sentence'>{ReactHtmlParser(word.textMeaning)} </div>
                    <div className='word-sentence-translation'> {word.textMeaningTranslate}</div>
                    <div className='word-sentence'>{ReactHtmlParser(word.textExample)} </div>
                    <div className='word-sentence-translation'> {word.textExampleTranslate}</div>
                    <WordAudio audio={word.audio} audioMeaning={word.audioMeaning} audioExample={word.audioExample} />
                    <WordButtons />
                </div>
            </div>
            <WordGamesStats />
        </div>
    );
};
