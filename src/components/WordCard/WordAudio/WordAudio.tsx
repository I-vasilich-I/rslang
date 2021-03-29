import React from 'react';
import { Howl } from 'howler';

interface iProps {
    audio: string;
    audioMeaning: string;
    audioExample: string;
    BASE_URL: string;
}
export const WordAudio: React.FC<iProps> = ({ audio, audioMeaning, audioExample, BASE_URL }: iProps) => {
    const sound = new Howl({
        src: [`${BASE_URL}${audio}`],
    });
    const soundMeaning = new Howl({
        src: [`${BASE_URL}${audioMeaning}`],
    });
    const soundExample = new Howl({
        src: [`${BASE_URL}${audioExample}`],
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
            <div className='word-audio-toggle' onClick={() => playHandler()}></div>
        </div>
    );
};
