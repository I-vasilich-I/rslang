import * as TodoActionCreators from './wordCard';
import * as Authentication from './user';
import * as Settings from './settings';
import * as Result from './result';
import * as Alerts from './alerts';
import * as UserWords from './userWords';
import * as DayStat from './dayStat';

export default {
    ...TodoActionCreators,
    ...Authentication,
    ...Settings,
    ...Result,
    ...Alerts,
    ...UserWords,
    ...DayStat,
};
