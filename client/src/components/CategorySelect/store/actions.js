import {GET_CATEGORY_LIST,GET_CATEGORY_LIST_SYNC,ADD_CATEGORY,ADD_CATEGORY_SYNC} from "./actions-type"

export const getCategoryList = categoryList => ({type:GET_CATEGORY_LIST,data:categoryList})
export const getCategoryListSync = categoryList => ({type:GET_CATEGORY_LIST_SYNC,data:categoryList})

export const addCategory= category => ({type:ADD_CATEGORY,data:category})
export const addCategorySync = category => ({type:ADD_CATEGORY_SYNC,data:category})

