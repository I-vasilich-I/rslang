import React, { useState } from 'react';

import './Sound.scss';
import VolumeOn from '@material-ui/icons/VolumeUp';
import VolumeOff from '@material-ui/icons/VolumeOff';

interface SoundProps {
    changeVolume: () => void;
}

export const Sound: React.FC<SoundProps> = (props: SoundProps) => {
    const [muteState, setMuteState] = useState(false);

    return (
        <div className='sound-control'>
            <div
                className='sound-control__wrapper'
                title={muteState ? 'Включить звук' : 'Выключить звук'}
                onClick={() => {
                    setMuteState((muteState) => !muteState);
                    props.changeVolume();
                }}
            >
                {muteState ? <VolumeOff /> : <VolumeOn />}
            </div>
        </div>
    );
};
