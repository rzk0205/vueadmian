import Layout from '../../layout'

export default {
  path: '/sys',
  component: Layout,
  name: 'sys:menu:list',
  meta: {
    title: '系统管理',
    icon: 'el-icon-s-operation'
  },
  children: [
    {
      path: '/sys/menus',
      component: () => import('../../views/sys-menus'),
      meta: {
        title: '菜单管理',
        icon: 'el-menus'
      }
    }
  ]
}
