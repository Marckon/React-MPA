import React from 'react';
import axios from 'axios';
import {proxyGoodsListAPI} from '../../../data/index';
import GoodsCard from '../GoodsCard';
import styles from './styles.scss';
import {connect} from 'react-redux';
import {addToCart} from "../../actions/cartActions";

class GoodsList extends React.Component{
    constructor(props){
        super(props);
        this.state={goodsList:[]}
    }

    handleGoodsClick(goodsObj,e){
        this.props.dispatchGoodsClick(goodsObj)
    }
    componentWillMount(){
        let api=proxyGoodsListAPI();
        axios.get(api)
            .then(res=>{
                this.setState({goodsList:res.data.goodsList})
            })
    }

    render(){
        const GoodsItem=this.state.goodsList.map((v)=>{
            //onClick 传递给子组件实现点击功能
            return <GoodsCard key={v.goodsId}  goodsObj={v} onClick={this.handleGoodsClick.bind(this,v)}/>
        });
        return (
            <div className={styles["goods-list"]}>
                {GoodsItem}
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return {
        selectedGoods:state.cartReducer.selectedGoods
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        dispatchGoodsClick:(goodsId)=>dispatch(addToCart(goodsId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GoodsList);