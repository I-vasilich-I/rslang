import React from 'react';
import { Howl } from 'howler';
import { BACKEND_API_URL } from '../../../constants/constants';

interface iProps {
    audio: string;
    audioMeaning: string;
    audioExample: string;
}

export const WordAudio: React.FC<iProps> = ({ audio, audioMeaning, audioExample }: iProps) => {
    const sound = new Howl({
        src: [`${BACKEND_API_URL}${audio}`],
    });
    const soundMeaning = new Howl({
        src: [`${BACKEND_API_URL}${audioMeaning}`],
    });
    const soundExample = new Howl({
        src: [`${BACKEND_API_URL}${audioExample}`],
    });

    sound.on('end', () => {
        soundMeaning.play();
    });

    soundMeaning.on('end', () => {
        soundExample.play();
    });

    soundExample.on('end', () => {
        soundExample.stop();
    });

    const playHandler = () => {
        if (sound.playing()) {
            sound.stop();
        } else if (soundMeaning.playing()) {
            soundMeaning.stop();
        } else if (soundExample.playing()) {
            soundExample.stop();
        } else sound.play();
    };

    return (
        <div className='word-audio-wrapper'>
            <div className='word-audio-toggle' onClick={playHandler}></div>
        </div>
    );
};
