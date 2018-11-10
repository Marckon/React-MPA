// 商品操作管理

const ADD_TO_CART="ADD_TO_CART";
const DROP_ONE="DROP_ONE";
const SET_AMOUNT="SET_AMOUNT";

const addToCart=(goodsObj)=>{
    return {
        type:ADD_TO_CART,
        goodsObj
    }
};

const setAmount=(goodsId,amount)=>{
    return {
        type:SET_AMOUNT,
        goodsId,
        amount
    }
}

const dropOne=(goodsId)=>{
    return{
        type: DROP_ONE,
        goodsId
    }
}

export {
    ADD_TO_CART,
    DROP_ONE,
    SET_AMOUNT,
    addToCart,
    dropOne,
    setAmount
}