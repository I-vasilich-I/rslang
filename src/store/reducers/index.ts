import { combineReducers } from 'redux';
import { wordCardReducer } from './wordCardReducer';
import { userReducer } from './userReducer';
import { settingsReducer } from './settingsReducer';
import { alertsReducer } from './alertsReducer';

export const rootReducer = combineReducers({
    wordCard: wordCardReducer,
    user: userReducer,
    settings: settingsReducer,
    alerts: alertsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
