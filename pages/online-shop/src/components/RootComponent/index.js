import React from 'react';
import {Layout} from 'antd';
import styles from './styles.scss'
import CategorySider from '../CategorySider/index';
import CartSider from '../CartSider';

const {Header, Content, Sider, Footer} = Layout;

class RootComponent extends React.Component {

    render() {
        return (
            <Layout>
                <Header className={styles.header}>MOCK商店</Header>
                <Layout>
                    <Sider collapsible={true} theme={"light"}>
                        <CategorySider/>
                    </Sider>
                    <Content className={styles.content}>

                    </Content>
                    <Sider collapsible={true} theme={"light"}>
                        <CartSider/>
                    </Sider>
                </Layout>
            </Layout>
        )
    }
}

export default RootComponent;