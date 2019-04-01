import http from './http'

export const registerApi = user => http('/register','post',user)

export const loginApi = user => http('/login','post',user)

export const verifyApi = token => http('/verify','post',{token})