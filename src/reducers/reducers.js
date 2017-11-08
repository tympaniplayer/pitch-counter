import { EDIT_NAME, ADD_PITCHER, ADD_BATTER, REMOVE_BATTER } from '../actions/actions';


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
                    [payload.pitcherId]: {
                        ...pitcher,
                        batters: pitcher.batters.concat(payload.batterId)
                    }
                },
                batters: {
                    ...state.batters,
                    [payload.batterId]: newBatter
                }
            }
        break;
        case REMOVE_BATTER:
            let batterToRemove = state.batters[payload.batterId];
            let pitcherWithBatterToRemove = state.pitchers[payload.pitcherId];

            
            return {

            }
            break;
        default:
            return state;
    }    
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

function getNewBatter (name) {
    return {
        name: name,
        strikes: 0,
        balls: 0
    }
}

export default pitchCounter;