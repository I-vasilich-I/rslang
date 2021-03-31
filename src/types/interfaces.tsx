import { Word } from './wordCard';
interface User {
    name?: string;
    email: string;
    password: string;
    passwordAgain?: string;
    avatar?: string;
    id?: string;
}

interface UserWord {
    id: string;
    difficulty: string;
    optional: {
        game1: {
            right: number;
            wrong: number;
        };
        game2: {
            right: number;
            wrong: number;
        };
        game3: {
            right: number;
            wrong: number;
        };
        game4: {
            right: number;
            wrong: number;
        };
    };
    wordId: string;
}

interface WordToSend {
    difficulty: string;
    optional: {
        game1: {
            right: number;
            wrong: number;
        };
        game2: {
            right: number;
            wrong: number;
        };
        game3: {
            right: number;
            wrong: number;
        };
        game4: {
            right: number;
            wrong: number;
        };
    };
}

interface UserWordToken {
    userId: string;
    wordId: string;
    token: string;
    word?: WordToSend;
}

interface CreateUser {
    email: string;
    id: string;
    name: string;
    error?: any;
}

interface LoginUser {
    message: string;
    name: string;
    userId: string;
    token: string;
    refreshToken: string;
    avatar?: string;
}

export type { User, UserWord, UserWordToken, CreateUser, LoginUser, WordToSend };
