import React from 'react';
import TimerIcon from '@material-ui/icons/Timer';

import './Timer.scss';

export const Timer: React.FC = () => {
    return (
        <div className='timer-control' title='Отсчёт времени'>
            <TimerIcon />
            <span className='timer-control__value'>60</span>
        </div>
    );
};
