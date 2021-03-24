import { combineReducers } from 'redux';
import { wordCardReducer } from './wordCardReducer';

export const rootReducer = combineReducers({
    wordCard: wordCardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
