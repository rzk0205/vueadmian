import Layout from '../../layout'

export default {
  path: '/tools',
  component: Layout,
  name: 'sys:tools',
  meta: {
    title: '系统管理',
    icon: 'el-icon-s-order'
  },
  children: [
    {
      path: '/sys/dicts',
      component: () => import('../../views/sys-tools'),
      meta: {
        title: '数字字典',
        icon: 'el-roles'
      }
    }
  ]
}
