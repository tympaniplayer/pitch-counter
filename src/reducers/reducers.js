import { EDIT_NAME, ADD_PITCHER, ADD_BATTER } from '../actions/actions';


const initialState = { pitchers: {}, batters: {} };



function pitchCounter ( state = initialState, action ) {
    
    const { payload } = action;
    debugger;
    switch( action.type ) {            
        case ADD_PITCHER: 
            let newPitcher = getNewPitcher(payload.name);
            return {
                ...state,
                pitchers: {
                    ...state.pitchers,
                    [payload.pitcherId]: newPitcher
                }
            }
            break;
        case ADD_BATTER:
            const pitcher = state.pitchers[payload.pitcherId];
            let newBatter = getNewBatter(payload.name);
            return {
                ...state,
                pitchers: {
                    ...state.pitchers,
                    [pitcherId]: {
                        ...pitcher,
                        batters: pitcher.batters.concat(payload.batterId)
                    }
                },
                batters: {
                    ...state.batters,
                    [batterId]: newBatter
                }
            }
        break;
        default:
            return state;
    }    
}

function batterReducer(state = {}, action){
    switch(action.type){
        
    }
}

function insertItem (array, item, index){
    let newArray = array.slice();
    newArray.splice(index, 0, item);
    return newArray;
}


function getNewPitcher(name) {
    return {
        name: name,
        totalPitches: 0,
        totalStrikes: 0,
        totalBalls: 0,
        totalStrikeouts: 0,
        totalWalks: 0,
        totalHits: 0,        
        batters: [],
    };
}

export default pitchCounter;