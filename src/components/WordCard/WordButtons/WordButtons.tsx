import React from 'react';

import './WordButtons.scss';

export const WordButtons: React.FC = () => {
    return (
        <div className='word-btn-wrapper'>
            <button className='word-sound'>sound</button>
            <button className='word-complicated'>to complicated</button>
            <button className='word-deleted'>to deleted</button>
        </div>
    );
};
