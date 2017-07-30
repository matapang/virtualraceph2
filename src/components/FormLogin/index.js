import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import FormWrapper from '../FormWrapper';
const FormItem = Form.Item;

class FormLogin extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form 2: ', values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormWrapper>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                            )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                            )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                            )}
                        <a className="login-form-forgot" href="" style={{ float: "right" }}>Forgot password</a>

                    </FormItem>

                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                            Log in
                        </Button>
                        <br />
                        Or <a href="">register now!</a>
                    </div>
                </FormWrapper>
            </Form>
        );
    }
}

export default Form.create()(FormLogin);