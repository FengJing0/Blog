import React, {PureComponent} from 'react'

import {Form, Input, Button, Icon} from "antd"

import {FullPage, FromWrapper} from "../../style/common_style"

import config from "../../config/particlesjs-config"

const Item = Form.Item

if (!window.particlesJS) {
  require('particles.js')
}

class Login extends PureComponent {
  componentDidMount() {
    window.particlesJS('login', config)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
        <FullPage id='login'>
          <FromWrapper>
            <Form onSubmit={this.handleSubmit}>
              <Item>
                {getFieldDecorator('userName', {
                  rules: [{required: true, message: 'Please input your username!'}],
                })(
                    <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                           placeholder="用户名"/>
                )}
              </Item>
              <Item>
                {getFieldDecorator('password', {
                  rules: [{required: true, message: 'Please input your Password!'}],
                })(
                    <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                           type="password"
                           placeholder="密码"/>
                )}
              </Item>
              <Item>
                <Button type="primary" htmlType="submit" block>
                  Login
                </Button>
              </Item>
            </Form>
          </FromWrapper>
        </FullPage>
    )
  }

}


export default Form.create({name: 'normal_login'})(Login)