import { Dispatch } from 'redux';
import axios from 'axios';
import { WordAction, WordCardActionTypes } from '../../types/wordCard';
import { AMOUNT_OF_PAGES, WORDS_API_URL } from '../../constants/constants';

export const fetchWords = (page = 0, group = 0) => {
    return async (dispatch: Dispatch<WordAction>): Promise<void> => {
        try {
            dispatch({ type: WordCardActionTypes.FETCH_WORDS });
            const response = await axios.get(`${WORDS_API_URL}`, {
                params: { group: group, page: page },
            });
            dispatch({ type: WordCardActionTypes.FETCH_WORDS_SUCCESS, payload: response.data });
        } catch (e) {
            dispatch({
                type: WordCardActionTypes.FETCH_WORDS_ERROR,
                payload: e.message,
            });
        }
    };
};
export function setWordsPage(page: number): WordAction {
    return { type: WordCardActionTypes.SET_WORDS_PAGE, payload: page };
}
export function incWordsPage(page: number, amount: number): WordAction {
    if (page < AMOUNT_OF_PAGES.MAX) return { type: WordCardActionTypes.SET_WORDS_PAGE, payload: page + amount };
    return { type: WordCardActionTypes.SET_WORDS_PAGE, payload: page };
}
export function decWordsPage(page: number, amount: number): WordAction {
    if (page > AMOUNT_OF_PAGES.MIN) return { type: WordCardActionTypes.SET_WORDS_PAGE, payload: page - amount };
    return { type: WordCardActionTypes.SET_WORDS_PAGE, payload: page };
}
export function setWordsGroup(group: number): WordAction {
    return { type: WordCardActionTypes.SET_WORDS_GROUP, payload: group };
}
export function setWordsError(): WordAction {
    return {
        type: WordCardActionTypes.FETCH_WORDS_ERROR,
        payload: null,
    };
}
