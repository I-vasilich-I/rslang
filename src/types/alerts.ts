/* eslint-disable no-unused-vars */
import { AlertType } from './interfaces';

export enum AlertsActionTypes {
    SET_ALERT = 'SET_ALERT',
    SET_ALERT_SHOWN = 'SET_ALERT_SHOWN',
}

export interface AlertState {
    alert: AlertType['name'];
    shown: boolean;
}

interface SetAlert {
    type: AlertsActionTypes.SET_ALERT;
    payload: AlertType['name'];
}

interface SetAlertShown {
    type: AlertsActionTypes.SET_ALERT_SHOWN;
    payload: boolean;
}

export type AlertsAction = SetAlert | SetAlertShown;
