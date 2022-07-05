import Layout from '../../layout'

export default {
  path: '/sys',
  component: Layout,
  name: 'sys:role:list',
  meta: {
    title: '系统管理',
    icon: 'el-icon-s-operation'
  },
  children: [
    {
      path: '/sys/roles',
      component: () => import('../../views/sys-roles'),
      meta: {
        title: '角色管理',
        icon: 'el-roles'
      }
    }
  ]
}
