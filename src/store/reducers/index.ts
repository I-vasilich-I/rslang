import { combineReducers } from 'redux';
//import { userReducer } from './userReducer';
import { wordCardReducer } from './wordCardReducer';

export const rootReducer = combineReducers({
    //user: userReducer,
    wordCard: wordCardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
