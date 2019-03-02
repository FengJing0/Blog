import {GET_USER_INFO_SYNC,GET_USER_INFO} from "./actions-type"

export const getUserInfo = userInfo => ({type:GET_USER_INFO,data:userInfo})

export const getUserInfoSync = user => ({type:GET_USER_INFO_SYNC,data:user})
