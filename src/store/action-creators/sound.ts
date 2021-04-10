import { SoundAction, SoundActionTypes } from '../../types/sound';

function setSound(sound: number): SoundAction {
    return { type: SoundActionTypes.SET_SOUND, payload: sound };
}
export { setSound };
