import keyClickReducer from './key';
import screenChangeReducer from './screen';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    key: keyClickReducer,
    screen: screenChangeReducer
});

export default reducers;