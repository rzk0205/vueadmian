<template>
  <el-menu
    active-text-color="#fff"
    background-color="#304156"
    default-active=""
    text-color="#bfcbd9"
    unique-opened
    router
  >
    <SidebarMenuItem
      v-for="item in menuList"
      :key="item"
      :menuList="item"
    ></SidebarMenuItem>
  </el-menu>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { filterMenuData } from '../../utils/menu'
import SidebarMenuItem from './SidebarMenuItem'
import { filterRouters, generateMenus } from '../../utils/router'
const router = useRouter()

const menuList = computed(() => {
  const routes = filterRouters(router.getRoutes())
  return filterMenuData(generateMenus(routes))
})
</script>

<style scoped lang="scss">
.el-menu {
  border-right: none;
}
</style>
