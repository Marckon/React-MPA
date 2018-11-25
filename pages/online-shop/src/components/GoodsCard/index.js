import React from 'react';
import {Card,Icon} from 'antd';
import {Link} from 'react-router-dom';

const {Meta}=Card;

class GoodsCard extends React.Component{
    render(){
        const goodsObj=this.props.goodsObj;
        return(
            <Card
                hoverable
                cover={<Link to={`/pages/online-shop/goodsDetail/${goodsObj.goodsId}`}><img src={goodsObj.imageUrl} alt="" /></Link>}
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