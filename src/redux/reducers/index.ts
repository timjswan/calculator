import keyClickReducer from './key';
import screenChangeReducer from './screen';
import { combineReducers } from 'redux';
import Action from '../../interfaces/action';

const appReducer = combineReducers({
    key: keyClickReducer,
    screen: screenChangeReducer
});

const rootReducer = (state: any, action: Action) => {
    if(action.type === 'CLEAR'){
        state = undefined;
    }
    return appReducer(state, action);
}

export default rootReducer;