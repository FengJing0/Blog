import axios from 'axios'
import {message} from "antd"

const BaseHost = 'http://api.tusix.cn'
// const BaseHost = 'http://b.cn'

export const BaseUrl = BaseHost + '/api/v1'
export const BaseUploadImgPath = BaseHost + '/uploads'

const handleError = err => {
  console.log(err)
  const msg = err.msg||err.response.data.msg
  if (typeof msg === 'object') {
    Object.values(msg).forEach(item => message.error(item))
  } else if (typeof msg === 'string') {
    message.error(msg)
  }
  return {errorCode: err.errorCode||err.response.data.errorCode}
}

export default (url = '', type = '', data = {}, tokenFlag = false) => {
  let config = {}
  if (tokenFlag) {
    const token = sessionStorage.getItem('T')
    if(!token){
      return new Promise((resolve,reject)=>{
        reject({
          msg:'还未登录，请先登录',
          errorCode:40000
        })
      })
    }
    config = {headers:{token}}
  }
  switch (type) {
    case 'post':
      return axios.post(BaseUrl + url, data, config).then(res => {
        return res.data
      }).catch(err => handleError(err))
    default:
      return axios.get(BaseUrl + url, {params: data}).then(res => {
        return res.data
      }).catch(err => handleError(err))
  }
}