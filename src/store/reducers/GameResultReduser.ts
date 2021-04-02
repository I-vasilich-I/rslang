import { GameResultActionTypes, ResultAction, GameResultState } from '../../types/gameResult';

const initialState: GameResultState = {
    gameResults: [],
};

export const GameResultReducer = (state = initialState, action: ResultAction): GameResultState => {
    switch (action.type) {
        case GameResultActionTypes.CLEAR_RESULT:
            return { ...state, gameResults: [] };
        case GameResultActionTypes.SET_RESULT:
            return { ...state, gameResults: [...state.gameResults, action.payload] };
        default:
            return state;
    }
};
