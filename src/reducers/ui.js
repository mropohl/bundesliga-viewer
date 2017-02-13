import {
    SHOW_MODAL_CHOOSE_DAY
} from "../actions/ui";

const initialState = {
    showModalChooseDay: false
};

export default function ui(state = initialState, action = {}) {
    switch (action.type) {

        case SHOW_MODAL_CHOOSE_DAY:
            return Object.assign({}, state, {
                showModalChooseDay: action.bool
            });

        default:
            return state;
    }
}
