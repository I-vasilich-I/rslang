import React from 'react';
import { GamesResultString } from './GamesResultString/GamesResultString';
import { GameResult } from '../../../../types/gameResult';
import './GamesResultEl.scss';
interface iProps {
    title: string;
    count: number;
    words: GameResult[];
}
export const GamesResultEl: React.FC<iProps> = ({ title, count, words }: iProps) => {
    return (
        <div className='game-result-el-wrapper'>
            <div className='game-result-header'>{`${title} - ${count}`}</div>
            {words.map((el, idx) => (
                <GamesResultString key={idx} word={el} />
            ))}
        </div>
    );
};
