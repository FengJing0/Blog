import {GET_USER_INFO_SYNC,GET_USER_INFO,VERIFY_TOKEN,VERIFY_TOKEN_SYNC} from "./actions-type"

export const getUserInfo = userInfo => ({type:GET_USER_INFO,data:userInfo})

export const getUserInfoSync = user => ({type:GET_USER_INFO_SYNC,data:user})

export const verifyToken = userInfo => ({type:VERIFY_TOKEN,data:userInfo})

export const verifyTokenSync = token => ({type:VERIFY_TOKEN_SYNC,data:token})
