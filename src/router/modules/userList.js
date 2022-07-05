import Layout from '../../layout'

export default {
  path: '/sys',
  component: Layout,
  name: 'sys:user:list',
  meta: {
    title: '系统管理',
    icon: 'el-icon-s-operation'
  },
  children: [
    {
      path: '/sys/users',
      component: () => import('../../views/sys-users'),
      meta: {
        title: '用户管理',
        icon: 'el-user'
      }
    }
  ]
}
