import React from 'react';
import axios from 'axios';
import {proxyGoodsListAPI} from '../../../data/index';
import GoodsCard from '../GoodsCard';
import styles from './styles.scss';

class GoodsList extends React.Component{
    constructor(props){
        super(props);
        this.state={goodsList:[]}
    }

    componentWillMount(){
        let api=proxyGoodsListAPI();
        axios.get(api)
            .then(res=>{
                this.setState({goodsList:res.data.goodsList})
            })
    }

    render(){
        const GoodsItem=this.state.goodsList.map((v,index)=>{
            return <GoodsCard key={index} imageUrl={v.imageUrl} shortName={v.goodsName} longName={v.goodsLongName}/>
        });
        return (
            <div className={styles["goods-list"]}>
                {GoodsItem}
            </div>
        )
    }
}

export default GoodsList;