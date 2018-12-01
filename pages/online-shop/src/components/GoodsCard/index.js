import React,{useContext} from 'react';
import {Card, Icon} from 'antd';
import {Link} from 'react-router-dom';
import {CartContext} from "../RootComponent";
import {addToCart} from "../../actions/cartActions";

const {Meta} = Card;

function GoodsCard({goodsObj}) {

    const {cartState,dispatch}=useContext(CartContext);
    return (
        <Card
            hoverable
            cover={<img src={goodsObj.imageUrl} alt=""/>}
            actions={[<span><Icon type={"dollar"}/>{`     ${goodsObj.price}`}</span>, <Icon type={"plus"} onClick={()=>dispatch(addToCart(goodsObj))}/>]}
        >
            <Meta
                title={goodsObj.goodsName}
                description={goodsObj.goodsLongName}
            />
        </Card>
    )
}

export default GoodsCard;