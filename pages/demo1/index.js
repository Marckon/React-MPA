import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{


    render(){
        const goHome=()=>{
            window.location.href='/'
        };
        return (
            <div>
                <h1>this is a demo1</h1>
                <button onClick={goHome}>return home</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);