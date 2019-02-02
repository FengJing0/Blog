import React, {PureComponent} from 'react'

import {EditWrapper, FromWrapper} from "./style"

import {CenterTitle, PagesWrapper} from "../../style/common_style"

import {Button, Col, Input, Modal, Row, Select,message} from "antd"

import Markdown from "../Markdown"
import SimpleMDE from "../SimpleMDE"

const Option = Select.Option

class EditComponent extends PureComponent {
  state = {
    content: '',
    category: [],
    visible: false,
    newCategory: ''
  }

  handleOk = () => {
    const {newCategory} = this.state
    const {categoryList,onSubmitNewCategory} = this.props

    if(!categoryList.find(item => item.name.toLowerCase() === newCategory.toLowerCase())){
      onSubmitNewCategory(this.state.newCategory)
      this.setState({
        visible: false,
        newCategory:''
      });
    }else{
      message.error('该分类已存在')
    }

  }

  getModel = () => {
    return (<Modal
        title="添加分类"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={() => this.setState({visible: false, newCategory: ''})}
        okText="确认"
        cancelText="取消"
    >
      <Input placeholder='请输入分类名称' value={this.state.newCategory}
             onChange={e => this.setState({newCategory: e.target.value})}/>
    </Modal>)
  }

  getFrom = () => {
    return (<FromWrapper>
      <Select
          mode="multiple"
          style={{minWidth: 150}}
          placeholder="选择分类"
          onChange={category => {
            this.setState({category})
          }}
      >
        {
          this.props.categoryList.map(item => (<Option key={item.id}>{item.name}</Option>))
        }
      </Select>,
      <Button htmlType='button' onClick={() => this.setState({visible: true})}
              style={{margin: '0 20px'}}>添加分类</Button>
      <Button htmlType='button' type='primary' onClick={this.onSubmit}>提交</Button>
    </FromWrapper>)
  }

  onSubmit = () => {
    const {content, category} = this.state
    if(!content){
      message.error('请填写博客')
      return
    }
    if(!category){
      message.error('请选择分类')
      return
    }
    this.props.onSubmit({content, category})
    // console.log(JSON.stringify(content))
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