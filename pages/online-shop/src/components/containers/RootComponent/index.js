import React from 'react';
import {Layout} from 'antd';
import styles from './styles.scss'
import CategorySider from '../../CategorySider/index';
import CartSider from '../CartSider/index';
import GoodsList from '../GoodsList/index';
import {connect} from 'react-redux';
import {toggleCartShow} from "../../../actions/displayActions";
import CartSiderCollapsed from "../../CartSiderCollapsed/index";


const {Header, Content, Sider, Footer} = Layout;

class RootComponent extends React.Component {

    render() {
        console.log(this.props)
        return (
            <Layout>
                <Header className={styles.header}>MOCK商店</Header>
                <Layout>
                    <Sider collapsible={true} theme={"light"} defaultCollapsed={true} >
                        <CategorySider/>
                    </Sider>
                    <Content className={styles.content}>
                        <GoodsList/>
                    </Content>
                    <Sider collapsible={true} theme={"light"} collapsed={!this.props.cartDisplay} trigger={null} onClick={this.props.toggleCartShow} >
                        {this.props.cartDisplay ? (<CartSider/>) : (<CartSiderCollapsed goodsCount={this.props.selectedGoods.length}/>)}
                    </Sider>
                </Layout>
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartDisplay: state.displayReducer.cartDisplay,
        selectedGoods:state.cartReducer.selectedGoods
    }
};
const mapDispatchToProps = {
    toggleCartShow
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RootComponent);