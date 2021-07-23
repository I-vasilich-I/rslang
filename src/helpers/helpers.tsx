import { User, UserWord, UserWordToken, CreateUser, LoginUser, WordToSend } from '../types/interfaces';
import { USERS_API_URL, SIGNIN_API_URL } from '../constants/constants';
import { Word } from '../types/wordCard';

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

// helper to set wordsArray for DictionaryPage & SchoolPage
function conditions(elem1: UserWord, elem2: Word, id = ''): boolean {
    if (id === 'learning') return elem1.wordId === elem2.id;
    if (id === 'deleted') return elem1.wordId === elem2.id && elem1.difficulty === 'deleted';
    return elem1.wordId === elem2.id && elem1.difficulty === 'complicated';
}

const prepareWord = (oldWord?: WordToSend): WordToSend => {
    const difficulty = 'learning';
    if (oldWord) return { difficulty, optional: oldWord.optional };
    return { difficulty };
};

const addLearningWord = async (wordId: string, userWords: UserWord[], userId: string, token: string): Promise<void> => {
    const userWord = userWords.find((elem) => elem.wordId === wordId);
    if (!userWord) {
        try {
            await createUserWord({ userId, wordId, word: prepareWord(), token });
        } catch (e) {
            console.error(e);
        }
    } else {
        try {
            await updateUserWord({ userId, wordId, word: prepareWord(userWord), token });
        } catch (e) {
            console.error(e);
        }
    }
};

export {
    createUser,
    loginUser,
    getUserWord,
    getUserWords,
    createUserWord,
    updateUserWord,
    deleteUserWord,
    conditions,
    prepareWord,
    addLearningWord,
};
