import { DayStatActionTypes, StatAction, dayStatState } from '../../types/dayStat';

const initialState: dayStatState = {
    dayStat: [],
};

export const GameStatReducer = (state = initialState, action: StatAction): dayStatState => {
    switch (action.type) {
        case DayStatActionTypes.SET_STAT:
            return { ...state, dayStat: [...state.dayStat, action.payload] };
        // case DayStatActionTypes.CLEAR_STAT:
        //     return { ...state, dayStat: [action.payload] };

        default:
            return state;
    }
};
