import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { JWT_REFRESH_EXPIRE_TIME } from '../constants/constants';

const saveState = (state: unknown) => {
    try {
        const serialisedState = JSON.stringify(state);
        window.localStorage.setItem('app_state', serialisedState);
    } catch (err) {
        console.log(err);
    }
};

const loadState = () => {
    try {
        const stateDateRaw = localStorage.getItem('stateDate');
        const stateDate = stateDateRaw ? JSON.parse(stateDateRaw) : new Date('2021');
        const serialisedState = window.localStorage.getItem('app_state');
        if (!serialisedState) return undefined;
        const {
            user: { token },
        } = JSON.parse(serialisedState);
        if (token) {
            if (Date.now() - stateDate > JWT_REFRESH_EXPIRE_TIME) return undefined;
        }
        return JSON.parse(serialisedState);
    } catch (err) {
        return undefined;
    }
};

const oldState = loadState();

export const store = createStore(rootReducer, oldState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState(store.getState());
});
