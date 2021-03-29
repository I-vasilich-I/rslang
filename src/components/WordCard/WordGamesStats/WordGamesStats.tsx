import React from 'react';

import './WordGamesStats.scss';

export const WordGamesStats: React.FC = () => {
    return (
        <>
            <div className='word-game__title'>Статистика по слову в играх:</div>
            <div className='word-games-wrapper'>
                <span className='word-game word-savana'>Саванна: 123</span>
                <span className='word-game word-audio'>Аудиовызов: 123</span>
                <span className='word-game word-sprint'>Спринт: 123</span>
                <span className='word-game word-own'>Конструктор: 123</span>
            </div>
        </>
    );
};
