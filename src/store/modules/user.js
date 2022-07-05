import Apiuser from '../../api/user'
import { setItem, getItem, removeItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    captchaImg: '',
    userInfo: {}
  },
  mutations: {
    setCaptcha(state, res) {
      const { captchaImg } = res.data.data
      // state.token = token
      state.captchaImg = captchaImg
      // console.log(state.captchaImg)
      // setItem('token', state.token)
    },
    setToken(state, token) {
      state.token = token
      setItem('token', state.token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async getCapt({ commit }) {
      try {
        const res = await Apiuser.getCaptcha()
        commit('setCaptcha', res)
        return res
      } catch (error) {}
    },
    async login({ commit }, payload) {
      const res = await Apiuser.login(payload)
      commit('setToken', res.headers.authorization)
      return res
    },
    async getUserInfo({ commit }) {
      const res = await Apiuser.getUserInfo()
      console.log(res)
      commit('setUserInfo', res.data.data)
      return res
    },
    async getNav({ commit }) {
      const res = await Apiuser.getNavList()
      console.log(res)
      // commit('setUserInfo', res.data.data)
      return res.data
    },
    logout({ commit }) {
      commit('setToken', '')
      commit('setUserInfo', {})
      removeItem('token')
      removeItem('userInfo')
    }
  }
}
