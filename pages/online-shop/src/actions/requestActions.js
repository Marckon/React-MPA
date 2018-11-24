/*const FETCH_GOODSLIST_REQUEST="FETCH_GOODSLIST_REQUEST";
const FETCH_GOODSLIST_FAILURE="FETCH_GOODSLIST_FAILURE";
const FETCH_GOODSLIST_SUCCESS="FETCH_GOODSLIST_SUCCESS";*/
import axios from 'axios';

const REQUEST_GOODSLIST = "REQUEST_GOODSLIST";
const RECEIVE_GOODSLIST = "RECEIVE_GOODSLIST";


const requestGoodsList = () => ({
    type: REQUEST_GOODSLIST
});

const receiveGoodsList = json => ({
    type: RECEIVE_GOODSLIST,
    goodsList: json.goodsList,
    receivedAt: Date.now()
});

const fetchGoodsList = url => dispatch => {
    dispatch(requestGoodsList());
    axios.get(url)
        .then(res=>{
            dispatch(receiveGoodsList(res.data))
        })
};

export {
    RECEIVE_GOODSLIST,
    REQUEST_GOODSLIST,
    receiveGoodslist,
    requestGoodslist,
    fetchGoodsList
}