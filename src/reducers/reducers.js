import { EDIT_NAME, ADD_PITCHER } from '../actions/actions';


/*

data shape

pitchers: [
  id: number,
  name: string,
  batters: [
    {
      name: string,
      strikes: number,
      walked: bool,
      strikeout: bool,
      hit: bool
    }
  ]
  totalPitches: number,
  totalStrikes: number,
  totalBalls: number,
  totalStrikeouts: number,
  totalWalks: number,
  totalHits: number,
]

*/


function pitchCounter ( state = [], action ) {
    debugger;
    switch( action.type ) {
        case ADD_PITCHER: 
            let newPitcher = getNewPitcher(action.name);
            let index = state.length;
            return insertItem (state, newPitcher, index);
            
        default:
            return state;
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
        batters: [],
        totalPitches: 0,
        totalStrikes: 0,
        totalBalls: 0,
        totalStrikeouts: 0,
        totalWalks: 0,
        totalHits: 0
    };
}

export default pitchCounter;