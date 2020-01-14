import { SCREEN_CHANGE } from '../../actions/screen';
import Action from '../../../interfaces/action';
import State from '../../../interfaces/state';

const initialState: State = {
    value: ''
};

function screenChangeReducer(state: State = initialState, action: Action){
    switch(action.type){
        case SCREEN_CHANGE:
            return {
                ...state,
                value: action.value
            };
        default:
            return state;
    };
}

export default screenChangeReducer;