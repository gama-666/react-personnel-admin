import React, { Component, Fragment } from 'react';
//antd
import { Form, Input, Button, Row, Col, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
//自定义验证、密码校验
import { validate_password } from "../../utils/validate";
// API 登录接口,获取验证码
import { Login } from "../../api/account";
//组件 获取验证码
import ButtonCode from "../../components/code"
//加密
import CryptoJs from 'crypto-js';
//增加白名单
import { withRouter } from "react-router-dom"
//方法，存储token
import { setToken } from "../../utils/session"

class LoginFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            module: "login",
            loading: false,
        };
    }
    /*切换注册组件,调用父级的方法*/
    toggleFrom = () => {
        this.props.switchFrom('register')
    }
    /*提交按钮*/
    onFinish = (values) => {
        const pwd = CryptoJs.MD5(values.password).toString(); //密码加密
        values.password = pwd;
        this.setState({ loading: true })
        this.login(values)
    }
    /*登录接口请求 API*/
    login = (data) => {
        Login(data).then(response => {
            message.success(response.data.message, 1);
            this.setState({ loading: false })
            //存储token
            setToken(response.data.data.token)
            //路由跳转
            this.props.history.push('/index')
        }).catch(error => {
            message.error(error.data.message, 1);
            this.setState({ loading: false })
        })
    }
    /*获取用户名Change事件(邮箱)*/
    usernameChange = (e) => {
        const value = e.target.value;
        this.setState({
            username: value
        })
    }
    render() {
        const { username, module, loading } = this.state;
        return (
            <Fragment>
                <div className="from-header">
                    <div className="column">登录</div>
                    <span onClick={this.toggleFrom}>账号注册</span>
                </div>
                <div className="from-conten">
                    <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={this.onFinish} >
                        {/* 邮箱 */}
                        <Form.Item name="username" rules={[
                            { required: true, message: '邮箱不能为空' },
                            { type: 'email', message: '邮箱格式不正确' }
                        ]}>
                            <Input value={username} onChange={this.usernameChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
                        </Form.Item>
                        {/* 密码 */}
                        <Form.Item name="password" rules={[
                            { required: true, message: '密码不能为空' },
                            { pattern: validate_password, message: '请输入大于6位小于20位的字母+数字' }
                        ]}>
                            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="password" />
                        </Form.Item>
                        {/* 获取验证码 */}
                        <Form.Item name="code" rules={[
                            { required: true, message: '两次密码不一致' },
                            { len: 6, message: '请输入长度为6位的验证码' }
                        ]}>
                            <Row gutter={13}>
                                <Col span={15}>
                                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="code" placeholder="code" />
                                </Col>
                                <Col span={9}>
                                    {/* 组件 */}
                                    <ButtonCode username={username} module={module}></ButtonCode>
                                </Col>
                            </Row>
                        </Form.Item>
                        {/* 登录按钮 */}
                        <Form.Item>
                            <Button type="primary" loading={loading} htmlType="submit" className="login-form-button" block>登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(LoginFrom);
