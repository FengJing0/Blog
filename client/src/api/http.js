import axios from 'axios'
import {message} from "antd"
const BaseUrl = 'http://b.cn/api/v1'

const http = (url='',type='',data={})=>{
  switch (type) {
    case 'post':
      return axios.post(BaseUrl+url,data)
    default:
      return axios.get(BaseUrl+url,{params:data})
  }
}

export const handleError = err => {
  // console.log(err)
  const msg = err.response.data.msg
  if(typeof msg === 'object'){
    Object.values(msg).forEach(item => message.error(item))
  }else if(typeof msg === 'string'){
    message.error(msg);
  }
  return {errorCode:err.response.data.errorCode}
}


export default http