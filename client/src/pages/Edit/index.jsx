import React, {PureComponent} from 'react'
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

import SimpleMDE from "../../components/SimpleMDE"
import Markdown from "../../components/Markdown"

import {PagesWrapper,CenterTitle} from "../../style/common_style"
import {EditWrapper,FromWrapper} from "./style"

import {Button, Col, Row} from "antd"


class Edit extends PureComponent {
  state = {
    type:[],
    content:''
  }

  getFrom = () => {
    return (<FromWrapper>
      <Button htmlType='button' type='primary' onClick={this.onSubmit}>提交</Button>
    </FromWrapper>)
  }

  onChange = value =>{
    this.setState({content:value})
  }

  onSubmit = ()=>{
    console.log(this.state.content)
  }

  render() {
    if (this.props.userInfo.scope!==32) {
      return <Redirect to='/'/>
    } else {
      const {content} = this.state
      return (<EditWrapper>
        <CenterTitle>写博客</CenterTitle>
        {this.getFrom()}
        <Row gutter={24}>
          <Col span={12}><PagesWrapper><Markdown md={content}/></PagesWrapper></Col>
          <Col span={12}><PagesWrapper><SimpleMDE onChange={this.onChange}/></PagesWrapper></Col>
        </Row>
      </EditWrapper>)
    }
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo
})

export default connect(mapStateToProps)(Edit)