import { User, UserWord, UserWordToken, CreateUser, LoginUser } from '../types/interfaces';
import { USERS_API_URL, SIGNIN_API_URL } from '../constants/constants';
import { Howl } from 'howler';
import { BACKEND_API_URL } from '../constants/constants';
import { Audio } from '../types/interfaces';

const createUser = async (user: User): Promise<CreateUser> => {
    const rawResponse = await fetch(USERS_API_URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    const content = await rawResponse.json();

    return content;
};

const loginUser = async (user: User): Promise<LoginUser> => {
    const rawResponse = await fetch(SIGNIN_API_URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    const content = await rawResponse.json();

    return content;
};

const createUserWord = async ({ userId, wordId, word, token }: UserWordToken): Promise<UserWord> => {
    const params = {
        method: 'POST',
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(word),
    };
    const rawResponse = await fetch(`${USERS_API_URL}/${userId}/words/${wordId}`, params);
    const content = await rawResponse.json();

    return content;
};

const getUserWord = async ({ userId, wordId, token }: UserWordToken): Promise<UserWord> => {
    const params = {
        method: 'GET',
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    };
    const rawResponse = await fetch(`${USERS_API_URL}/${userId}/words/${wordId}`, params);
    const content = await rawResponse.json();

    return content;
};

const playAudio = (args: string[]) => {
    const sound = new Howl({
        src: [`${BACKEND_API_URL}${args[0]}`],
    });
    const soundMeaning = new Howl({
        src: [`${BACKEND_API_URL}${args[1]}`],
    });
    const soundExample = new Howl({
        src: [`${BACKEND_API_URL}${args[2]}`],
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

    playHandler();
};

export { createUser, loginUser, getUserWord, createUserWord, playAudio };
