import { Dispatch } from 'redux';
import { UserWordsAction, UserWordsActionTypes } from '../../types/userWords';
import { getUserWords } from '../../helpers/helpers';

export const fetchUserWords = (userId: string, token: string) => {
    return async (dispatch: Dispatch<UserWordsAction>): Promise<void> => {
        try {
            dispatch({ type: UserWordsActionTypes.FETCH_USER_WORDS });
            const userWords = await getUserWords({ userId, token });
            dispatch({ type: UserWordsActionTypes.FETCH_USER_WORDS_SUCCESS, payload: userWords });
        } catch (e) {
            dispatch({
                type: UserWordsActionTypes.FETCH_USER_WORDS_ERROR,
                payload: e.message,
            });
        }
    };
};

export function setUserWordsError(): UserWordsAction {
    return {
        type: UserWordsActionTypes.FETCH_USER_WORDS_ERROR,
        payload: null,
    };
}
