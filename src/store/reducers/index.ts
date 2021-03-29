import { combineReducers } from 'redux';
import { wordCardReducer } from './wordCardReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    wordCard: wordCardReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
