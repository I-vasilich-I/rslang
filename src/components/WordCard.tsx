import React from 'react';
import { WordButtons } from './WordButtons';

import './WordCard.scss';
import { WordGames } from './WordGames';

interface Props {
    name: string;
}

export const WordCard: React.FC<Props> = ({ name }: Props) => {
    return (
        <div className='word-card-wrapper'>
            <h1>WordCard {name}</h1>
            <div className='wodr-wrapper'>
                <div className='word-image-wrapper'>image</div>
                <div className='word-discription'>
                    <div className='word'> word</div>
                    <div className='transcription'> transcription</div>
                    <div className='translation'> translation</div>
                    <div className='word-sentence'> sentence</div>
                    <div className='word-sentence-translation'> sentence translation</div>
                </div>
            </div>
            <WordButtons />
            <WordGames />
        </div>
    );
};
