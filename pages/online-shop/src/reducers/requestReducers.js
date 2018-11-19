import {
    RECEIVE_GOODSLIST,
    REQUEST_GOODSLIST,
} from "../actions/requestActions";

const initialState={
    isFetching:false,
    goodsList:[]
};
const requestReducer=(state=initialState,action)=>{
    switch (action.type) {
        case REQUEST_GOODSLIST:
            return Object.assign({},state,{
                isFetching: true
            });
        case RECEIVE_GOODSLIST:
            return Object.assign({},state,{
                isFetching:false,
                goodsList:action.goodsList
            });
        default:
            return state;
    }
};

export {
    requestReducer
}