import { AlertType, DictionaryTitle } from '../types/interfaces';
const BACKEND_API_URL = 'https://team101-rslang-be.herokuapp.com/';
const WORDS_API_URL = `${BACKEND_API_URL}words`;
const USERS_API_URL = `${BACKEND_API_URL}users`;
const SIGNIN_API_URL = `${BACKEND_API_URL}signin`;
const AVATAR_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/vasilich/image/upload';
const JWT_REFRESH_EXPIRE_TIME = 95 * 60 * 60 * 1000;
const DIFFICULTY: DictionaryTitle = {
    complicated: 'complicated',
    deleted: 'deleted',
    reestablish: 'reestablish',
};

const DICTIONARY_TITLE: DictionaryTitle = {
    learning: 'Изучаемые слова',
    deleted: 'Удалённые слова',
    complicated: 'Сложные слова',
};

const ALERTS: AlertType = {
    error: {
        type: 'error',
        title: 'Ошибка',
        message: 'Произошла ошибка',
    },
    success: {
        type: 'success',
        title: 'ОК',
        message: 'Операция прошла успешно',
    },
    wordAdded: {
        type: 'success',
        title: 'ОК',
        message: 'Слово добавлено в словарь',
    },
    wordUpdated: {
        type: 'success',
        title: 'ОК',
        message: 'Слово обнавлено',
    },
    wordReestablished: {
        type: 'success',
        title: 'ОК',
        message: 'Слово восстановлено',
    },
    userCreated: {
        type: 'success',
        title: 'ОК',
        message: 'Пользователь создан и авторизован',
    },
    userAuth: {
        type: 'success',
        title: 'ОК',
        message: 'Пользователь авторизован',
    },
    userDenied: {
        type: 'error',
        title: 'Ошибка авторизации',
        message: '',
    },
};

export {
    WORDS_API_URL,
    USERS_API_URL,
    SIGNIN_API_URL,
    BACKEND_API_URL,
    AVATAR_UPLOAD_URL,
    DIFFICULTY,
    ALERTS,
    JWT_REFRESH_EXPIRE_TIME,
    DICTIONARY_TITLE,
};
