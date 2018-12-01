import React from 'react';
import {Icon, Badge} from 'antd';
import styles from './styles.scss';

function CartSiderCollapsed({amount}) {

        return (
            <div className={styles.container}>
                <Badge count={amount}>
                    <Icon type={"shopping-cart"} style={{fontSize: "36px"}}/>
                </Badge>
            </div>
        )
}

export default CartSiderCollapsed;