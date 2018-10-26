import React from 'react';
import {Menu} from 'antd';
import styles from './index.scss';

const {SubMenu,ItemGroup,Item}=Menu;
class CategorySider extends React.Component{
    render(){
        return (
            <Menu
                className={styles.categorysider}
            >
                <SubMenu key={"clothes"} title={"衣"}>
                    <ItemGroup key={"cl-man"} title={"男士"}>
                        <Item key={"clm-tie"}>领带</Item>
                        <Item key={"clm-shoe"}>男鞋/皮鞋/跑鞋</Item>
                        <Item key={"clm-shirt"}>衬衫/上衣/卫衣/毛衣/羽绒服</Item>
                    </ItemGroup>
                    <ItemGroup key={"cl-woman"} title={"女士"}>
                        <Item key={"clw-dress"}>连衣裙/毛衣/短裙</Item>
                        <Item key={"clw-accessory"}>配饰/发卡/戒指/太阳镜</Item>
                        <Item key={"clw-heal"}>高跟鞋/凉鞋/运动鞋</Item>
                    </ItemGroup>
                </SubMenu>
                <SubMenu key={"food"} title={"食"}>
                    <ItemGroup key={"fo-raw"} title={"生鲜"}>
                        <Item key={"for-seafood"}>鱼虾蟹贝</Item>
                        <Item key={"for-landfood"}>肉蛋奶粮</Item>
                    </ItemGroup>
                </SubMenu>
            </Menu>
        )
    }
}

export default CategorySider;