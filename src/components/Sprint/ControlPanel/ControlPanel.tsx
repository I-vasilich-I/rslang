import React from 'react';

import './ConstrolPanel.scss';
import { Timer } from './Сontrollers/Timer/Timer';
import { Score } from './Сontrollers/Score/Score';
import { Sound } from './Сontrollers/Sound/Sound';

export const ControlPanel: React.FC = () => {
    return (
        <div className='control-wrapper'>
            <Timer />
            <Score />
            <Sound mute={false} />
        </div>
    );
};
