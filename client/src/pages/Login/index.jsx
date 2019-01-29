import React, {PureComponent} from 'react'
import {connect} from "react-redux"

import {actionCreators} from "./store"

import Core from "../../components/Core"


import {Input, Icon} from "antd"


const Icons = name => <Icon type={name} style={{color: 'rgba(0,0,0,.25)'}}/>

const username = () => <Input prefix={Icons('user')} placeholder="用户名"/>

const password = () => <Input prefix={Icons('lock')} type="password" placeholder="密码"/>

const config = [
  {name: 'username', rules: [{required: true, message: '请输入用户名'}], components: username},
  {name: 'password', rules: [{required: true, message: '请输入密码'}], components: password}
]

class Login extends PureComponent {
  handleSubmit = value => {
    this.props.login(value)
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.userInfo.id) {
      nextProps.history.push('/')
    }
  }

  render() {
    return <Core type='login' config={config} handleSubmit={this.handleSubmit}/>
  }

}

const mapStateToProps = state => ({
  userInfo: state.userInfo
})


const mapDispatchToProps = dispatch => ({
  login(user) {
    dispatch(actionCreators.getUserInfoSync(user))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)