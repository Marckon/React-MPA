import React from 'react';
import {Layout} from 'antd';
import styles from './styles.scss'
import CategorySider from '../CategorySider/index';
import CartSider from '../CartSider';
import GoodsList from '../GoodsList'

const {Header, Content, Sider, Footer} = Layout;

class RootComponent extends React.Component {

    render() {
        return (
            <Layout>
                <Header className={styles.header}>MOCK商店</Header>
                <Layout>
                    <Sider collapsible={true} theme={"light"} defaultCollapsed={true}>
                        <CategorySider/>
                    </Sider>
                    <Content className={styles.content}>
                        <GoodsList/>
                    </Content>
                    <Sider collapsible={true} theme={"light"} defaultCollapsed={true}>
                        <CartSider/>
                    </Sider>
                </Layout>
            </Layout>
        )
    }
}

export default RootComponent;