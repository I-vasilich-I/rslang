import { SettingsAction, SettingsActionTypes } from '../../types/settings';

function setButtons(buttons: boolean): SettingsAction {
    return { type: SettingsActionTypes.SET_BUTTONS, payload: buttons };
}

function setDisplay(display: boolean): SettingsAction {
    return { type: SettingsActionTypes.SET_DISPLAY, payload: display };
}

export { setButtons, setDisplay };
