import { combineReducers } from 'redux';
import { wordCardReducer } from './wordCardReducer';
import { userReducer } from './userReducer';
import { settingsReducer } from './settingsReducer';

export const rootReducer = combineReducers({
    wordCard: wordCardReducer,
    user: userReducer,
    settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
