import React from 'react';
import {Card, Button} from 'antd';
import CartItem from '../CartItem';
import {connect} from 'react-redux';


class CartSider extends React.Component {
    componentDidMount() {


    }

    render() {
        console.log(this.props)
        const ItemList =()=>( this.props.selectedGoods.map(v => {
            return (<CartItem key={v.goodsId}/>)
        }));
        const CartPanel = () => (
            <div>
                {ItemList}
                <div>合计：￥659</div>
                <Button type={"primary"}>结算</Button>
            </div>
        );
        return (
            <Card title={"购物车"}>
                {this.props.selectedGoods.length === 0 ? (<span>购物车空空如也</span>) : (<CartPanel/>)}
            </Card>
        )
    }
}


export default CartSider;