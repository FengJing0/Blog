import React from 'react'
import img from './img/404.png'
import {PageWrapper} from "./style"
import {Button} from "antd"

const NotFound = props => {
  return <PageWrapper>
    <img src={img} alt=""/>
    <Button htmlType='button' className='b-mt' onClick={() => props.history.replace('/')}>回到首页</Button>
  </PageWrapper>
}

export default NotFound