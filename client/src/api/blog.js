import http from './http'

export const getCategoryApi = () => http('/category/all')

export const addCategoryApi = category => http('/category/add','post',category,true)

export const getBlogApi = () => http('/blog/all')

export const addBlogApi = ({content,category,title}) => http('/blog/add','post',{content,category,title},true)

export const updateBlogApi = ({content,category,title,id}) => http('/blog/update/'+id,'post',{content,category,title},true)

export const getBlogDetail = id => http('/blog/'+id)