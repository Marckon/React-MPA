import React from 'react';
import {Card,Icon} from 'antd';
import {Link} from 'react-router-dom';

const {Meta}=Card;

function GoodsCard({goodsObj}){
        return(
            <Card
                hoverable
                cover={<img src={goodsObj.imageUrl} alt="" />}
                actions={[<span><Icon type={"dollar"}/>{`     ${goodsObj.price}`}</span>,<Icon type={"plus"}  /*onClick={this.props.onClick}*//>]}
            >
                <Meta
                    title={goodsObj.goodsName}
                    description={goodsObj.goodsLongName}
                />
            </Card>
        )
}

export default GoodsCard;