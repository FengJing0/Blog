import React, {PureComponent} from 'react'

import Core from '../../components/Core'

import {user} from "../../api"

import {Icon, Input, message} from "antd"


const Icons = name => <Icon type={name} style={{color: 'rgba(0,0,0,.25)'}}/>

const username = () => <Input prefix={Icons('user')} placeholder="用户名"/>

const password = () => <Input prefix={Icons('lock')} type="password" placeholder="密码"/>

const rePassword = () => <Input prefix={Icons('lock')} type="password" placeholder="请确认密码"/>

const config = [
  {name: 'username', rules: [{required: true, message: '请输入用户名'}], components: username},
  {name: 'password', rules: [{required: true, message: '请输入密码'}], components: password},
  {name: 'rePassword', rules: [{required: true, message: '请确认密码'}], components: rePassword}
]


class Register extends PureComponent {
  handleSubmit = value => {
    const {username, password, rePassword} = value
    if (password !== rePassword) {
      message.error('两次密码不一致')
      return
    }

    user.registerApi({username, password}).then(res => {
      if (!res.errorCode) {
        this.props.history.push('/login')
      }
    })

  }

  render() {
    return <Core type='register' config={config} handleSubmit={this.handleSubmit}/>
  }
}


export default Register