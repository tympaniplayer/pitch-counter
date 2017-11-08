export const initialState = { pitchers: {}, batters: {} }

export const onePitcherState = {
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

export const oneBatterState = {
    pitchers: {
        pitcher0: {
            name: "Sandy Koufax",
            totalPitches: 0,
            totalStrikes: 0,
            totalBalls: 0,
            totalStrikeouts: 0,
            totalWalks: 0,
            totalHits: 0,
            batters: ["batter0"]
        }
    },
    batters: {
        batter0: {
            name: "Carlos Correa",
            strikes: 0,
            balls: 0
        }
    }
}