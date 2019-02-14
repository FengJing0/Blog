import http,{handleError} from './http'

export const getCollectionsApi = () => http('/collections/all').catch(err=>{
  return handleError(err)
})