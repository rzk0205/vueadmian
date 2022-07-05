import { createRouter, createWebHashHistory } from 'vue-router'
import userList from './modules/userList'
import rolesList from './modules/rolesList'
import menusList from './modules/menusList'
import tools from './modules/tools'
export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    component: () => import('../layout'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home'),
        meta: {
          title: '首页',
          icon: 'el-home'
        }
      }
    ]
  }
]
export const privateRoutes = [userList, tools, rolesList, menusList]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
