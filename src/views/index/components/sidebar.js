import React, { Component, Fragment } from 'react';

//css
import "./sidebar.scss"
//导航路由组件
import SidebarMenu from "../../../components/sidebarMenu"
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Fragment>
                <h1 className="logo"><span>logo</span></h1>
                <SidebarMenu></SidebarMenu>
            </Fragment>
        )
    }
}
export default Sidebar;
