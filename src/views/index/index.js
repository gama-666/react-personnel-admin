import React, { Component } from 'react';
//侧边栏
import Sidebar from "./components/sidebar";
//css
import './index.scss'
//组件
import ContentMain from "../../components/contentMain/index"//内容区 
import HeaderMain from './components/header' // 头部
//antd
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }
    //生命周期，当加载完成，获取记录值
    componentDidMount() {
        const collapsed = JSON.parse(sessionStorage.getItem("collapsed"));
        this.setState({ collapsed });
    }
    //内嵌菜单的展开收起
    openCurrent = () => {
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed });
        sessionStorage.setItem("collapsed", collapsed)
    }
    render() {
        const { collapsed } = this.state
        return (
            <Layout className="layout-wrap">
                <Sider width="250px" collapsed={collapsed}>
                    {/* 侧边栏组件 */}
                    <Sidebar></Sidebar>
                </Sider>
                <Layout>
                    <Header className="layout-header">
                        <HeaderMain collapsed={collapsed} openCurrent={this.openCurrent}></HeaderMain>
                    </Header>
                    <Content className="layout-content">
                        {/* 内容区 组件 */}
                        <ContentMain />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Index;
