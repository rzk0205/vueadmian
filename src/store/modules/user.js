import Api from '../../api/user'
import { setItem, getItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    captchaImg: ''
  },
  mutations: {
    setCaptcha(state, res) {
      const { token, captchaImg } = res
      state.token = token
      state.captchaImg = captchaImg
      setItem('token', state.token)
    }
  },
  actions: {
    async getCapt({ commit }) {
      try {
        const res = await Api.getCaptcha()
        commit('setCaptcha', res)
        return res
      } catch (error) {}
    }
  }
}
