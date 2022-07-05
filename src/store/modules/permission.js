import { publicRoutes, privateRoutes } from '../../router'
export default {
  namespaced: true,
  state: {
    routes: publicRoutes
  },
  mutations: {
    setRoutes(state, newRoutes) {
      state.routes = [...publicRoutes, ...newRoutes]
    }
  },
  actions: {
    filterRoutes({ commit }, menus) {
      console.log(menus)
      const routes = []
      // 过滤出用户所拥有的私有路由表
      menus.forEach((name) => {
        const data = privateRoutes.filter((item) => item.name === name)
        routes.push(...data)
      })
      // 添加 重定向 404路由
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      commit('setRoutes', routes)
      return routes
    }
  }
}
