import { AlertsAction, AlertsActionTypes } from '../../types/alerts';
import { AlertType } from '../../types/interfaces';

function SetAlert(alert: AlertType['name']): AlertsAction {
    return { type: AlertsActionTypes.SET_ALERT, payload: alert };
}

function SetAlertShown(shown: boolean): AlertsAction {
    return { type: AlertsActionTypes.SET_ALERT_SHOWN, payload: shown };
}

export { SetAlert, SetAlertShown };
