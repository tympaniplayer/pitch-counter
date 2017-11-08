import * as actions from '../src/actions/actions'

describe ('action', () => {
    debugger;
    it('should create an action to add a pitcher', () => {
        const name = 'Sandy Koufax';
        const expectedAction = {
            type: actions.ADD_PITCHER,
            payload: {                
                name: "Sandy Koufax", 
                pitcherId: "pitcher0"                
            }
        }
        debugger;
        expect(actions.addPitcher(name)).toEqual(expectedAction);
    });
});