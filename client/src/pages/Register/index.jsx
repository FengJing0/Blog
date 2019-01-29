import React, {PureComponent} from 'react'

import config from "../../config/particlesjs-config"
import {registerApi} from "../../api/user"

import {FromWrapper, FullPage} from "../../style/common_style"
import {Button, Form, Icon, Input, message} from "antd"
import {CenterTitle} from "../../style/common_style"

const Item = Form.Item

if (!window.particlesJS) {
  require('particles.js')
}

class Register extends PureComponent {
  componentDidMount() {
    window.particlesJS('login', config)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {username, password, rePassword} = values
        if (password !== rePassword) {
          message.error('两次密码不一致')
          return
        }

        registerApi({username, password}).then(res => {
          if (res && res.data.errorCode === 0) {
            this.props.history.push('/login')
          }
        })
      }
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
        <FullPage id='login'>
          <FromWrapper>
            <CenterTitle>用户注册</CenterTitle>
            <Form onSubmit={this.handleSubmit}>
              <Item>
                {getFieldDecorator('username', {
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

//
// const mapDispatchToProps = dispatch => {
//
// }

export default Form.create({name: 'normal_register'})(Register)