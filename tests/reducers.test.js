import pitchCounter from '../src/reducers/reducers';
import * as actions from '../src/actions/actions';

describe ('pitch counter reducer', () => {
    it('should return the initial state', () =>{
        expect(pitchCounter(undefined, {})).toEqual({ pitchers: { }, batters: { } });
    })
    debugger;
    it('should handle ADD_PITCHER', () =>{
        expect(
            pitchCounter(undefined, {
                type: actions.ADD_PITCHER,
                payload: {
                    pitcherId: "pitcher0",
                    name: "Sandy Koufax"
                }
            })
        ).toEqual(
            {
                pitchers: {
                    pitcher0: {
                        name: "Sandy Koufax",
                        totalPitches: 0,
                        totalStrikes: 0,
                        totalBalls: 0,
                        totalStrikeouts: 0,
                        totalWalks: 0,
                        totalHits: 0,        
                        batters: []
                    }
                },
                batters: {

                }
            }
        );
    });
});