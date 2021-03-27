import React from 'react';

import './ControlPanel.scss';
import { Timer } from './Сontrollers/Timer/Timer';
import { Score } from './Сontrollers/Score/Score';
import { Sound } from './Сontrollers/Sound/Sound';

interface ControlPanelProps {
    score: number;
}

export const ControlPanel: React.FC<ControlPanelProps> = (props: ControlPanelProps) => {
    const { score } = props;

    return (
        <div className='control-wrapper'>
            <Timer />
            <Score value={score} />
            <Sound mute={false} />
        </div>
    );
};
