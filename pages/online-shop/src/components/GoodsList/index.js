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

    handleGoodsClick(goodsId,e){
        this.props.dispatchGoodsClick(goodsId)
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
            return <GoodsCard key={v.goodsId}  imageUrl={v.imageUrl} shortName={v.goodsName} longName={v.goodsLongName}  onClick={this.handleGoodsClick.bind(this,v.goodsId)}/>
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
        selectedGoods:state.selectedGoods
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