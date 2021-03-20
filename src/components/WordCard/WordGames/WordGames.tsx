import React from 'react';

import './WordGames.scss';

export const WordGames: React.FC = () => {
    return (
        <div className='word-games-wrapper'>
            <span className='word-game word-savana'>savana 1</span>
            <span className='word-game word-audio'>audio 1</span>
            <span className='word-game word-sprint'>sprint 1</span>
            <span className='word-game word-own'>own 1</span>
        </div>
    );
};
