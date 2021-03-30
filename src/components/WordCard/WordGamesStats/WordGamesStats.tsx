import React from 'react';

import './WordGamesStats.scss';

export const WordGamesStats: React.FC = () => {
    return (
        <>
            <div className='word-game__title'>Статистика по слову в играх:</div>
            <div className='word-games-wrapper'>
                <span className='word-game word-savana'>savana 10% </span>
                <span className='word-game word-audio'>audio 50% </span>
                <span className='word-game word-sprint'>sprint 40% </span>
                <span className='word-game word-own'>own 90% </span>
            </div>
        </>
    );
};
