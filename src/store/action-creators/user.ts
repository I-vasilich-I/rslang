import { Dispatch } from 'redux';
import { LoginUser } from '../../types/interfaces';
import { UserAction, UserActionTypes } from '../../types/user';

function setUser(user: LoginUser): UserAction {
    return { type: UserActionTypes.SET_USER, payload: user };
}
function setAvatar(avatar: string): UserAction {
    return { type: UserActionTypes.SET_AVATAR, payload: avatar };
}

function getUser(): UserAction {
    return { type: UserActionTypes.GET_USER };
}

export { setUser, getUser, setAvatar };
