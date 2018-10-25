import React from 'react';
import ReactDOM from 'react-dom';
import {List,Row,Col,Layout} from 'antd';

const pages=[
    {
        title:'demo1',
        description:'一个初始demo'
    },
    {
        title:'redux-counterApp',
        description:'使用redux进行数据流管理的一个计数器react应用'
    }
];

class App extends React.Component{
    render(){
        return (
            <Layout>
                <Layout.Header style={{color:"#fff",fontSize:"24px"}}>React 学习demo</Layout.Header>
                <Row type={"flex"} justify={"center"}>
                    <Col span={20}>
                        <List
                            itemLayout={"horizontal"}
                            dataSource={pages}
                            renderItem={item=>(
                                <List.Item>
                                    <List.Item.Meta
                                        title={<a href= {`/pages/${item.title}`}>{item.title}</a>}
                                        description={item.description}
                                    />
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </Layout>


        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));