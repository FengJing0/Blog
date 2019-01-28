import React,{PureComponent} from 'react'

import {FromWrapper, FullPage} from "../../style/common_style"

import config from "../../config/particlesjs-config"
import {Button, Form, Icon, Input,message} from "antd"

const Item = Form.Item

if(!window.particlesJS){
  require('particles.js')
}

class Register extends PureComponent{
  componentDidMount() {
    window.particlesJS('login',config)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(values.password!==values.rePassword){
          message.error('两次密码不一致');
          return
        }
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
                {getFieldDecorator('rePassword', {
                  rules: [{required: true, message: 'Please input your Password!'}],
                })(
                    <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                           type="password"
                           placeholder="请确认密码"/>
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

export default Form.create({name: 'normal_register'})(Register)