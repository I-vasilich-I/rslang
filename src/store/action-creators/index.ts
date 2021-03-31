import * as TodoActionCreators from './wordCard';
import * as Authentication from './user';
import * as Settings from './settings';
import * as Alerts from './alerts';
import * as UserWords from './userWords';

export default {
    ...TodoActionCreators,
    ...Authentication,
    ...Settings,
    ...Alerts,
    ...UserWords,
};
