import { SoundAction, SoundActionTypes, SoundState } from '../../types/sound';

const initialState: SoundState = {
    sound: -1,
};

export const soundReducer = (state = initialState, action: SoundAction): SoundState => {
    switch (action.type) {
        case SoundActionTypes.SET_SOUND:
            return { ...state, sound: action.payload };

        default:
            return state;
    }
};
