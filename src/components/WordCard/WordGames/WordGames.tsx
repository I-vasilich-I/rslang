import React from 'react';

import './WordGames.scss';

export const WordGames: React.FC = () => {
    return (
        <div className='word-games-wrapper'>
            <span className='word-game word-savana'>savana 10% </span>
            <span className='word-game word-audio'>audio 50% </span>
            <span className='word-game word-sprint'>sprint 40% </span>
            <span className='word-game word-own'>own 90% </span>
        </div>
    );
};
