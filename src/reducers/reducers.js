import { EDIT_NAME } from '../actions/actions';


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