import { createStore, compose } from 'redux';
import screenChangeReducer from '../reducers/screen';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(screenChangeReducer, composeEnhancers());