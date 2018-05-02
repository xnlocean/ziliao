import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  TIMEOUT: 5000 // 请求超时时间
})

service.interceptors.request.use(config => {
  config
})

service.interceptors.response.use(response => {
  response
})

export default service
