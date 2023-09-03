<template>
  <div class="container mx-auto p-5 my-16 ">
    <div class="flex justify-center">
      <div class="shadow-lg rounded-sm w-full md:w-[600px] bg-white">
        <div class="text-center py-6">
          <h1 class="text-3xl font-semibold " >
            Login to your account
          </h1>
        </div>
        <form  class="p-6" >
          <input class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm" placeholder="Phone" autocomplete="off"  v-model="loginRequest.account" type="tel" required >
          <input class="my-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm" placeholder="Password" v-model="loginRequest.password" type="password" autocomplete="off" @keyup.enter="login" required>
          <div class="flex justify-between mb-3">
              <div class="flex items-center gap-3">
                <input v-model="checked" type="checkbox" id="checkConditions" >
                <label class="font-semibold" for="checkConditions">Remember Me</label>
              </div>
            <nuxt-link class="primary "  to="/reset">Forget password?</nuxt-link>
          </div>
          <button class="w-full btn bg-primary rounded-md py-2 text-white text-lg" @click="login" :loading="isProcessing">Login</button>
        </form>
        <div class="text-center my-6">
          <p class="text-gray-500 mb-0">Dont have an account?</p>
          <NuxtLink class="primary" to="/register">Register Now</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStores } from "~/store/store";
import { storeToRefs } from "pinia";
const checked = ref(false);
const stores = useStores();
const { isAuth } = storeToRefs(stores);
const {
  login,
  loginRequest,
  isProcessing,
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