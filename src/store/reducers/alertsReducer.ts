import { AlertsAction, AlertsActionTypes, AlertState } from '../../types/alerts';
import { ALERTS } from '../../constants/constants';

const initialState: AlertState = {
    alert: ALERTS.error,
    shown: false,
};

export const alertsReducer = (state = initialState, action: AlertsAction) => {
    switch (action.type) {
        case AlertsActionTypes.SET_ALERT:
            return { ...state, alert: action.payload };
        case AlertsActionTypes.SET_ALERT_SHOWN:
            return { ...state, shown: action.payload };
        default:
            return state;
    }
};
