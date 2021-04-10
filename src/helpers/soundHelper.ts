import React from 'react';
import { Howl } from 'howler';
import { BACKEND_API_URL } from '../constants/constants';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';

export const soundHandler = function (audio: string, audioMeaning: string, audioExample: string) {
    const { sound: reduxSound } = useTypedSelector((state) => state.sound);
    const { setSound } = useActions();

    const sound = new Howl({
        src: [`${BACKEND_API_URL}${audio}`],
    });
    const soundMeaning = new Howl({
        src: [`${BACKEND_API_URL}${audioMeaning}`],
    });
    const soundExample = new Howl({
        src: [`${BACKEND_API_URL}${audioExample}`],
    });

    if (reduxSound > 0) {
        sound.stop(reduxSound);
        soundMeaning.stop(reduxSound);
        soundExample.stop(reduxSound);
    }

    sound.on('end', () => {
        setSound(soundMeaning.play());
    });
    soundMeaning.on('end', () => {
        setSound(soundExample.play());
    });
    soundExample.on('end', () => {
        soundExample.stop();
        setSound(-1);
    });

    return function () {
        if (sound.playing() || reduxSound !== -1) {
            //sound.stop();
            sound.stop(reduxSound);
        } else if (soundMeaning.playing() || reduxSound !== -1) {
            // soundMeaning.stop();
            soundMeaning.stop(reduxSound);
        } else if (soundExample.playing() || reduxSound !== -1) {
            // soundExample.stop();
            soundMeaning.stop(reduxSound);
        } else {
            setSound(sound.play());
        }
    };
    //playHandler();
};
