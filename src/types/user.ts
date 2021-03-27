import { LoginUser } from './interfaces';

export enum UserActionTypes {
    SET_USER = 'SET_USER',
    SET_AVATAR = 'SET_AVATAR',
    GET_USER = 'GET_USER',
}

export interface UserState {
    message: string;
    name: string;
    userId: string;
    token: string;
    refreshToken: string;
    avatar: string;
}

interface SetUser {
    type: UserActionTypes.SET_USER;
    payload: LoginUser;
}

interface SetAvatar {
    type: UserActionTypes.SET_AVATAR;
    payload: string;
}

interface GetUser {
    type: UserActionTypes.GET_USER;
}

export type UserAction = SetUser | SetAvatar | GetUser;
