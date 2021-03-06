import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import {EditWrapper, FromWrapper} from "./style"

import {CenterTitle, PagesWrapper} from "../../style/common_style"

import {Button, Col, Input, Row, message} from "antd"

import Markdown from "../Markdown"
import SimpleMDE from "../SimpleMDE"
import CategorySelect from "../CategorySelect"

import Upload from './upload'

import {blog} from "../../api"


class EditComponent extends PureComponent {
  state = {
    content: '',
    title: '',
    category: [],
    visible: false,
    newCategory: '',

  }

  static propTypes = {
    onSubmitNewCategory: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    blog: PropTypes.object,
    id: PropTypes.number
  }

  componentDidMount() {
    const {id} = this.props
    // console.log(id)
    if (id) {
      blog.getBlogDetail(id).then(res => {
        if (!res.errorCode) {
          const {content, title, category} = res
          const tags = category.map(e => e.id + '')
          this.setState({
            content,
            title,
            category: tags,
          })
        }
      })
    }
  }

  getFrom = () => {
    return (<FromWrapper>
      <CategorySelect category={this.state.category}
                      onChange={category => this.setState({category})}/>
      <Upload/>
      <Button htmlType='button' type='primary' onClick={this.handleSubmit}>提交</Button>
    </FromWrapper>)
  }


  getMDE = (id, content) => {
    return (id && !content) ? null : <SimpleMDE value={content}
                                              onChange={content => {
                                                this.setState({content})
                                              }}/>
  }

  handleSubmit = () => {
    const {content, category, title} = this.state
    if (!content) {
      message.error('请填写博客内容')
      return
    }
    if (!title) {
      message.error('请填写标题')
      return
    }
    if (!category) {
      message.error('请选择分类')
      return
    }
    this.props.onSubmit({content, category, title})
  }

  render() {
    const {content, title} = this.state
    const {id} = this.props
    // console.log(content)
    return (<EditWrapper>
      <CenterTitle>写博客</CenterTitle>

      <Input value={title}
             placeholder='请输入标题'
             onChange={e => this.setState({title: e.target.value})}/>

      {this.getFrom()}

      <Row gutter={24}>
        <Col span={12}><PagesWrapper><Markdown md={content}/></PagesWrapper></Col>
        <Col span={12}><PagesWrapper>{this.getMDE(id, content)}</PagesWrapper></Col>
      </Row>
    </EditWrapper>)
  }
}

export default EditComponent