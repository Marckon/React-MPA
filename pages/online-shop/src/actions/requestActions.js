/*const FETCH_GOODSLIST_REQUEST="FETCH_GOODSLIST_REQUEST";
const FETCH_GOODSLIST_FAILURE="FETCH_GOODSLIST_FAILURE";
const FETCH_GOODSLIST_SUCCESS="FETCH_GOODSLIST_SUCCESS";*/
import axios from 'axios';

const REQUEST_GOODSLIST = "REQUEST_GOODSLIST";
const RECEIVE_GOODSLIST = "RECEIVE_GOODSLIST";


const requestGoodslist = () => ({
    type: REQUEST_GOODSLIST
});

const receiveGoodslist = json => ({
    type: RECEIVE_GOODSLIST,
    goodsList: json.goodsList,
    receivedAt: Date.now()
});

const fetchGoodsList = url => dispatch => {
    dispatch(requestGoodslist());
    return axios.get(url)
        .then(res=>{
            console.log(res.data)
            dispatch(receiveGoodslist(res.data))
        })
};

export {
    RECEIVE_GOODSLIST,
    REQUEST_GOODSLIST,
    receiveGoodslist,
    requestGoodslist,
    fetchGoodsList
}