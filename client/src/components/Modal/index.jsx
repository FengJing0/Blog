import React,{PureComponent} from 'react'
import PropTypes from 'prop-types';
import {Modal as antModal} from 'antd'

class Modal extends PureComponent{
  state = {
    show:false
  }

  static propTypes = {
    title:PropTypes.string.isRequired,
    form:PropTypes.object.isRequired,
    submit:PropTypes.func.isRequired,
    cancel:PropTypes.func.isRequired
  }

  render() {
    return <div/>
  }
}

export default Modal