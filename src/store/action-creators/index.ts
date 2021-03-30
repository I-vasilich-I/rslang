import * as TodoActionCreators from './wordCard';
import * as Authentication from './user';
import * as Settings from './settings';

export default {
    ...TodoActionCreators,
    ...Authentication,
    ...Settings,
};
