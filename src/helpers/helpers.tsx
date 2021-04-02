import { User, UserWord, UserWordToken, CreateUser, LoginUser, WordToSend } from '../types/interfaces';
import { USERS_API_URL, SIGNIN_API_URL } from '../constants/constants';

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

const createUserWord = async ({ userId, wordId, word, token }: UserWordToken): Promise<WordToSend> => {
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

const updateUserWord = async ({ userId, wordId, word, token }: UserWordToken): Promise<WordToSend> => {
    const params = {
        method: 'PUT',
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

const deleteUserWord = async ({ userId, wordId, token }: UserWordToken): Promise<void> => {
    const params = {
        method: 'DELETE',
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    };
    await fetch(`${USERS_API_URL}/${userId}/words/${wordId}`, params);
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

const getUserWords = async ({ userId, token }: UserWordToken): Promise<UserWord[]> => {
    const params = {
        method: 'GET',
        withCredentials: true,
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    };
    const rawResponse = await fetch(`${USERS_API_URL}/${userId}/words`, params);
    const content = await rawResponse.json();
    return content;
};

export { createUser, loginUser, getUserWord, getUserWords, createUserWord, updateUserWord, deleteUserWord };
