import * as TodoActionCreators from './wordCard';
import * as Authentication from './user';

export default {
    ...TodoActionCreators,
    ...Authentication,
};
