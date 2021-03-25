/* eslint-disable no-unused-vars */
export interface Word {
    id: string;
    group: number;
    page: number;
    word: string;
    image: string;
    audio: string;
    audioMeaning: string;
    audioExample: string;
    textMeaning: string;
    textExample: string;
    transcription: string;
    textExampleTranslate: string;
    textMeaningTranslate: string;
    wordTranslate: string;
}

export interface WordCardState {
    words: Word[];
    loading: boolean;
    error: null | string;
    page: number;
    group: number;
}

export enum WordCardActionTypes {
    FETCH_WORDS = 'FETCH_WORDS',
    FETCH_WORDS_SUCCESS = 'FETCH_WORDS_SUCCESS',
    FETCH_WORDS_ERROR = 'FETCH_WORDS_ERROR',
    SET_WORDS_PAGE = 'SET_WORDS_PAGE',
    SET_WORDS_GROUP = 'SET_WORDS_GROUP',
}
interface FetchWordAction {
    type: WordCardActionTypes.FETCH_WORDS;
}
interface FetchWordSuccessAction {
    type: WordCardActionTypes.FETCH_WORDS_SUCCESS;
    payload: Word[];
}
interface FetchWordErrorAction {
    type: WordCardActionTypes.FETCH_WORDS_ERROR;
    payload: string;
}
interface SetWordPage {
    type: WordCardActionTypes.SET_WORDS_PAGE;
    payload: number;
}
interface incWordPage {
    type: WordCardActionTypes.SET_WORDS_PAGE;
    payload: number;
}
interface decWordPage {
    type: WordCardActionTypes.SET_WORDS_PAGE;
    payload: number;
}
interface SetWordGroup {
    type: WordCardActionTypes.SET_WORDS_GROUP;
    payload: number;
}
export type WordAction =
    | FetchWordAction
    | FetchWordErrorAction
    | FetchWordSuccessAction
    | SetWordGroup
    | SetWordPage
    | incWordPage
    | decWordPage;
