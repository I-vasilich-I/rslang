// import React from 'react';
import { Howl, Howler } from 'howler';
import { BACKEND_API_URL } from '../constants/constants';
// import { useTypedSelector } from '../hooks/useTypeSelector';
// import { useActions } from '../hooks/useActions';

export const soundHandler = (audio: string, audioMeaning: string, audioExample: string) => {
    // const { sound: reduxSound } = useTypedSelector((state) => state.sound);
    // const { setSound } = useActions();

    const sound = new Howl({
        src: [`${BACKEND_API_URL}${audio}`],
    });
    const soundMeaning = new Howl({
        src: [`${BACKEND_API_URL}${audioMeaning}`],
    });
    const soundExample = new Howl({
        src: [`${BACKEND_API_URL}${audioExample}`],
    });

    // if (reduxSound > 0) {
    //     sound.stop(reduxSound);
    //     soundMeaning.stop(reduxSound);
    //     soundExample.stop(reduxSound);
    // }

    sound.on('end', () => {
        soundMeaning.play();
    });
    soundMeaning.on('end', () => {
        soundExample.play();
    });
    soundExample.on('end', () => {
        soundExample.stop();
        //setSound(-1);
    });

    return () => {
        if (sound.playing()) {
            sound.stop();
            //sound.stop(reduxSound);
        } else if (soundMeaning.playing()) {
            soundMeaning.stop();
            //soundMeaning.stop(reduxSound);
        } else if (soundExample.playing()) {
            soundExample.stop();
            //soundMeaning.stop(reduxSound);
        } else {
            Howler.unload;
            sound.play();
            //setSound(sound.play());
        }
    };
};
