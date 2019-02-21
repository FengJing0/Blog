import React, {PureComponent, Fragment} from 'react'
import PropTypes from 'prop-types'
import {Button, Input, Form, Modal as AntModal, Select} from 'antd'

const Item = Form.Item
const Option = Select.Option

class Modal extends PureComponent {
  state = {
    visible: false
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    formList: PropTypes.array.isRequired,
    submit: PropTypes.func.isRequired,
    cancel: PropTypes.func,
    close: PropTypes.func,
    type: PropTypes.string
  }

  handleClose = () => {
    const {close,form} = this.props
    close && close()
    form.resetFields()
  }

  handleCancel = () => {
    this.setState({visible: false})
    const {cancel} = this.props
    cancel && cancel()
  }

  handleSubmit = () => {
    this.setState({visible: false})
    this.props.submit(this.props.form.getFieldsValue())
  }

  defaultFormItem = (item) => {
    if(item.type==='select'){
      return (<Select
          style={{width: 400}}
          placeholder={item.placeholder}>
        {
          item.list.map(item => (<Option key={item.id}>{item.name}</Option>))
        }
      </Select>)
    }
    return <Input placeholder={item.placeholder} style={{width:400}}/>
  }

  getModel = () => {
    const {visible} = this.state
    const {title, children, form,formList} = this.props
    const {getFieldDecorator} = form

    return (<AntModal
        title={title}
        visible={visible}
        onOk={this.handleSubmit}
        onCancel={this.handleCancel}
        afterClose={this.handleClose}
        okText="确认"
        cancelText="取消">
      <Form>
        {
          formList.map(item => (<Item key={item.key} label={item.label} required labelCol={{span:3}}>
            {
              getFieldDecorator(item.key)(item.component ? item.component() : this.defaultFormItem(item))
            }
          </Item>))
        }
      </Form>
      {children}
    </AntModal>)
  }

  render() {
    const {formList, title, type} = this.props
    return <Fragment>
      {this.getModel()}
      <Button htmlType='button'
              disabled={!formList || !formList.length}
              onClick={() => {
                this.setState({visible: true})
              }}
              className='b-mr b-ml'
              type={type || 'default'}>
        {title}
      </Button>
    </Fragment>
  }
}

export default Form.create({name: 'form_modal'})(Modal)