import React, { Component, Fragment } from 'react';
//自定义验证、邮箱校验
import { validate_email } from "../../utils/validate";
//antd
import { Button, message } from 'antd';
// API 登录接口,获取验证码
import { GetSms } from "../../api/account";
// 定时器
let timer = null;
class ButtonCode extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: props.username,
            module: props.module,
            code_button_loading: false,
            code_button_disabled: false,
            code_button_text: "获取验证码",
        }
    }
    /*生命周期 将要接收父组件穿来的props*/
    componentWillReceiveProps({ username, module }) {
        this.setState({
            username,
            module
        }) //更新父组件传过来的参数
    }
    /*生命周期 组件即将销毁*/
    componentWillUnmount() {
        clearInterval(timer) //清除定时器
    }
    /*获取验证码按钮点击事件*/
    getCode = () => {
        //判断邮箱是否为空
        if (!this.state.username) {
            message.warning('用户名不能为空', 0.5);
            return false
        } else {
            if (!validate_email(this.state.username)) {
                message.warning('邮箱格式不正确', 1);
                return false
            }
            //修改验证码按钮状态
            this.setState({
                code_button_loading: true,
                code_button_text: '发送中',
            })
            //验证码接口请求
            this.getSms()
        }
    }
    //获取验证码接口请求 API
    getSms = () => {
        const data = {
            username: this.state.username,
            module: this.state.module
        }
        GetSms(data).then(response => {
            //请求成功，倒计时
            this.countDown()
            message.info(response.data.message);
        }).catch(error => {
            //请求失败
            this.setState({
                code_button_loading: false,
                code_button_text: '重新获取',
            })
        })
    }
    //倒计时
    countDown = () => {
        let sec = 60;
        this.setState({
            code_button_disabled: true,
            code_button_loading: false,
            code_button_text: `${sec}s`,
        })
        timer = setInterval(() => {
            sec--;
            if (sec < 0) {
                this.setState({
                    code_button_text: "重新获取",
                    code_button_disabled: false,
                });
                clearInterval(timer)
                return false
            }
            this.setState({
                code_button_text: `${sec}s`,
            });
        }, 1000)
    }
    render() {
        const { code_button_loading, code_button_text, code_button_disabled } = this.state;
        return (
            <Fragment>
                <Button type="danger" disabled={code_button_disabled} loading={code_button_loading} onClick={this.getCode} block>{code_button_text}</Button>
            </Fragment>
        )
    }
}

export default ButtonCode;