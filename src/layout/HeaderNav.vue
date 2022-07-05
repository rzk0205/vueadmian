<template>
  <div class="header">
    <h4 class="title">后台管理系统</h4>
    <div class="header-right">
      <div class="avatar">
        <el-avatar :size="35" :src="avatarUrl.avatar" />
      </div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ avatarUrl.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="home">个人中心</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const avatarUrl = computed(() => {
  return store.getters.userInfo
})
const handleCommand = (command) => {
  switch (command) {
    case 'home':
      handleToHome()
      break
    case 'logout':
      handleLogout()
      break
  }
}
const handleToHome = () => {
  router.push('/')
}

const handleLogout = async () => {
  try {
    await store.dispatch('user/logout')

    router.push('/login')
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped lang="scss">
.header {
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  padding: 0 20px;
  background-color: aquamarine;
  .title {
    text-align: center;
    display: inline-block;
    color: #fff;
  }
  .header-right {
    float: right;
    display: flex;
    justify-content: space-around;
  }
  .el-avatar {
    vertical-align: middle;
    margin: 0 10px;
  }
  .el-dropdown {
    line-height: 50px;
  }
}
</style>
