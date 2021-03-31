import React from 'react';
import TimerIcon from '@material-ui/icons/Timer';

import './Timer.scss';

interface TimerProps {
    value: number;
}

export const Timer: React.FC<TimerProps> = (props: TimerProps) => {
    return (
        <div className='timer-control' title='Отсчёт времени'>
            <TimerIcon />
            <span className='timer-control__value'>{props.value}</span>
        </div>
    );
};
