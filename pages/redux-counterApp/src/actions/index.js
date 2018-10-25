const ADD='ADD';
const SUBTRACT='SUBTRACT';
const CHANGE_VISIBILITY='CHANGE_VISIBILITY';

const add=()=>({type:ADD});
const subtract=()=>({type:SUBTRACT});
const changeVisibility=(visible)=>({
    type:CHANGE_VISIBILITY,
    visible
});

export {
    add,
    subtract,
    changeVisibility
}