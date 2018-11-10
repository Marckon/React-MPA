import {
    ADD_TO_CART,
    DROP_ONE,
    SET_AMOUNT
} from "../actions/cartActions";

const initialState={
    selectedGoods: []
};

export const cartReducer=(state=initialState,action)=>{
    let handleAddToCart=()=>{
        let goodsInCart=state.selectedGoods.slice();
        let targetGoods=goodsInCart.filter(v=>v.goodsId===action.goodsObj.goodsId)[0];
        if(targetGoods){
            targetGoods.count++;
            return Object.assign({},state,{
                selectedGoods:goodsInCart
            })
        }else{
            return Object.assign({},state,{
                selectedGoods:[
                    ...state.selectedGoods,
                    {
                        goodsId:action.goodsObj.goodsId,
                        count:1,
                        goodsObj:action.goodsObj
                    }
                ]
            })
        }
    };

    let handleDropOne=()=>{
        let goodsInCart=state.selectedGoods.slice()
        let targetGoods=goodsInCart.filter(v=>v.goodsId===action.goodsId)[0];
        targetGoods.count--;
        if(targetGoods.count<=0){
            goodsInCart.splice(goodsInCart.indexOf(targetGoods),1)
            return {
                selectedGoods:goodsInCart
            }
        }
        return Object.assign({},state,{
            selectedGoods:goodsInCart
        });
    };

    let handleSetAmount=()=>{
        let goodsInCart=state.selectedGoods.slice();
        let targetGoods=goodsInCart.filter(v=>v.goodsId===action.goodsId)[0];
        targetGoods.count=action.amount;
        return {
            selectedGoods:goodsInCart
        }
    };

    switch (action.type) {
        case ADD_TO_CART:
           return  handleAddToCart();
        case DROP_ONE:
            return handleDropOne();
        case SET_AMOUNT:
            return handleSetAmount();
        default:
            return state;
    }
};