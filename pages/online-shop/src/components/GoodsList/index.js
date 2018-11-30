import React, {useContext, useEffect,useState} from 'react';
import {proxyGoodsListAPI} from '../../../data/index';
import GoodsCard from '../GoodsCard/index';
import styles from './styles.scss';
import {
    requestGoodsList,
    receiveGoodsList
} from "../../actions/fetchActions";
import axios from 'axios';
import {FetchesContext} from "../RootComponent";

function GoodsList() {

    const ctx = useContext(FetchesContext);

    const [reFetch,setReFetch]=useState(false);

    useEffect(() => {
        ctx.dispatch(requestGoodsList());
            axios.get(proxyGoodsListAPI())
                .then(res=>{
                    ctx.dispatch(receiveGoodsList(res.data))
                })
    },[reFetch]);

    const handleScroll=e=>{
        //判断滚动到底部的方式
        const scrollBtm=e.target.scrollHeight-e.target.scrollTop-e.target.clientHeight;
        setReFetch(scrollBtm===0);
    };

    return (
        <div className={styles["goods-list"]} onScroll={handleScroll}>
            {
                ctx.fetchesState.goodsList.map((v,idx)=><GoodsCard goodsObj={v} key={`goods-${idx}`}/>)
            }
        </div>
    )
}

export default GoodsList;
