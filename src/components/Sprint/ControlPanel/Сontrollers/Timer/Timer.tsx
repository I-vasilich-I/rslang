import React from 'react';
import TimerIcon from '@material-ui/icons/Timer';

import './Timer.scss';
import { useTimer } from '../../../../../hooks/useTimer';

export const Timer: React.FC = () => {
    const timer = useTimer(60, () => {
        alert('Game Over!');
    });

    return (
        <div className='timer-control' title='Отсчёт времени'>
            <TimerIcon />
            <span className='timer-control__value'>{timer.time}</span>
        </div>
    );
};
