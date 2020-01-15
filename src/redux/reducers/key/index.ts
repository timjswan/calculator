import { KEY_CLICK } from '../../actions/key';
import KeyClickAction from '../../../interfaces/keyclickaction';

function keyClickReducer(state: Object = { history: '', function: '' }, action: KeyClickAction){
    switch(action.type){
        case KEY_CLICK:
            return {
                ...state,               
                history: action.value.history,
                function: action.value.function
            };
        default:
            return state;
    };
}

export default keyClickReducer;