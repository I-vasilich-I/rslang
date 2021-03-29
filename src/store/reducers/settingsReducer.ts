import { SettingsAction, SettingsActionTypes, SettingsState } from '../../types/settings';

const initialState: SettingsState = {
    buttons: true,
    display: true,
};

export const settingsReducer = (state = initialState, action: SettingsAction): SettingsState => {
    switch (action.type) {
        case SettingsActionTypes.SET_BUTTONS:
            return { ...state, buttons: action.payload };
        case SettingsActionTypes.SET_DISPLAY:
            return { ...state, display: action.payload };
        default:
            return state;
    }
};
