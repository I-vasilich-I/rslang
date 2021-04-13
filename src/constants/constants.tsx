import { AlertType, DictionaryTitle } from '../types/interfaces';
import nimlu from '../assets/img/nimlu.jpg';
// добавил пока дефолтную аву.
// Нужно добвать по импорту на каждого девелопера и внести в поле picture
import avatar from '../assets/img/avatar.svg';

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
        bio: `Сергей Нестеров. Системный администратор в гос. конторе. Как известно, системный администратор —
        это личинка программиста. В работе приходилось использовать маленькие самописные скрипты.
        Однажды пришло понимание, что личинка должна стать чем-то большим. Просторы интернета подсказали
        путь в RS School. Так как кое-какой бекграунд уже был, сначала обучение показалось очень легким,
        но тут начался React — и время резко закончилось. К концу React я понял, что даже самые сложные
        по началу задания на самом деле вполне выполнимы и с небольшими подсказками ментора на конечном
        этапе выглядят даже легкими. Основное, чему я научился в RS School — это то, что все, даже самые
        сложные, задачи можно решить, главное не сдаваться на полпути.`,
        picture: nimlu,
    },
    {
        name: 'Олег Васкевич',
        git: 'https://github.com/I-vasilich-I',
        bio: `Олег Васкевич. Инженер-программист на гос. предприятии. Работаю в качестве 1С программиста, 
        сисадмина, техподдержки, поддержки сайтов предприятия, даже с дизайном приходиться сталкиваться, 
        в общем "на все руки мастер")). За время работы в совершенстве овладел гугл-поиском)
        Год назад понял, что надо что-то менять, развиваться. Нашел на сайте EPAM курсы по JS/FE в RS School. 
        Так как опыт какого-никакого программирования есть, обучение дается довольно неплохо. Закончил основной курс,
        сейчас вот заканчиваю React. Надеюсь к лету войти в айти)`,
        picture: avatar,
    },
    {
        name: 'Денис Короткевич',
        git: 'https://github.com/Lex-tp',
        bio: `Денис Короткевич`,
        picture: avatar,
    },
    {
        name: 'Фёдор Микулич',
        git: 'https://github.com/Mikulich-Fedor',
        bio: `Фёдор Микулич. Музыкант, артист оркестра. С шести лет я учился беспрерывно: школа, музыкальная
        школа, колледж, консерватория. Окончив консерваторию, осознал, что нужно учиться дальше, но в
        другой сфере. Так, я попал в IT, и продолжил свой путь “вечного студента”. Компьютерная академия
        “ШАГ”, курсы “ОR media” и вот я в RS School. За время обучения в RS School я заполнил пробелы в
        знаниях и навыках, улучшил свой код. Однако впереди еще много чего нужно узнать и изучить. И
        вообще, IT — “непаханное поле” для “вечного студента”! То, что я так люблю.`,
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
