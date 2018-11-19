import React from 'react';
import {proxyGoodsListAPI} from '../../../../data/index';
import GoodsCard from '../../GoodsCard/index';
import styles from './styles.scss';
import {connect} from 'react-redux';
import {addToCart} from "../../../actions/cartActions";
import {fetchGoodsList} from "../../../actions/requestActions";

class GoodsList extends React.Component{
    constructor(props){
        super(props);
        this.state={goodsList:[]}
    }

    handleGoodsClick(goodsObj,e){
        this.props.addToCart(goodsObj)
    }
    componentDidMount(){
        let api=proxyGoodsListAPI();
        this.props.fetchGoodsList(api);
    }

    render(){
        const GoodsItem=this.props.goodsList.map((v)=>{
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
        goodsList:state.requestReducer.goodsList,
        selectedGoods:state.cartReducer.selectedGoods
    }
}
const mapDispatchToProps={
    addToCart,
    fetchGoodsList
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GoodsList);