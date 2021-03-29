import React from 'react';

import './WordButtons.scss';

export const WordButtons: React.FC = () => {
    return (
        <div className='word-btn-wrapper'>
            <button className='word-btn-complicated button'>в сложные</button>
            <button className='word-btn-deleted button'>в удаленные</button>
        </div>
    );
};
