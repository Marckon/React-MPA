import {combineReducers} from 'redux';
import {displayReducer} from "./displayReducers";
import {cartReducer} from "./cartReducers";
import {requestReducer} from "./requestReducers";


export const rootReducer=combineReducers({
    displayReducer,
    cartReducer,
    requestReducer
});