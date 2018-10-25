import React from 'react';
//commonjs和import都可用
const ReactDOM = require('react-dom');
import Mock  from 'mockjs';
import axios from 'axios';

const {Random}=Mock;
Mock.mock(/getUser/, {
    "user|3": {
        "name": "@FIRST @LAST",
        "Email": "@EMAIL",
        "city": Random.city()
    }
});

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user:''
        }
    }

    componentDidMount() {
        axios.get("/getUser")
            .then(res => {
                console.log(res.data.user)
                this.setState({
                    user:res.data.user
                })
            })
    }

    render() {
        return (
            <div>
                <h1>mock learn</h1>
                <p>{JSON.stringify(this.state.user)}</p>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));