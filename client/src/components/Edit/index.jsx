import React, {PureComponent} from 'react'

import {EditWrapper,FromWrapper} from "./style"

import {CenterTitle, PagesWrapper} from "../../style/common_style"

import {Button, Col, Input, Modal, Row, Select} from "antd"

import Markdown from "../Markdown"
import SimpleMDE from "../SimpleMDE"

const Option = Select.Option

class EditComponent extends PureComponent{
  state = {
    content: '',
    types: [],
    visible: false,
    newType:''
  }

  handleOk = () => {
    this.props.onSubmitNewType(this.state.newType)
    this.setState({
      visible: false,
      newType:''
    });
  }

  getModel = () => {
    return (<Modal
        title="添加分类"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={()=>this.setState({visible:false,newType:''})}
        okText="确认"
        cancelText="取消"
    >
      <Input placeholder='请输入分类名称' value={this.state.newType} onChange={e=>this.setState({newType:e.target.value})}/>
    </Modal>)
  }

  getFrom = () => {
    return (<FromWrapper>
      <Select
          mode="multiple"
          style={{minWidth: 150}}
          placeholder="选择分类"
          onChange={types => {
            this.setState({types})
          }}
      >
        {
          this.props.typeList.map(item => (<Option key={item.id}>{item.name}</Option>))
        }
      </Select>,
      <Button htmlType='button' type='primary' onClick={()=>this.setState({visible:true})} style={{margin: '0 20px'}}>添加分类</Button>
      <Button htmlType='button' type='primary' onClick={this.onSubmit}>提交</Button>
    </FromWrapper>)
  }

  onSubmit = () => {
    const {content,types} = this.state
    this.props.onSubmit({content,types})
  }


  render() {
    const {content} = this.state
    return (<EditWrapper>
      <CenterTitle>写博客</CenterTitle>
      {this.getFrom()}
      {this.getModel()}
      <Row gutter={24}>
        <Col span={12}><PagesWrapper><Markdown md={content}/></PagesWrapper></Col>
        <Col span={12}><PagesWrapper><SimpleMDE onChange={content => {
          this.setState({content})
        }}/></PagesWrapper></Col>
      </Row>
    </EditWrapper>)
  }
}

export default EditComponent