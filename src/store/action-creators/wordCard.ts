import { Dispatch } from 'redux';
import axios from 'axios';
import { WordAction, WordCardActionTypes } from '../../types/wordCard';
// import { ConsoleWriter } from 'istanbul-lib-report';

export const fetchWords = (page = 0, group = 0) => {
    return async (dispatch: Dispatch<WordAction>): Promise<void> => {
        try {
            dispatch({ type: WordCardActionTypes.FETCH_WORDS });
            const response = await axios.get(`https://react-learnwords-example.herokuapp.com/words`, {
                params: { group: group, page: page },
            });
            //console.log(response);
            setTimeout(() => {
                dispatch({ type: WordCardActionTypes.FETCH_WORDS_SUCCESS, payload: response.data });
            }, 500);
        } catch (e) {
            dispatch({
                type: WordCardActionTypes.FETCH_WORDS_ERROR,
                payload: 'Loading Error',
            });
        }
    };
};
export function setWordsPage(page: number): WordAction {
    return { type: WordCardActionTypes.SET_WORDS_PAGE, payload: page };
}
export function incWordsPage(page: number): WordAction {
    if (page < 29) return { type: WordCardActionTypes.SET_WORDS_PAGE, payload: page + 1 };
    return { type: WordCardActionTypes.SET_WORDS_PAGE, payload: page };
}
export function decWordsPage(page: number): WordAction {
    if (page > 0) return { type: WordCardActionTypes.SET_WORDS_PAGE, payload: page - 1 };
    return { type: WordCardActionTypes.SET_WORDS_PAGE, payload: page };
}
export function setWordsGroup(group: number): WordAction {
    return { type: WordCardActionTypes.SET_WORDS_GROUP, payload: group };
}
