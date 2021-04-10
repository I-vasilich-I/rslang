export enum SoundActionTypes {
    SET_SOUND = 'SET_SOUND',
}

export interface SoundState {
    sound: number;
}

interface SetSound {
    type: SoundActionTypes.SET_SOUND;
    payload: number;
}

export type SoundAction = SetSound;
