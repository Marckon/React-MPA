import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './components/RootComponent/index';
import {createStore} from 'redux';
import {rootReducer} from "./reducers";
import {setCartShow} from "./actions/displayActions";


let store=createStore(rootReducer)
store.dispatch(setCartShow(123))
console.log(store.getState())
class App extends React.Component{
    render(){
        return (
            <RootComponent/>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));