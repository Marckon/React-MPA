import React from 'react';
import {Card, Button} from 'antd';
import CartItem from '../CartItem';
import axios from 'axios';
import {proxyGoodsListAPI} from '../../../data/index';


const ItemList=[1,2,3,4,5].map(v=>{
   return (<CartItem key={v}/>)
});

class CartSider extends React.Component {
    componentDidMount(){
        let getGoodsAPI=proxyGoodsListAPI();
        axios.get(getGoodsAPI)
            .then(res=>{
                console.log(res.data)
            })
    }
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