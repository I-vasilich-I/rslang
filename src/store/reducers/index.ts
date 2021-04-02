import { combineReducers } from 'redux';
import { wordCardReducer } from './wordCardReducer';
import { userReducer } from './userReducer';
import { settingsReducer } from './settingsReducer';
import { GameResultReducer } from './GameResultReduser';
import { alertsReducer } from './alertsReducer';
import { userWordsReducer } from './userWordsReducer';

export const rootReducer = combineReducers({
    wordCard: wordCardReducer,
    user: userReducer,
    settings: settingsReducer,
    result: GameResultReducer,
    alerts: alertsReducer,
    userWords: userWordsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
