import React from 'react';
import ReactDOM from 'react-dom';
import {Provider,connect} from 'react-redux';
import {rootReducer} from './reducers/index';
import {createStore} from 'redux';
import {VisibilityConnected} from "./components/Visibility";
import {CounterConnected} from "./components/Counter";
import {getVisibility} from "./selectors/index";


const store=createStore(rootReducer);

class App extends React.Component{

    render(){
        console.log(this.props)
        return (
            <div>
                <VisibilityConnected/>
                {this.props.visible&&<CounterConnected/>}
            </div>
        )
    }
}

const AppConnected=connect(
    state=>({
        visible:getVisibility(state)
    })
)(App);

ReactDOM.render(
    <Provider store={store}>
        <AppConnected/>
    </Provider>
    ,document.getElementById('root'))