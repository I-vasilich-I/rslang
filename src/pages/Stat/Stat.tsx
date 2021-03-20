import React from 'react';

import './Stat.scss';

export const Stat: React.FC = () => {
    return (
        <div className='stat-wrapper'>
            <h1>Stat</h1>
            <div className='stat-current'>
                <p>Current</p>
                <div className='stat-game-title'>savana</div>
                <div className='stat-current-game stat-current-savana'>
                    <span className='stat-current-amount'>amount</span>
                    <span className='stat-current-persent'>persent</span>
                    <span className='stat-current-top-long'>top long</span>
                </div>
                <div className='stat-game-title'>audio</div>
                <div className='stat-current-game stat-current-audio'>
                    <span className='stat-current-amount'>amount</span>
                    <span className='stat-current-persent'>persent</span>
                    <span className='stat-current-top-long'>top long</span>
                </div>
                <div className='stat-game-title'>sprint</div>
                <div className='stat-current-game stat-current-sprint'>
                    <span className='stat-current-amount'>amount</span>
                    <span className='stat-current-persent'>persent</span>
                    <span className='stat-current-top-long'>top long</span>
                </div>
                <div className='stat-game-title'>own</div>
                <div className='stat-current-game stat-current-own'>
                    <span className='stat-current-amount'>amount</span>
                    <span className='stat-current-persent'>persent</span>
                    <span className='stat-current-top-long'>top long</span>
                </div>
                <div className='stat-game-title'>total</div>
                <div className='stat-current-total'>
                    <span className='stat-current-total-amount'>amount</span>
                    <span className='stat-current-total-persent'>persent</span>
                </div>
            </div>
            <div className='stat-total'>
                <div className='stat-total-amount'> amount graph</div>
                <div className='stat-total-growth'>growth graph</div>
            </div>
        </div>
    );
};
