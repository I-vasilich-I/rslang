import React from 'react';

import './ControlPanel.scss';
import { Timer } from './Сontrollers/Timer/Timer';
import { Score } from './Сontrollers/Score/Score';
import { Sound } from './Сontrollers/Sound/Sound';

interface ControlPanelProps {
    score: number;
    time: number;
}

export const ControlPanel: React.FC<ControlPanelProps> = (props: ControlPanelProps) => {
    const { score, time } = props;

    return (
        <div className='control-wrapper'>
            <Timer value={time} />
            <Score value={score} />
            <Sound mute={false} />
        </div>
    );
};
