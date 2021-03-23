import { WordAction, WordCardActionTypes, WordCardState } from '../../types/wordCard';

const initialState: WordCardState = {
    words: [],
    page: 0,
    error: null,
    group: 0,
    loading: false,
};

export const wordCardReducer = (state = initialState, action: WordAction): WordCardState => {
    switch (action.type) {
        case WordCardActionTypes.FETCH_WORDS:
            return { ...state, loading: true };
        case WordCardActionTypes.FETCH_WORDS_SUCCESS:
            return { ...state, loading: false, words: action.payload };
        case WordCardActionTypes.FETCH_WORDS_ERROR:
            return { ...state, loading: false, error: action.payload };
        case WordCardActionTypes.SET_WORDS_PAGE:
            return { ...state, page: action.payload };
        case WordCardActionTypes.SET_WORDS_GROUP:
            return { ...state, group: action.payload };
        default:
            return state;
    }
};
