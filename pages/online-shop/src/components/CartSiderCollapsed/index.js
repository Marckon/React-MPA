import React from 'react';
import {Icon, Badge} from 'antd';
import styles from './styles.scss';

class CartSiderCollapsed extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Badge count={this.props.goodsCount}>
                    <Icon type={"shopping-cart"} style={{fontSize: "36px"}}/>
                </Badge>
            </div>
        )
    }
}

export default CartSiderCollapsed;