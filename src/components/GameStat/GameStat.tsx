import React from 'react';
import './GameStat.scss';
import { gameToStat } from '../../types/dayStat';

interface iProps {
    game: string;
    el: gameToStat[];
}
interface iGameNames {
    [index: string]: string;
}

export const GameStat: React.FC<iProps> = ({ game, el }: iProps) => {
    const init = 0;
    const wrong = el.reduce((acc, current) => acc + current.wrong, init);
    const rigth = el.reduce((acc, current) => acc + current.right, init);
    const topLong = el.reduce((a, b) => (a > b.series ? a : b.series), init);
    const persent = wrong !== 0 && rigth !== 0 ? Math.round((rigth / (rigth + wrong)) * 100) : 0;
    const gameNames: iGameNames = {
        sprint: 'Спринт',
        audio: 'Аудиовызов',
        savana: 'Савана',
        own: 'Конструктор слов',
        total: 'Всего',
    };

    return (
        <>
            <div className='stat-game-title'>{gameNames[game]}</div>
            <div className='stat-current-game '>
                <span className='stat-current-amount'>Слов изучено - {wrong + rigth}</span>
                <span className='stat-current-persent'>Процент - {persent}</span>
                {game !== 'total' && <span className='stat-current-top-long'>Наибольшая серия - {topLong}</span>}
            </div>
        </>
    );
};
