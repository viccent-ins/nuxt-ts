<template>
  <div class="container mx-auto p-5 my-auto">
    <div class="flex justify-center">
      <div class="shadow-lg rounded-sm w-full md:w-[500px] bg-white my-6">
        <div class="text-center py-6">
          <h1 class="text-3xl font-semibold ">
            Create an account
          </h1>
        </div>
        <form  class="p-6" >
          <input class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm" placeholder="Phone" v-model.number="registerRequest.mobile" type="tel" required >
          <input class="my-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm" type="password" placeholder="Password" v-model="registerRequest.password" required>
          <input class="mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm" type="text"  placeholder="Code" v-model="registerRequest.code">
          <div class="flex gap-3 mb-5">
            <input v-model="checked" type="checkbox" id="checkConditions" >
            <label for="checkConditions">I have read and complied with</label>
            <nuxt-link class="primary hover:underline"  to="/terms">"User Agreement" and "Privacy Agreement"</nuxt-link>
          </div>
          <button class="w-full btn bg-primary rounded-md py-2 text-white text-lg" @click="register" :loading="isProcessing">Create Account</button>
        </form>
        <div class="text-center mt-4 mb-6">
          <p class="text-muted mb-0">Already have an account?</p>
          <NuxtLink to="/login" class="primary">Log In</NuxtLink>
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
  registerRequest,
  isProcessing,
    register,

} = useRegister();
const authMiddle = () => {
  if (isAuth.value) {
    navigateTo('/');

  }
}
onMounted(() => authMiddle());

</script>

