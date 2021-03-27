import { LoginUser } from './interfaces';

export enum UserActionTypes {
    SET_USER = 'SET_USER',
    SET_AVATAR = 'SET_AVATAR',
    GET_USER = 'GET_USER',
}

export interface UserState {
    user: LoginUser | null;
    avatar: string;
}

interface SetUser {
    type: UserActionTypes.SET_USER;
    payload: LoginUser | null;
}

interface SetAvatar {
    type: UserActionTypes.SET_AVATAR;
    payload: string;
}

interface GetUser {
    type: UserActionTypes.GET_USER;
}

export type UserAction = SetUser | SetAvatar | GetUser;
