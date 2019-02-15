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

export const addBlogApi = ({content,category,title}) => http('/blog/add','post',{content,category,title}).catch(err=>{
  return handleError(err)
})

export const updateBlogApi = ({content,category,title,id}) => http('/blog/update/'+id,'post',{content,category,title}).catch(err=>{
  return handleError(err)
})

export const getBlogDetail = id => http('/blog/'+id).catch(err=>{
  return handleError(err)
})