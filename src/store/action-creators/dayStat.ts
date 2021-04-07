import { DayStatActionTypes, StatAction, gameToStat } from '../../types/dayStat';

function SetStat({ name, series, right, wrong, date }: gameToStat): StatAction {
    return { type: DayStatActionTypes.SET_STAT, payload: { name, series, right, wrong, date } };
}

export { SetStat };
