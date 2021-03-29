import React from 'react';
import './WordButtons.scss';

export const WordButtons: React.FC = () => {
    return (
        <div className='word-btn-wrapper'>
            <button className='word-btn-complicated'>в сложные слова</button>
            <button className='word-btn-deleted'>в удаленные слова</button>
        </div>
    );
};
