<template>
  <div class="container mx-auto p-5 my-16 ">
    <div class="flex justify-center">
      <div class="shadow-lg rounded-sm w-full md:w-[500px] bg-white">
        <div class="text-center py-6">
          <h1 class="text-3xl font-semibold " >
            Login to your account
          </h1>
        </div>
        <el-form
            ref="ruleFormRef"
            label-position="top"
            status-icon
            :disabled="isProcessing"
            class="p-6"
        >
          <el-form-item prop="Phone" >
            <el-input v-model="loginRequest.account" type="text" autocomplete="off" size="large" placeholder="Phone"/>
          </el-form-item>
          <el-form-item prop="password">
            <el-input size="large" v-model="loginRequest.password" type="password" autocomplete="off" @keyup.enter="onLogin(ruleFormRef)" placeholder="Password"/>
          </el-form-item>
          <div class=" flex justify-between py-3">
            <el-checkbox v-model="checked" label="Remember Me" size="large" />
            <a href="/reset" class="text-gray-500"> Forget password?</a>
          </div>
          <el-button size="large" type='primary' class="w-full" @click="login" :loading="isProcessing"
          >Login</el-button
          >
        </el-form>
        <div class="text-center mt-10 mb-6">
          <p class="text-gray-500 mb-0">Dont have an account?</p>
          <a class="primary" href="/register">Register Now</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {
  login,
  loginRequest,
  isProcessing,
} = useLogin();
</script>

<style scoped>

</style>