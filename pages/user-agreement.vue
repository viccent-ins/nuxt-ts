<template>
  <div >
    <section class="pt-4 mb-4">
      <div class="w-full lg:container  flex-col lg:flex-row lg:flex items-start  mt-5 mx-auto px-4 py-6">
        <div class="flex justify-between w-full">
          <div>
            <h3 class="text-lg font-bold">User Agreement</h3>
          </div>
          <div>
            <ul class="flex items-center">
              <li>
                <nuxt-link to="/" class="font-semibold">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/user-agreement" class=" font-bold primary">/ "User Agreement"</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-44">
      <div class="w-full lg:container  flex-col lg:flex-row lg:flex items-start  mt-5 mx-auto px-4 py-6">
        <div class="p-4 bg-white rounded shadow overflow-hidden">
          <div class=" mt-4 p-4 ">
            <h3 class="text-xl font-bold mb-4 ">{{ userAgreement.title }}</h3>
            <p v-html="userAgreement.content"></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup >
import useUserAgreement from "~/composables/useUserAgreement"
const {
  userAgreement,
} = useUserAgreement();
</script>