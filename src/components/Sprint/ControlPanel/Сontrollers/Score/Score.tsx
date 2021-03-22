import React from 'react';

import './Score.scss';
import PointIcon from './icons/point.png';

export const Score: React.FC = () => {
    return (
        <div className='score-control'>
            <div className='score-control__wrapper' title='Количество очков'>
                <div className='score-control__point'>
                    <img className='score-control__point__icon' src={PointIcon} alt='point' />
                </div>
                <span className='score-control__value'>0</span>
            </div>
        </div>
    );
};
