export enum SettingsActionTypes {
    SET_BUTTONS = 'SET_BUTTONS',
    SET_DISPLAY = 'SET_DISPLAY',
}

export interface SettingsState {
    buttons: boolean;
    display: boolean;
}

interface SetButtons {
    type: SettingsActionTypes.SET_BUTTONS;
    payload: boolean;
}

interface SetDisplay {
    type: SettingsActionTypes.SET_DISPLAY;
    payload: boolean;
}

export type SettingsAction = SetButtons | SetDisplay;
