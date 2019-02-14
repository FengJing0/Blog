import http,{handleError} from './http'

export const getHomeList = () => http('/home').catch(err=>{
  return handleError(err)
})