/* eslint-disable no-unused-vars */
import { Word } from './wordCard';

export interface GameResult {
    resultWord: Word;
    game: {
        right: number;
        wrong: number;
    };
}

export interface GameResultState {
    gameResults: GameResult[];
}

export enum GameResultActionTypes {
    CLEAR_RESULT = 'CLEAR_RESULT',
    SET_RESULT = 'SET_RESULT',
}

interface ClearResultAction {
    type: GameResultActionTypes.CLEAR_RESULT;
}

interface SetResultAction {
    type: GameResultActionTypes.SET_RESULT;
    payload: GameResult;
}

export type ResultAction = ClearResultAction | SetResultAction;
