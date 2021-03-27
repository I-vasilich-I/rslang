import { UserAction, UserActionTypes, UserState } from '../../types/user';

const initialState: UserState = {
    user: null,
    avatar: '',
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return { ...state, user: action.payload };
        case UserActionTypes.SET_AVATAR:
            return { ...state, avatar: action.payload };
        default:
            return state;
    }
};
