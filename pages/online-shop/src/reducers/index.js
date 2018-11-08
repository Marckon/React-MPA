import {combineReducers} from 'redux';
import {displayReducer} from "./displayReducers";
import {cartReducer} from "./cartReducers";


export const rootReducer=combineReducers({
    displayReducer,
    cartReducer
});