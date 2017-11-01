import { EDIT_NAME } from '../actions/actions';

const initialState = {
    name: 'Nate'
}

function pitchCounter ( state = initialState, action ) {
    switch( action.type ) {
        case EDIT_NAME: 
            return Object.assign({}, state, {
                name: action.text
            } );
        default:
            return state;
    }
}

export default pitchCounter;