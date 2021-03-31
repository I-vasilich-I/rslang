import * as TodoActionCreators from './wordCard';
import * as Authentication from './user';
import * as Settings from './settings';
import * as Alerts from './alerts';

export default {
    ...TodoActionCreators,
    ...Authentication,
    ...Settings,
    ...Alerts,
};
