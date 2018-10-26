import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './components/RootComponent/index';

class App extends React.Component{
    render(){
        return (
            <RootComponent/>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));