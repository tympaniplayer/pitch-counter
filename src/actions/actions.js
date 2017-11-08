export const EDIT_NAME = 'EDIT_NAME';
export const ADD_PITCHER = 'ADD_PITCHER';
export const ADD_BATTER = 'ADD_BATTER';
export const REMOVE_BATTER = 'REMOVE_BATTER';
let nextPitcher = 0;
let nextBatter = 0;

export function editName( text ){
    return { type: EDIT_NAME, text };
}

export function addPitcher ( name ) {
    let pitcherId = `pitcher${nextPitcher++}`;
    return { 
        type: ADD_PITCHER, 
        payload: {
            pitcherId,
            name 
        }
    }
}

export function addBatter( name, pitcherId ){
    let batterId = `bater${nextBatter++}`;
    return { 
        type: ADD_BATTER,
        payload: {
            name,
            batterId,
            pitcherId
        }
    }
}

export function removeBatter(pitcherId, batterId){
    return {
        type: REMOVE_BATTER,
        payload: {
            batterId,
            batterId
        }
    }
}