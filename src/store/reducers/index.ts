import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { wordCardReducer } from './wordCardReducer';
import { settingsReducer } from './settingsReducer';
import { GameResultReducer } from './GameResultReduser';
import { alertsReducer } from './alertsReducer';
import { userWordsReducer } from './userWordsReducer';
import { GameStatReducer } from './GameStatReduser';

export const rootReducer = combineReducers({
    wordCard: wordCardReducer,
    user: userReducer,
    settings: settingsReducer,
    result: GameResultReducer,
    alerts: alertsReducer,
    userWords: userWordsReducer,
    dayStat: GameStatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
