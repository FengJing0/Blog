import http,{handleError} from './http'

export const registerApi = user => http('/register','post',user).catch(err=>{
  return handleError(err)
})

export const loginApi = user => http('/login','post',user).catch(err=>{
  return handleError(err)
})