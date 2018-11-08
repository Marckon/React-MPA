import {
    TOGGLE_CART_SHOW,
} from "../actions/displayActions";

const initialState={
        cartDisplay: false
};
export const displayReducer = (state=initialState, action) => {
    switch (action.type) {
        case TOGGLE_CART_SHOW:
            return Object.assign({}, state, {
                cartDisplay: !state.cartDisplay
            });
        default:
            return state;
    }
};

