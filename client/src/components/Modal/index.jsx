import React,{PureComponent,Fragment} from 'react'
import PropTypes from 'prop-types';
import {Button, Input, Modal as AntModal} from 'antd'

class Modal extends PureComponent{
  state = {
    visible:false
  }

  static propTypes = {
    title:PropTypes.string.isRequired,
    formList:PropTypes.array.isRequired,
    submit:PropTypes.func.isRequired,
    cancel:PropTypes.func.isRequired
  }

  handleShowModel = () => {
    this.setState({visible: true})
  }

  handleClose = () => {

  }

  handleSubmit = () => {
    this.setState({visible: false})
    this.props.submit()
  }

  getModel = () => {
    const {visible}  = this.state
    const {title,formList}  = this.props
    return (<AntModal
        title={title}
        visible={visible}
        onOk={this.handleSubmit}
        onCancel={() => {this.setState({visible: false})}}
        afterClose={this.handleClose}
        okText="确认"
        cancelText="取消">
      {
        formList.map(item => <Input key={item.label}
                                    placeholder={item.placeholder}
                                    value={item.value}
                                    onChange={e => {item.change(e.value)}}/>)
      }

    </AntModal>)
  }

  render() {
    return <Fragment>
      {this.getModel()}
      <Button htmlType='button' onClick={this.handleShowModel}>{this.props.children}</Button>
    </Fragment>
  }
}

export default Modal