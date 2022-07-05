import request from '@/utils/request'

const login = (data) => {
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'post'
  })
}
const getCaptcha = () => {
  return request({ url: '/captcha', method: 'get' })
}

const getUserInfo = () => {
  return request({ url: '/sys/userInfo', method: 'get' })
}
const getNavList = () => {
  return request({ url: '/sys/menu/nav', method: 'get' })
}
export default {
  login,
  getCaptcha,
  getUserInfo,
  getNavList
}
