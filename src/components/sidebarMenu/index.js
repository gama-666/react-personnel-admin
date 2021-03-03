import React, { Component, Fragment } from 'react';
//导航路由
import Router from '../../router';
import { Link, withRouter } from "react-router-dom";
//antd
import { Menu, } from 'antd';

const { SubMenu } = Menu;
class SidebarMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: [],
            openKeys: []
        };
    }
    //生命周期,获取路由,设置默认选中高光
    componentDidMount() {
        const pathname = this.props.location.pathname;
        const menuKey = pathname.split('/').slice(0, 3).join('/')
        this.selectMenuHigh(pathname, menuKey)
    }
    //选中当前子菜单的高光
    selectMenu = ({ item, key, keyPath, domEvent }) => {
        const menuKey = keyPath[keyPath.length - 1]
        this.selectMenuHigh(key, menuKey)
    }
    //菜单展开/关闭选中
    openMenu = (openKeys) => {
        this.setState({
            openKeys: [openKeys[openKeys.length - 1]]

        })
    }
    //菜单高光
    selectMenuHigh(pathname, menuKey) {
        this.setState({
            selectedKeys: [pathname],
            openKeys: [menuKey]
        })
    }
    // 无子级菜单
    renderMenu = ({ title, key, icon }) => {
        return (
            <Menu.Item key={key} icon={icon}>
                <Link to={key}><span>{title}</span></Link>
            </Menu.Item>
        )
    }
    // 有子级菜单
    renderSubMenu = ({ title, key, icon, child }) => {
        return (
            <SubMenu key={key} icon={icon} title={title}>
                {
                    child && child.map(item => {
                        return item.child && item.child.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item)
                    })
                }
            </SubMenu>
        )
    }
    render() {
        const { selectedKeys, openKeys } = this.state;
        return (
            <Fragment>
                <Menu
                    theme="dark"
                    mode="inline"
                    onOpenChange={this.openMenu}
                    onClick={this.selectMenu}
                    selectedKeys={selectedKeys}
                    openKeys={openKeys}
                >
                    {
                        Router && Router.map(firstItem => {
                            return firstItem.child && firstItem.child.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem)
                        })
                    }
                </Menu>
            </Fragment>
        )
    }
}

export default withRouter(SidebarMenu);
