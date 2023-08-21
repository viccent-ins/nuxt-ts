<template>
  <div class="container mx-auto p-5 my-auto">
    <div class="flex justify-center">
      <div class="shadow-lg rounded-sm w-full md:w-[500px] bg-white my-6">
        <div class="text-center py-6">
          <h1 class="text-3xl font-semibold " >
            Create an account
          </h1>
        </div>
        <el-form
            ref="ruleFormRef"
            :model="registerRequest"
            label-position="top"
            :rules="registerRule"
            status-icon
            :disabled="isProcessing"
            class="p-6"
        >

          <el-form-item  prop="phone">
            <el-input size="large" placeholder="Phone" v-model="registerRequest.mobile" type="tel" autocomplete="off" />
          </el-form-item>
          <el-form-item  prop="password">
            <el-input size="large" placeholder="Password" v-model="registerRequest.password" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item  prop="code">
            <el-input size="large" placeholder="Code" v-model="registerRequest.code" type="text" autocomplete="off" />
          </el-form-item>
            <el-checkbox v-model="checked" label="By Signing up you agree to our terms and conditions" size="large" />

          <el-form-item >
            <el-button class="w-full" size="large" type="primary" @click="onRegister(ruleFormRef)" :loading="isProcessing"
            >Submit</el-button
            >
          </el-form-item>
        </el-form>
        <div class="text-center mt-4 mb-6">
          <p class="text-muted mb-0">Already have an account?</p>
          <a class="primary" href="/login">Log In</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const checked = ref(false)
const {
  registerRule,
  onRegister,
  ruleFormRef,
  registerRequest,
  isProcessing,
} = useRegister();
</script>

<style scoped>

</style>
