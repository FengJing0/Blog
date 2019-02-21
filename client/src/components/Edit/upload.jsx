import React,{PureComponent} from 'react'
import {BaseUploadImgPath, BaseUrl} from "../../api/http"
import {Button, Icon, message, Upload as AntUpload} from "antd"

export default class Upload extends PureComponent{
  state={
    fileList: [],
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

  render() {
    return (
        <AntUpload {...this.uploadProps} onChange={this.handleUploadChange} fileList={this.state.fileList} className='b-mr'>
          <Button htmlType='button'>
            <Icon type="upload"/> 上传图片
          </Button>
        </AntUpload>
    )
  }
}



