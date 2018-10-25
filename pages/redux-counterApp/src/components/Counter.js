import React from 'react';
import {connect} from 'react-redux';
import {getCounterValue} from "../selectors/index";
import {add,subtract} from "../actions/index";

class Counter extends React.Component{
    render(){
        return (
            <div>
                <p>Value:{this.props.value}</p>
                <button onClick={this.props.add}>Add</button>
                <button onClick={this.props.subtract}>Subtract</button>
            </div>
        )
    }
}

export const CounterConnected=connect(
    state=>({
        value:getCounterValue(state)
    }),
    dispatch=>({
        add:()=>dispatch(add()),
        subtract:()=>dispatch(subtract())
    })
)(Counter)