import { combineReducers } from 'redux';
import { wordCardReducer } from './wordCardReducer';
import { userReducer } from './userReducer';
import { settingsReducer } from './settingsReducer';
import { GameResultReducer } from './GameResultReduser';

export const rootReducer = combineReducers({
    wordCard: wordCardReducer,
    user: userReducer,
    settings: settingsReducer,
    result: GameResultReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
