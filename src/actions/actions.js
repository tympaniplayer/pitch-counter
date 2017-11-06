export const EDIT_NAME = 'EDIT_NAME';
export const ADD_PITCHER = 'ADD_PITCHER';

export function editName( text ){
    return { type: EDIT_NAME, text };
}

export function addPitcher ( name ) {
    return { type: ADD_PITCHER, name }
}
