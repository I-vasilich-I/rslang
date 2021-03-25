import React from 'react';

import './WordButtons.scss';

export const WordButtons: React.FC = () => {
    return (
        <div className='word-btn-wrapper'>
            <button className='word-btn-complicated'>to complicated</button>
            <button className='word-btn-deleted'>to deleted</button>
        </div>
    );
};
