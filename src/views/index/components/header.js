
import React, { Component, Fragment } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

class HeaderMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: props.collapsed
        };
    }
    //生命周期，监听父级props的值变化
    componentWillReceiveProps({ collapsed }) {
        this.setState({ collapsed })
    }
    //内嵌菜单的展开收起,修改父组件的值
    togglecollapsed = () => {
        this.props.openCurrent()
    }
    render() {
        const { collapsed } = this.state
        return (
            <Fragment>
                <div className="head-warp">
                    <span className="head-open" onClick={this.togglecollapsed}> {collapsed ? < MenuUnfoldOutlined /> : <MenuFoldOutlined />}</span>
                </div>
            </Fragment>

        )
    }
}


export default HeaderMain;
