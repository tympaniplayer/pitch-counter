import pitchCounter from '../src/reducers/reducers';
import * as actions from '../src/actions/actions';
import { onePitcherState, oneBatterState, initialState } from './testStates';

describe('pitch counter reducer', () => {
    it('should return the initial state', () => {
        expect(pitchCounter(undefined, {})).toEqual( initialState );
    })
    debugger;
    it('should handle ADD_PITCHER', () => {
        expect(
            pitchCounter(undefined, {
                type: actions.ADD_PITCHER,
                payload: {
                    pitcherId: "pitcher0",
                    name: "Sandy Koufax"
                }
            })
        ).toEqual(onePitcherState);
    });

    it('should handle ADD_BATTER', () => {
        expect(
            pitchCounter(onePitcherState, {
                type: actions.ADD_BATTER,
                payload: {
                    name: "Carlos Correa",
                    batterId: "batter0",
                    pitcherId: "pitcher0",
                }
            })).toEqual( oneBatterState )
    });
});