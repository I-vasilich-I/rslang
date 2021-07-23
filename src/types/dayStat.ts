/* eslint-disable no-unused-vars */
export interface gameToStat {
    name: string;
    series: number;
    right: number;
    wrong: number;
    date: number;
}

export interface dayStatState {
    dayStat: gameToStat[];
}
export enum DayStatActionTypes {
    SET_STAT = 'SET_STAT',
    CLEAR_STAT = 'CLEAR_STAT',
}

interface SetStatAction {
    type: DayStatActionTypes.SET_STAT;
    payload: gameToStat;
}

interface ClearStatAction {
    type: DayStatActionTypes.CLEAR_STAT;
    payload: Date;
}

export type StatAction = SetStatAction | ClearStatAction;
