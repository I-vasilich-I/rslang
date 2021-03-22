import React, { useEffect, useState } from 'react';

import './Sound.scss';
import VolumeOn from '@material-ui/icons/VolumeUp';
import VolumeOff from '@material-ui/icons/VolumeOff';

interface SoundProps {
    mute: boolean;
}

export const Sound: React.FC<SoundProps> = (props: SoundProps) => {
    const [muteState, setMuteState] = useState(false);
    const changeMute = (): void => {
        setMuteState(!muteState);
    };

    useEffect(() => {
        setMuteState(props.mute);
    }, []);

    return (
        <div className='sound-control'>
            <div
                className='sound-control__wrapper'
                title={muteState ? 'Включить звук' : 'Выключить звук'}
                onClick={() => {
                    changeMute();
                }}
            >
                {muteState ? <VolumeOff /> : <VolumeOn />}
            </div>
        </div>
    );
};
