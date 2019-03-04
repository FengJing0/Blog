import http from './http'

export const getCollectionsApi = () => http('/collections/all')

export const addCollectionsApi = data => http('/collections/add','post',data)