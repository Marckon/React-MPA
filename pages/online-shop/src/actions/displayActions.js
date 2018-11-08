//展示管理actions

//action 类型
export const TOGGLE_CART_SHOW="TOGGLE_CART_SHOW";


//action 创建函数
const toggleCartShow=()=>{
    return {
        type:TOGGLE_CART_SHOW,
        visibility:true
    }
};

//导出
export  {
    toggleCartShow,
}