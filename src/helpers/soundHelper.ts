import { Howl, Howler } from 'howler';
import { BACKEND_API_URL } from '../constants/constants';

export const soundHandler = (audio: string, audioMeaning: string, audioExample: string) => {
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

    return () => {
        if (sound.playing()) {
            sound.stop();
        } else if (soundMeaning.playing()) {
            soundMeaning.stop();
        } else if (soundExample.playing()) {
            soundExample.stop();
        } else {
            Howler.unload;
            sound.play();
        }
    };
};
