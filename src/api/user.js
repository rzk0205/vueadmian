import request from '@/utils/request'

const login = (data) => {
  return request({ url: '/login', method: 'post', data })
}
const getCaptcha = () => {
  return request({ url: '/captcha', method: 'get' })
}

export default {
  login,
  getCaptcha
}
