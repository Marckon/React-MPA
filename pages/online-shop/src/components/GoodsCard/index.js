import React from 'react';
import {Card,Icon} from 'antd';

const {Meta}=Card;

class GoodsCard extends React.Component{
    render(){
        const goodsObj=this.props.goodsObj;
        return(
            <Card
                hoverable
                cover={<img src={goodsObj.imageUrl} alt=""/>}
                actions={[<span><Icon type={"dollar"}/>{`     ${goodsObj.price}`}</span>,<Icon type={"plus"}  onClick={this.props.onClick}/>]}
            >
                <Meta
                    title={goodsObj.goodsName}
                    description={goodsObj.goodsLongName}
                />
            </Card>
        )
    }
}

export default GoodsCard;