import {
    SET_CART_SHOW,
} from "../actions/displayActions";

const initialState={
        cartDisplay: false
};
export const displayReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_CART_SHOW:
            return Object.assign({}, state, {
                cartDisplay: action.visibility
            });
        default:
            return state;
    }
};

