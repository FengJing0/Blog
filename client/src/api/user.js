import http from './http'
import {message} from "antd"

export const registerApi = user => http('/register','post',user).catch(err=>{
  message.error(err.response.data.msg);
})

export const loginApi = user => http('/login','post',user).catch(err=>{
  message.error(err.response.data.msg);
})