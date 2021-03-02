import React, { Component } from 'react';
//侧边栏
import Sidebar from "./components/sidebar";
//css
import './index.scss'
//antd
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Layout className="layout-wrap">
                <Sider width="250px">
                    {/* 侧边栏组件 */}
                    <Sidebar></Sidebar>
                </Sider>
                <Layout>
                    <Header className="layout-header">头部</Header>
                    <Content className="layout-content">内容区</Content>
                </Layout>
            </Layout>
        )
    }
}

export default Index;
