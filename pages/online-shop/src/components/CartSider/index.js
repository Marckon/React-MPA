import React from 'react';
import {Card, Button} from 'antd';
import CartItem from '../CartItem'

const ItemList=[1,2,3,4,5].map(v=>{
   return (<CartItem key={v}/>)
});

class CartSider extends React.Component {
    render() {
        return (
            <Card title={"购物车"}>
                {ItemList}
                <div>合计：￥659</div>
                <Button type={"primary"}>结算</Button>
            </Card>
        )
    }
}

export default CartSider;