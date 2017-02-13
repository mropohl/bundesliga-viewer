
import {
  DELIVER_NEW_GAME_DAY
} from "../actions/data";

const initialState = {
    matchDayData: [],
    currentMatchDay: null,
    currentSeason: null
};

export default function data(state = initialState, action = {}) {
    switch (action.type) {

        case DELIVER_NEW_GAME_DAY:
            return Object.assign({}, state, {
                matchDayData: action.matchDayData,
                currentMatchDay: action.day,
                currentSeason: action.season
            });



        default:
            return state;
    }
}
