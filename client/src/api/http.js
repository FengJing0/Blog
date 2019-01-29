import axios from 'axios'
const BaseUrl = 'http://b.cn/api/v1'

const http = (url='',type='',data={})=>{
  switch (type) {
    case 'post':
      return axios.post(BaseUrl+url,data)
    default:
      return axios.get(BaseUrl+url,{params:data})
  }
}


export default http