import pitchCounter from '../src/reducers/reducers';
import * as actions from '../src/actions/actions';

describe ('pitch counter reducer', () => {
    it('should return the initial state', () =>{
        expect(pitchCounter(undefined, {})).toEqual([]);
    })

    it('should handle ADD_PITCHER', () =>{
        expect(
            pitchCounter([], {
                type: actions.ADD_PITCHER,
                name: 'Sandy Koufax'
            })
        ).toEqual([
            {
                name: 'Sandy Koufax',
                batters: [],
                totalPitches: 0,
                totalStrikes: 0,
                totalBalls: 0,
                totalStrikeouts: 0,
                totalWalks: 0,
                totalHits: 0
            }
        ]);
    });
});