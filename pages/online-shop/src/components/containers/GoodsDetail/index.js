import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'antd';
import styles from './styles.scss';
import {addToCart} from "../../../actions/cartActions";


class GoodsDetail extends React.Component{
    render(){
        const goodsIdParam=this.props.match.params.goodsId;
        const currentGoodsObj=this.props.goodsList.filter(v=>v.goodsId==goodsIdParam)[0];
        console.log(currentGoodsObj)
        return (
            <div className={styles.container}>
                <div className={styles["img-area"]}>
                    <img src={currentGoodsObj.imageUrl} alt=""/>
                </div>
                <div className={styles["info-area"]}>
                    <p>
                        <span><b>商品名称：</b></span>
                        <span>{currentGoodsObj.goodsName}</span>
                    </p>
                    <p>
                        <span><b>商品售价：</b></span>
                        <span>{currentGoodsObj.price}</span>
                    </p>
                    <p>
                        <span><b>商品库存：</b></span>
                        <span>{currentGoodsObj.store}</span>
                    </p>
                    <p>
                        <Button onClick={()=>this.props.addToCart(currentGoodsObj)}>加入购物车</Button>
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    goodsList:state.requestReducer.goodsList
});
const mapDispatchToProps={
  addToCart
};
export default connect(mapStateToProps,mapDispatchToProps)(GoodsDetail);