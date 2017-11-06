import * as actions from '../src/actions/actions'

describe ('action', () => {
    it('should create an action to add a pitcher', () => {
        const name = 'Sandy Koufax';
        const expectedAction = {
            type: actions.ADD_PITCHER,
            name
        }
        expect(actions.addPitcher(name)).toEqual(expectedAction);
    });
});