<template>
  <div class="container mx-auto p-5 my-16 ">
    <div class="flex justify-center">
      <div class="shadow-lg rounded-sm w-full md:w-[600px] bg-white">
        <div class="text-center py-6">
          <h1 class="text-3xl font-semibold ">
            Login to your account
          </h1>
        </div>
        <el-form
            label-position="top"
            status-icon
            :disabled="isProcessing"
            class="p-6"
        >
          <el-form-item>
            <p class="primary">
              {{ errors.errorPhone }}
            </p>
            <el-input v-model="loginRequest.account" type="text" autocomplete="off" size="large" placeholder="Phone"/>
          </el-form-item>
          <el-form-item prop="password">
            <p class="primary">
              {{ errors.errorPassword }}
            </p>
            <el-input size="large" v-model="loginRequest.password" type="password" autocomplete="off"
                      @keyup.enter="login" placeholder="Password"/>
          </el-form-item>
          <div class=" flex justify-between py-3">
            <el-checkbox v-model="checked" label="Remember Me" size="large"/>
            <a href="/reset" class="text-gray-500"> Forget password?</a>
          </div>
          <el-button size="large" type='primary' class="w-full" @click="login" :loading="isProcessing"
          >Login
          </el-button
          >
        </el-form>
        <div class="text-center my-6">
          <p class="text-gray-500 mb-0">Dont have an account?</p>
          <NuxtLink class="primary" to="/register">Register Now</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useLogin from "~/composables/useLogin";
import { useStores } from "~/store/store";
import { storeToRefs } from "pinia";

const checked = ref(false);
const stores = useStores();
const {isAuth} = storeToRefs(stores);
const {
  login,
  loginRequest,
  isProcessing,
  errors,
} = useLogin();
const authMiddle = () => {
  if (isAuth.value) {
    navigateTo('/');
  }
}
onMounted(() => authMiddle());

</script>

<style scoped>

</style>