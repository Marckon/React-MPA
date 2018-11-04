//展示管理actions

//action 类型
export const SET_CART_SHOW="SET_CART_SHOW";


//action 创建函数
const setCartShow=(visibility)=>{
    return {
        type:SET_CART_SHOW,
        visibility
    }
};

//导出
export  {
    setCartShow,
}