import http from './http'

export const getCollectionsApi = () => http('/collections/all')