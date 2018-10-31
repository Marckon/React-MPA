//Mock 拦截请求商品信息的http request,并返回api 地址
const API = '/getGoodsList';
import Mock from 'mockjs';

const {Random} = Mock;

const bgColor = ['#AF5F3C', '#64363C', '#F8C3CD', '#FBE251', '#20604F', '#3A8FB7', '#434343', '#B4A582'];

const getGoodsName =()=> Random.cword(2, 3);
const getGoodsLongName =(goodsName)=> goodsName + ' ' + Random.cword(5);

function getImageUrl(goodsName) {
    let index = Math.floor(Math.random() * bgColor.length);
    let color = bgColor[index];
    return Random.image('250x250', color, goodsName)
}

function getAGoods() {
    const goodsName=getGoodsName();
    return {
        imageUrl: getImageUrl(goodsName),
        goodsName,
        goodsLongName: getGoodsLongName(goodsName)
    }
}

const getGoodsList=(leng)=>new Array(leng).fill('').map(v=>getAGoods())
export default function proxyGoodsInfoAPI() {
    Mock.mock(API, {
        goodsList: getGoodsList(20)
    });
    return API;
}
