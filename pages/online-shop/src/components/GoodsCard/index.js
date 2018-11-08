import React from 'react';
import {Card} from 'antd';

const {Meta}=Card;

class GoodsCard extends React.Component{
    render(){
        return(
            <Card
                hoverable
                cover={<img src={this.props.imageUrl} alt=""/>}
                onClick={this.props.onClick}
            >
                <Meta
                    title={this.props.shortName}
                    description={this.props.longName}
                />
            </Card>
        )
    }
}

export default GoodsCard;