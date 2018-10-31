//Mock 拦截请求商品信息的http request,并返回api 地址
const API='/getGoodsInfo';
import Mock from 'mockjs';

const {Random}=Mock;

const bgColor=['#AF5F3C','#64363C','#F8C3CD','#FBE251','#20604F','#3A8FB7','#434343','#B4A582'];

const goodsName=Random.cword(2,3);
const goodsLongName=goodsName+' '+Random.cword(5);

function getImageUrl() {
    let index=Math.floor(Math.random()*bgColor.length);
    let color=bgColor[index];
    return Random.image('250x250',color,goodsName)
}

export default function proxyGoodsInfoAPI(){
    Mock.mock(API,{
        'imageUrl':getImageUrl(),
        'goodsName':goodsName,
        'goodsLongName':goodsLongName
    });
    return API;
}
