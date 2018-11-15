import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './components/containers/RootComponent/index';
import {createStore,applyMiddleware} from 'redux';
import {rootReducer} from "./reducers";
import {Provider} from 'react-redux';
import thunkMiddleWare from 'redux-thunk';
import {createLogger} from 'redux-logger';

const loggerMiddleWare=createLogger();

let store=createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleWare,
        loggerMiddleWare
    )
);
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