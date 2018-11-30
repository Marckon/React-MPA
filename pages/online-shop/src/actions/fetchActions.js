
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

export {
    RECEIVE_GOODSLIST,
    REQUEST_GOODSLIST,
    receiveGoodsList,
    requestGoodsList,
}