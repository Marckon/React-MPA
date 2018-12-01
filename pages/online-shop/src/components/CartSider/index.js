import React, {useContext} from 'react';
import {Card, Button} from 'antd';
import CartItem from '../CartItem/index';
import {CartContext} from "../RootComponent";
import {addToCart, dropOne, setAmount} from "../../actions/cartActions";


function CartSider() {

    const {cartState,dispatch}=useContext(CartContext);

    const goodsArr=cartState.selectedGoods;
    const CartPanel = () => (
        <div>
            {
                goodsArr.map(v => (
                    <CartItem
                        key={v.goodsId}
                        goodsObj={v.goodsObj}
                        count={v.count}
                        clickAdd={() => dispatch(addToCart(v.goodsObj))}
                        clickDrop={() => dispatch(dropOne(v.goodsId))}
                        changeAmount={(newAmount) => dispatch(setAmount(v.goodsId, newAmount))}
                    />
                ))
            }
            <div>合计：
                {
                    goodsArr.reduce((acc, cur, idx, src) => (
                        acc + cur.count * cur.goodsObj.price
                    ), 0)
                }
            </div>
            <Button type={"primary"}>结算</Button>
        </div>
    );
    return (
        <Card title={"购物车"} onClick={(e) => e.stopPropagation()}>
            {goodsArr.length === 0 ? (<span>购物车空空如也</span>) : (<CartPanel/>)}
        </Card>
    )
}


export default CartSider;