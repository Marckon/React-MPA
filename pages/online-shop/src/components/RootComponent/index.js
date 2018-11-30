import React from 'react';
import {Layout} from 'antd';
import styles from './styles.scss'
import CategorySider from '../CategorySider/index';
import CartSider from '../CartSider';
import GoodsList from '../GoodsList';
import {useState, useReducer} from 'react';
import {fetchReducer} from "../../reducers/fetchReducer";

const {Header, Content, Sider} = Layout;
export const FetchesContext = React.createContext(null);

function RootComponent() {

    const [displayState, setDisplayState] = useState({
        categorySiderDisplay: false,
        cartSiderDisplay: false
    });
    const [fetchesState, fetchDispatch] = useReducer(fetchReducer, {
        isFetching: false,
        goodsList: []
    });

    return (
        <FetchesContext.Provider value={{fetchesState,dispatch:fetchDispatch}}>
            <Layout className={styles.container}>
                <Header className={styles.header}>MOCK商店</Header>
                <Layout>
                    <Sider
                        collapsible={true}
                        theme={"light"}
                        trigger={null}
                        collapsed={!displayState.categorySiderDisplay}
                        onClick={() => setDisplayState({
                            ...displayState,
                            categorySiderDisplay: !displayState.categorySiderDisplay
                        })}
                    >
                        <CategorySider/>
                    </Sider>
                    <Content className={styles.content}>
                        <GoodsList/>
                    </Content>
                    <Sider
                        collapsible={true}
                        theme={"light"}
                        trigger={null}
                        collapsed={!displayState.cartSiderDisplay}
                        onClick={() => setDisplayState({
                            ...displayState,
                            cartSiderDisplay: !displayState.cartSiderDisplay
                        })}
                    >
                        <CartSider/>
                    </Sider>
                </Layout>
            </Layout>
        </FetchesContext.Provider>
    )
}

export default RootComponent;