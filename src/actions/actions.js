export const EDIT_NAME = 'EDIT_NAME';
export const ADD_PITCHER = 'ADD_PITCHER';
export const ADD_BATTER = 'ADD_BATTER';

let nextPitcher = 0;
let nextBatter = 0;

export function editName( text ){
    return { type: EDIT_NAME, text };
}

export function addPitcher ( name ) {
    let pitcherId = `pitcher${nextPitcher++}`
    return { 
        type: ADD_PITCHER, 
        payload: {
            pitcherId,
            name 
        }
    }
}

export function addBatter( batter ){
    return { type: ADD_BATTER, batter}
}