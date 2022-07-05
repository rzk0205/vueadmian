<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginRef"
      :model="loginForm"
      :rules="loginRules"
      label-width="120px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input class="login-input" v-model="loginForm.code" />
        <span>
          <img :src="url" alt="" @click="getImg" />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLoginSubmit">提交</el-button>
        <el-button>获取密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const loginForm = reactive({
  username: 'test',
  password: '1234567',
  code: '',
  token: ''
})
// const token = ref(null)
const url = computed(() => {
  return store.getters.captchaImg
})
const loginRules = reactive({
  username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
  code: [{ required: true, message: '验证码不能为空', trigger: 'blur' }]
})
const loginRef = ref(null)
const handleLoginSubmit = async () => {
  if (!loginRef.value) return
  await loginRef.value.validate(async (vaild) => {
    if (vaild) {
      const val = await store.dispatch('user/login', loginForm)
      console.log(val)
      if (val.data.code === 200) {
        // const res = await store.dispatch('user/getUserInfo')
        // console.log(res)
        router.push('/')
      }
    }
  })
}
const getCapt = async () => {
  const res = await store.dispatch('user/getCapt')
  console.log(res)
  loginForm.token = res.data.data.token
  // token.value = res.data.token
}
getCapt()
const getImg = () => {
  getCapt()
}
</script>

<style scoped lang="scss">
.login-container {
  height: 100%;
  background-color: #fafafa;
  .login-form {
    width: 420px;
    margin: 200px auto;
    .el-input {
      height: 40px;
    }
    .login-input {
      width: 150px;
      margin-right: 15px;
    }
  }
}
</style>
