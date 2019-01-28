import React,{PureComponent} from 'react'

import {FullPage} from "../../style/common_style"

import config from "../../config/particlesjs-config"


if(!window.particlesJS){
  require('particles.js')
}

class Register extends PureComponent{
  componentDidMount() {
    window.particlesJS('login',config)
  }


  render() {
    return <FullPage id='login'>Login</FullPage>
  }
}

export default Register