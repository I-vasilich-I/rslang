import React from 'react';

import './Score.scss';
import PointIcon from './icons/point.png';

interface ScoreProps {
    value: number;
}

export const Score: React.FC<ScoreProps> = (props: ScoreProps) => {
    const { value } = props;

    return (
        <div className='score-control'>
            <div className='score-control__wrapper' title='Количество очков'>
                <div className='score-control__point'>
                    <img className='score-control__point__icon' src={PointIcon} alt='point' />
                </div>
                <span className='score-control__value'>{value}</span>
            </div>
        </div>
    );
};
