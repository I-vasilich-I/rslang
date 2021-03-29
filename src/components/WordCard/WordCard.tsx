import React from 'react';
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
                        {word.word} | {word.transcription}
                        {display ? ` | ${word.wordTranslate}` : ''}
                    </div>
                    <div className='word-sentence'>{ReactHtmlParser(word.textMeaning)} </div>
                    {display ? <div className='word-sentence-translation'> {word.textMeaningTranslate}</div> : null}
                    <div className='word-sentence'>{ReactHtmlParser(word.textExample)} </div>
                    {display ? <div className='word-sentence-translation'> {word.textExampleTranslate}</div> : null}
                    <WordAudio audio={word.audio} audioMeaning={word.audioMeaning} audioExample={word.audioExample} />
                    {buttons ? <WordButtons /> : null}
                </div>
            </div>
            <WordGamesStats />
        </div>
    );
};
