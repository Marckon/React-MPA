import React from 'react';
import {List,Row,Col} from 'antd';

class CartSider extends React.Component{
    render(){
        return (
            <Row type={"flex"} justify={"center"}>
                <Col span={6} style={{fontSize:"1rem"}}>
                    购物车
                </Col>
            </Row>
        )
    }
}

export default CartSider;