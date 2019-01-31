import http,{handleError} from './http'

export const getCategoryApi = () => http('/category/all').catch(err=>{
  return handleError(err)
})

export const addCategoryApi = type => http('/category/add','post',type).catch(err=>{
  return handleError(err)
})

export const getBlogApi = () => http('/blog/all').catch(err=>{
  return handleError(err)
})

export const addBlogApi = type => http('/blog/add','post',type).catch(err=>{
  return handleError(err)
})