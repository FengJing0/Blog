import http from './http'
import {message} from "antd"

export const registerApi = user => http('/register','post',user).catch(err=>{
  const msg = err.response.data.msg
  if(typeof msg === 'object'){
    Object.values(msg).forEach(item => message.error(item))
  }else if(typeof msg === 'string'){
    message.error(msg);
  }
})

export const loginApi = user => http('/login','post',user).catch(err=>{
  const msg = err.response.data.msg
  if(typeof msg === 'object'){
    Object.values(msg).forEach(item => message.error(item))
  }else if(typeof msg === 'string'){
    message.error(msg);
  }
})