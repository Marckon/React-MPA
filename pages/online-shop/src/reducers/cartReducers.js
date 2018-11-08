import {
   ADD_TO_CART,
    DROP_ONE
} from "../actions/cartActions";

const initialState={
    selectedGoods: []
};

export const cartReducer=(state=initialState,action)=>{
    let handleAddToCart=()=>{
        let goodsInCart=state.selectedGoods.slice();
        let targetGoods=goodsInCart.filter(v=>v.goodsId===action.goodsId)[0];
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
                        goodsId:action.goodsId,
                        count:1
                    }
                ]
            })
        }
    };

    let handleDropOne=()=>{
        let goodsInCart=state.selectedGoods.slice()
        let targetGoods=goodsInCart.filter(v=>v.goodsId===action.goodsId)[0];
        targetGoods.count--;
        return Object.assign({},state,{
            selectedGoods:goodsInCart
        });
    };

    switch (action.type) {
        case ADD_TO_CART:
           return  handleAddToCart();
        case DROP_ONE:
            return handleDropOne();
        default:
            return state;
    }
};