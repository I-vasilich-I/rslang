import React from 'react';
// import { Howl } from 'howler';
// import { BACKEND_API_URL } from '../../../constants/constants';
import { soundHandler } from '../../../helpers/soundHelper';

interface iProps {
    audio: string;
    audioMeaning: string;
    audioExample: string;
}
export const WordAudio: React.FC<iProps> = ({ audio, audioMeaning, audioExample }: iProps) => {
    const playHandler = soundHandler(audio, audioMeaning, audioExample);

    return (
        <div className='word-audio-wrapper'>
            <div className='word-audio-toggle' onClick={playHandler}></div>
        </div>
    );
};
