import React, {PureComponent} from 'react'
import PropTypes from 'prop-types';

import {EditWrapper, FromWrapper} from "./style"

import {CenterTitle, PagesWrapper} from "../../style/common_style"

import {Button, Col, Input, Modal, Row, Select, message, Upload, Icon} from "antd"

import Markdown from "../Markdown"
import SimpleMDE from "../SimpleMDE"

import {BaseUrl,BaseUploadImgPath} from "../../api/http"
import {blog} from "../../api"


const Option = Select.Option

class EditComponent extends PureComponent {
  state = {
    content: '',
    title:'',
    category: [],
    visible: false,
    newCategory: '',
    fileList: [],
  }

  static propTypes = {
    categoryList:PropTypes.array.isRequired,
    onSubmitNewCategory:PropTypes.func.isRequired,
    onSubmit:PropTypes.func.isRequired,
    blog:PropTypes.object,
    id:PropTypes.number
  }

  componentDidMount() {
    const {id} = this.props
    // console.log(id)
    if(id){
      blog.getBlogDetail(id).then(res=>{
        if(!res.errorCode){
          const {content,title,category} = res.data
          const tags = category.map(e=>e.id+'')
          this.setState({
            content,
            title,
            category:tags,
          })
        }
      })
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

  uploadProps = {
    name: 'img',
    action: BaseUrl + '/upload',
    headers: {
      authorization: 'authorization-text',
    },

  }

  handleUploadChange = info => {
    let fileList = info.fileList
    fileList = fileList.map((file) => {
      if (file.response) {
        file.name = `${BaseUploadImgPath}/${file.response}`.replace(/\\/,'/')
      }
      return file
    })
    this.setState({fileList})
    // if (info.file.status !== 'uploading') {
    //   console.log(info.file, info.fileList)
    // }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 上传成功`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 上传失败`)
    }
  }

  getUpload = () => (
      <Upload {...this.uploadProps} onChange={this.handleUploadChange} fileList={this.state.fileList} className='b-mr'>
        <Button>
          <Icon type="upload"/> 上传图片
        </Button>
      </Upload>
  )

  getFrom = () => {
    return (<FromWrapper>
      <Select
          value={this.state.category}
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
      {this.getUpload()}
      <Button htmlType='button' type='primary' onClick={this.handleSubmit}>提交</Button>
    </FromWrapper>)
  }


  getMDE = (id,content) => {
    if(id&&!content){
      return
    }
    return <SimpleMDE value={content}
                      onChange={content => {this.setState({content})}}/>
  }

  handleSubmit = () => {
    const {content, category,title} = this.state
    if (!content) {
      message.error('请填写博客')
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

  handleOk = () => {
    const {newCategory} = this.state
    const {categoryList, onSubmitNewCategory} = this.props

    if (!categoryList.find(item => item.name.toLowerCase() === newCategory.toLowerCase())) {
      onSubmitNewCategory(this.state.newCategory)
      this.setState({
        visible: false,
        newCategory: ''
      })
    } else {
      message.error('该分类已存在')
    }

  }


  render() {
    const {content,title} = this.state
    const {id} = this.props
    // console.log(content)
    return (<EditWrapper>
      <CenterTitle>写博客</CenterTitle>
      <Input value={title} placeholder='请输入标题'
             onChange={e => this.setState({title: e.target.value})}/>
      {this.getFrom()}
      {this.getModel()}
      <Row gutter={24}>
        <Col span={12}><PagesWrapper>
          <Markdown md={content} />
        </PagesWrapper></Col>
        <Col span={12}><PagesWrapper>
          {this.getMDE(id,content)}
        </PagesWrapper></Col>
      </Row>
    </EditWrapper>)
  }
}

export default EditComponent