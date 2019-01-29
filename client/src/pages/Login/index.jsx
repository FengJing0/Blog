import React, {PureComponent} from 'react'
import {connect} from "react-redux"

import {loginApi} from "../../api/user"
import {getUserInfoSync} from "../../redux/actions"

import {FullPage, FromWrapper, CenterTitle} from "../../style/common_style"
import config from "../../config/particlesjs-config"

import {Form, Input, Button, Icon} from "antd"

const Item = Form.Item

if (!window.particlesJS) {
  require('particles.js')
}

const Icons = name => <Icon type={name} style={{color: 'rgba(0,0,0,.25)'}}/>

const username = () =><Input prefix={Icons('user')} placeholder="用户名"/>

const password = () =><Input prefix={Icons('lock')} type="password" placeholder="密码"/>

const loginFrom = [
  {name:'username',rules:[{required: true, message: 'Please input your username!'}],components:username},
  {name:'password',rules:[{required: true, message: 'Please input your Password!'}],components:password}
]

class Login extends PureComponent {
  componentDidMount() {
    window.particlesJS('login', config)
  }

   handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values)
      }
    });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if(nextProps.userInfo.id){
      nextProps.history.push('/')
    }
  }

  render() {
    const {getFieldDecorator} = this.props.form
    return (
        <FullPage id='login'>
          <FromWrapper>
            <CenterTitle>用户登录</CenterTitle>
            <Form onSubmit={this.handleSubmit}>
              {
                loginFrom.map(item => (<Item key={item.name}>
                  {
                    getFieldDecorator(item.name,item.rules)(item.components())
                  }
                </Item>))
              }
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

const mapStateToProps  = state =>({
  userInfo:state.userInfo
})


const mapDispatchToProps = dispatch => ({
  login(user){
    dispatch(getUserInfoSync(user))
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(Form.create({name: 'normal_login'})(Login))