import React from 'react';
import { WordButtons } from './WordButtons/WordButtons';

import './WordCard.scss';
import { WordGames } from './WordGames/WordGames';
import { Word } from '../../types/wordCard';
import ReactHtmlParser from 'react-html-parser';
import { WordAudio } from './WordAudio/WordAudio';

const BASE_URL = 'https://react-learnwords-example.herokuapp.com/';

interface Props {
    word: Word;
}

export const WordCard: React.FC<Props> = ({ word }: Props) => {
    return (
        <div className='word-card-wrapper'>
            <h4>WordCard</h4>
            <WordAudio
                audio={word.audio}
                audioMeaning={word.audioMeaning}
                audioExample={word.audioExample}
                BASE_URL={BASE_URL}
            />
            <div className='wodr-wrapper'>
                <div className='word-image-wrapper' style={{ backgroundImage: `url("${BASE_URL}${word.image}")` }}>
                    {/* <img src={`${BASE_URL}${word.image}`} alt={`${word.word}`} /> */}
                </div>
                <div className='word-discription'>
                    <div className='word'> {word.word}</div>
                    <div className='transcription'> {word.transcription}</div>
                    <div className='translation'> {word.wordTranslate}</div>
                    <div className='word-sentence'>{ReactHtmlParser(word.textExample)} </div>
                    <div className='word-sentence-translation'> {word.textExampleTranslate}</div>
                </div>
            </div>
            <div className='registration-wrapper '>
                <WordButtons />
                <WordGames />
            </div>
        </div>
    );
};
