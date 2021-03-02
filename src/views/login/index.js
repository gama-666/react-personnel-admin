import React, { Component } from 'react';
//css
import './index.scss';
//组件
import LoginFrom from './LoginFrom';        //登录
import RegisterFrom from './RegisterFrom';  //注册
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formType: "login"
        };
    }
    //登录注册组件的切换,接收子级传过来的参数
    switchFrom = (value) => {
        this.setState({
            formType: value
        })
    }
    render() {
        return (
            <div className="login-wrap">
                <div>
                    {
                        this.state.formType === "login" 
                        ? <LoginFrom switchFrom={this.switchFrom}></LoginFrom> 
                        :<RegisterFrom switchFrom={this.switchFrom}></RegisterFrom>
                    }
                </div>
            </div>
        )
    }
}


export default Login;
