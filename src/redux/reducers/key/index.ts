import { KEY_CLICK } from '../../actions/key';
import KeyClickAction from '../../../interfaces/keyclickaction';

function keyClickReducer(state: Object = { history: '', do: '' }, action: KeyClickAction){
    switch(action.type){
        case KEY_CLICK:
            return {
                ...state,               
                history: action.payload.history,
                do: action.payload.do
            };
        default:
            return state;
    };
}

export default keyClickReducer;