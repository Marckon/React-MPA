export const counterReducer=(state,action)=>{
    switch (action.type){
        case "ADD":
            return {value:state.value+1};
        case "SUBTRACT":
            return {value:state.value-1};
        default:
            return state||{value:0}
    }
};