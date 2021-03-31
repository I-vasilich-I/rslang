import { UserWordsAction, UserWordsActionTypes, UserWordsState } from '../../types/userWords';

const initialState: UserWordsState = {
    words: [],
    error: null,
    loading: false,
};

export const userWordsReducer = (state = initialState, action: UserWordsAction): UserWordsState => {
    switch (action.type) {
        case UserWordsActionTypes.FETCH_USER_WORDS:
            return { ...state, loading: true };
        case UserWordsActionTypes.FETCH_USER_WORDS_SUCCESS:
            return { ...state, loading: false, words: action.payload };
        case UserWordsActionTypes.FETCH_USER_WORDS_ERROR:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
