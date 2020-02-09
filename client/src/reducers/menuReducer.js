import { FETCH_MENU, FETCH_MENUS } from "../actions/types";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_MENU:
            return action.payload;
        case FETCH_MENUS:
            return action.payload;
        default:
            return state;
    }
};
