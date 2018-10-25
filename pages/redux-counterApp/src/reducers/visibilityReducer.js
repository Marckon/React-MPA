export const visibilityReducer=(state,action)=>{
    if(action.type==="CHANGE_VISIBILITY"){
        return action.visible;
    }
    return true;
};