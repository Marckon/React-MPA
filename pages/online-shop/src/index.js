import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './components/containers/RootComponent/index';
import {createStore,applyMiddleware} from 'redux';
import {rootReducer} from "./reducers";
import {Provider} from 'react-redux';
import thunkMiddleWare from 'redux-thunk';


const myMiddleWare=(store)=>nex=>action=>{
    const preState=store.getState();
    const actionType=action.type;
    const returnV=nex(action);
    const afterState=store.getState();
    console.group('action分发进程：',actionType);
    console.log('先前状态：',preState);
    console.log('action类型',actionType);
    console.log('分发后状态：',afterState);
    console.groupEnd()
    // return returnV
}

let store=createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleWare,
        myMiddleWare,

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