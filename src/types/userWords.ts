/* eslint-disable no-unused-vars */
import { UserWord } from './interfaces';

export interface UserWordsState {
    words: UserWord[];
    loading: boolean;
    error: null | string;
}

export enum UserWordsActionTypes {
    FETCH_USER_WORDS = 'FETCH_USER_WORDS',
    FETCH_USER_WORDS_SUCCESS = 'FETCH_USER_WORDS_SUCCESS',
    FETCH_USER_WORDS_ERROR = 'FETCH_USER_WORDS_ERROR',
}

interface FetchUserWordsAction {
    type: UserWordsActionTypes.FETCH_USER_WORDS;
}

interface FetchUserWordsSuccessAction {
    type: UserWordsActionTypes.FETCH_USER_WORDS_SUCCESS;
    payload: UserWord[];
}

interface FetchUserWordsErrorAction {
    type: UserWordsActionTypes.FETCH_USER_WORDS_ERROR;
    payload: string | null;
}

export type UserWordsAction = FetchUserWordsAction | FetchUserWordsSuccessAction | FetchUserWordsErrorAction;
