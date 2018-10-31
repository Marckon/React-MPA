import React from 'react';
import {Avatar,Button,Input,Col,Row} from 'antd';

class CartItem extends React.Component{
    render(){
        return (
            <div style={{paddingBottom:'20px',borderBottom:'solid #eee 1px'}}>
                <div>商品1</div>
                <Row type={'flex'} justify={'space-between'} align={'middle'}>
                    <Col span={5}>
                        <Avatar shape={'square'}  icon={'user'}/>
                    </Col>
                    <Col span={5}>
                        ×5
                    </Col>
                    <Col span={14}>
                        <Row type={'flex'} align={'middle'} justify={'space-between'}>
                            <Col span={3} >
                                <Button  size={"small"}  shape={"circle"}  icon={"minus"} type={"danger"}/>
                            </Col>
                            <Col span={13} offset={4}>
                                <Input size={"small"}/>
                            </Col>
                            <Col span={3}>
                                <Button size={"small"}  shape={"circle"} type={"danger"} icon={"plus"}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CartItem;