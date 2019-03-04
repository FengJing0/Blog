import axios from 'axios'
import {message} from "antd"
const BaseHost = 'http://api.tusix.cn'
export const BaseUrl = BaseHost+'/api/v1'
export const BaseUploadImgPath = BaseHost+'/uploads'

const handleError = err => {
  // console.log(err.response)
  const msg = err.response.data.msg
  if(typeof msg === 'object'){
    Object.values(msg).forEach(item => message.error(item))
  }else if(typeof msg === 'string'){
    message.error(msg);
  }
  return {errorCode:err.response.data.errorCode}
}

export default (url='',type='',data={})=>{
  switch (type) {
    case 'post':
      return axios.post(BaseUrl+url,data).then(res=>{
        return res.data
      }).catch(err=>handleError(err))
    default:
      return axios.get(BaseUrl+url,{params:data}).then(res=>{
        return res.data
      }).catch(err=>handleError(err))
  }
}