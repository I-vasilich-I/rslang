import * as TodoActionCreators from './wordCard';
import * as Authentication from './user';
import * as Settings from './settings';
import * as Result from './result';

export default {
    ...TodoActionCreators,
    ...Authentication,
    ...Settings,
    ...Result,
};
