import {counterReducer} from './counterReducer';
import {visibilityReducer} from './visibilityReducer';
import {combineReducers} from 'redux';

export const rootReducer=combineReducers({
    counter:counterReducer,
    visible:visibilityReducer
});