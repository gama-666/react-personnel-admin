import React, { Component } from 'react';
//antd
import { Form, Input, Button, InputNumber, Radio } from 'antd';

// API 新增部门
import { DepartmentAdd } from '../../api/department'

class departmentAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formLayout: {
                labelCol: { span: 1 },
                wrapperCol: { span: 15 }
            }
        };
    }
    //提交表单且数据验证成功后回调事件
    onFinish = (data) => {
        console.log(data)
        DepartmentAdd(data).then((response) => {
            console.log(111, response.data)
        })
    }

    render() {
        const { formLayout } = this.state;
        return (
            <Form name="basic" onFinish={this.onFinish} {...formLayout}>
                <Form.Item label="部门名称：" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="人员数量：" name="number" >
                    <InputNumber min={0} max={100} />
                </Form.Item>

                <Form.Item label="禁启用：" name="state">
                    <Radio.Group defaultValue={true}  >
                        <Radio value={false}>禁用</Radio>
                        <Radio value={true}>启用</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="描述：" name="content">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit"> 添加</Button>
                </Form.Item>
            </Form >
        )
    }
}

export default departmentAdd;
