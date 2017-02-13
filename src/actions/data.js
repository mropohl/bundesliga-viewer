
import { loadGameDayData } from "../utils/apiUtils";

export const TEST = "TEST";
export const DELIVER_NEW_GAME_DAY = "DELIVER_NEW_GAME_DAY";

export function test() {
    return {
        type: TEST
    };
}

export function loadNewGameDay(day, year) {
    return function (dispatch) {
        console.log("test");
        loadGameDayData(day, year, deliverNewGameDay, dispatch);
    }
}

function deliverNewGameDay(data, day, season) {
    console.log("delivering");
    return {
        type: DELIVER_NEW_GAME_DAY,
        matchDayData: data,
        day: day,
        season: season
    }
}
