import React from 'react';
import {changeVisibility} from "../actions/index";
import {connect} from 'react-redux';

class Visibility extends React.Component{
    render(){
        return (
            <div>
                <button onClick={()=>this.props.changeVisibility(true)}>
                    Visible
                </button>
                <button onClick={()=>this.props.changeVisibility(false)}>
                    Hide
                </button>
            </div>
        )
    }
}

export const VisibilityConnected=connect(
    null,
    dispatch=>({
        changeVisibility: value=>dispatch(changeVisibility(value))
    })
)(Visibility);