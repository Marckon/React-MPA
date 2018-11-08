import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './components/RootComponent/index';
import {createStore} from 'redux';
import {rootReducer} from "./reducers";
import {Provider} from 'react-redux';


let store=createStore(rootReducer)
console.log(store.getState())
class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <RootComponent/>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));