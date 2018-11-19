import React from 'react';
import {Card, Button} from 'antd';
import CartItem from '../../CartItem/index';
import {connect} from 'react-redux';
import {addToCart, dropOne, setAmount} from "../../../actions/cartActions";


class CartSider extends React.Component {

    render() {
        const goodsArr=this.props.selectedGoods;
        const CartPanel = () => (
            <div>
                {
                    goodsArr.map(v=>(
                        <CartItem
                            key={v.goodsId}
                            goodsObj={v.goodsObj}
                            count={v.count}
                            clickAdd={()=>this.props.addToCart(v.goodsObj)}
                            clickDrop={()=>this.props.dropOne(v.goodsId)}
                            changeAmount={(newAmount)=>this.props.setAmount(v.goodsId,newAmount)}
                        />
                    ))
                }
                <div>合计：
                    {
                        goodsArr.reduce((acc,cur,idx,src)=>(
                            acc+cur.count*cur.goodsObj.price
                        ),0)
                    }
                </div>
                <Button type={"primary"}>结算</Button>
            </div>
        );
        return (
            <Card title={"购物车"} onClick={(e)=>e.stopPropagation()}>
                {goodsArr.length === 0 ? (<span>购物车空空如也</span>) : (<CartPanel/>)}
            </Card>
        )
    }
}

const mapStateToProps=state=>{
    return {
        selectedGoods:state.cartReducer.selectedGoods
    }
};

const mapDispatchToProps={
    addToCart,
    dropOne,
    setAmount
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartSider);