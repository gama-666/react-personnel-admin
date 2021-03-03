import React, { Component } from 'react';
import { Switch } from 'react-router-dom'

//组件
import userList from "../../views/user/list";   //用户列表
import userAdd from "../../views/user/add";     //用户添加
import departmentList from "../../views/department/list";   //部门列表
import departmentAdd from "../../views/department/add";     //部门添加

//组件 路由私有化
import PrivateRoute from '../privateRoute/'

class ContentMain extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Switch>
                <PrivateRoute component={userList} path="/index/user/list" />
                <PrivateRoute component={userAdd} path="/index/user/add" />
                <PrivateRoute component={departmentList} path="/index/department/list" />
                <PrivateRoute component={departmentAdd} path="/index/department/add" />
            </Switch>
        )
    }
}


export default ContentMain;
