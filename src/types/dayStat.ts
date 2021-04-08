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
// interface GetTopSeriesAction {
//     type: DayStatActionTypes.GET_TOP_GAME_SERIES;
//     payload: string;
// }
// interface GetStatSummaryAction {
//     type: DayStatActionTypes.GET_STAT_SUMMARY;
//     payload: string;
// }
// interface GetStatPersentAction {
//     type: DayStatActionTypes.GET_STAT_PERSENT;
//     payload: string;
// }

// interface GetDayStatSummaryAction {
//     type: DayStatActionTypes.GET_DAY_STAT_SUMMARY;
// }

// interface GetDayStatPersentAction {
//     type: DayStatActionTypes.GET_DAY_STAT_PERSENT;
// }

export type StatAction = SetStatAction | ClearStatAction;
// | GetTopSeriesAction
// | GetStatSummaryAction
// | GetStatPersentAction
// | GetDayStatSummaryAction
// | GetDayStatPersentAction;
