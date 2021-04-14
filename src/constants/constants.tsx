import { AlertType, DictionaryTitle } from '../types/interfaces';
import nimlu from '../assets/img/nimlu.jpg';
// добавил пока дефолтную аву.
// Нужно добвать по импорту на каждого девелопера и внести в поле picture
import avatar from '../assets/img/avatar.svg';
import oleg from '../assets/img/Oleg.png';

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

const AMOUNT_OF_PAGES = {
    MAX: 29,
    MIN: 0,
};

const DEVELOPERS = [
    {
        name: 'Сергей Нестеров',
        git: 'https://github.com/nimlu-bot',
        bio: `Реализовал: структура проекта, организация командной работы на платформе Jira, роутинг, редакс, главная страница, страница статистики, юнит-тесты, игры: конструктор слов, аудиовызов, саванна`,
        picture: nimlu,
    },
    {
        name: 'Олег Васкевич',
        git: 'https://github.com/I-vasilich-I',
        bio: `Реализовал: бэкенд и взоимодействие с ним, форма авторизации/регистрации, электронный учебник, словарь, карточка слова, футер, юнит-тесты.`,
        picture: oleg,
    },
    {
        name: 'Денис Короткевич',
        git: 'https://github.com/Lex-tp',
        bio: `Реализовал: игра спринт`,
        picture: avatar,
    },
    {
        name: 'Фёдор Микулич',
        git: 'https://github.com/Mikulich-Fedor',
        bio: `Реализовал: вёрстка, дизайн, UI`,
        picture: avatar,
    },
];

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
    AMOUNT_OF_PAGES,
    DEVELOPERS,
};
