import http from './http'

export const getDemosApi = () => http('/demo/all')

export const addDemoApi = data => http('/demo/add','post',data)