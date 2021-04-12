import React from 'react';
import { Timer } from './Сontrollers/Timer/Timer';
import { Score } from './Сontrollers/Score/Score';
import { Sound } from './Сontrollers/Sound/Sound';
import { Fullscreen } from './Сontrollers/Fullscreen/Fullscreen';
import './ControlPanel.scss';

interface ControlPanelProps {
    score: number;
    time: number;
    onFullscreen: () => void;
    onChangeVolume: () => void;
}

export const ControlPanel: React.FC<ControlPanelProps> = (props: ControlPanelProps) => {
    const { score, time, onFullscreen, onChangeVolume } = props;

    return (
        <div className='control-wrapper'>
            <Timer value={time} />
            <Score value={score} />
            <Sound changeVolume={onChangeVolume} />
            <Fullscreen clickHandler={onFullscreen} />
        </div>
    );
};
