// 商品操作管理

const ADD_TO_CART="ADD_TO_CART";
const DROP_ONE="DROP_ONE";

const addToCart=(goodsId)=>{
    return {
        type:ADD_TO_CART,
        goodsId
    }
};


const dropOne=(goodsId)=>{
    return{
        type: DROP_ONE,
        goodsId
    }
}

export {
    ADD_TO_CART,
    DROP_ONE,
    addToCart,
    dropOne
}