export const TEST = "TEST";
export const SHOW_MODAL_CHOOSE_DAY = "SHOW_MODAL_CHOOSE_DAY";

export function test() {
    return {
        type: TEST
    };
}

export function showModalChooseDay(bool) {
    return {
        type: SHOW_MODAL_CHOOSE_DAY,
        bool: bool
    };
}
