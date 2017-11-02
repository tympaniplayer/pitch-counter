export const EDIT_NAME = 'EDIT_NAME';
export const ADD_PITCHER = 'ADD_PITCHER';

export function editName( text ){
    return { type: EDIT_NAME, text };
}
