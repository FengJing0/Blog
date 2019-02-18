import React,{PureComponent} from 'react'

import {FullPage, FromWrapper, CenterTitle} from "../../style/common_style"
import config from "../../config/particlesjs-config"
import {Link} from "react-router-dom"

import {Button, Form} from "antd"
const Item = Form.Item

if (!window.particlesJS) {
  require('particles.js')
}

class Core extends PureComponent{
  componentDidMount() {
    window.particlesJS('page', config)
  }

  getLabel = (type) => {
    if(type==='login'){
      return <p>还没有帐号，现在 <Link to='/register'>注册</Link></p>
    }else{
      return <p>已有帐号，现在 <Link to='/login'>登录</Link></p>
    }
  }

  submit = e => {
    const {handleSubmit} = this.props
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        handleSubmit(values)
      }
    });
  }

  render() {
    const {type,config,form} = this.props
    const {getFieldDecorator} = form
    return (<FullPage id='page'>
      <FromWrapper>
        <CenterTitle>{type==='login'?'用户登录':'用户注册'}</CenterTitle>
        <Form onSubmit={this.submit}>
          {
            config.map(item => (<Item key={item.name}>
              {
                getFieldDecorator(item.name,{rules:item.rules})(item.components())
              }
            </Item>))
          }
          {this.getLabel(type)}
          <Item>
            <Button type="primary" htmlType="submit" block>
              {type==='login'?'登录':'注册'}
            </Button>
          </Item>
        </Form>
      </FromWrapper>
    </FullPage>)
  }
}

export default Form.create({name: 'normal_login'})(Core)