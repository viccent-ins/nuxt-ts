<template>
  <div >
    <section class="pt-4 mb-4">
      <div class="w-full lg:container  flex-col lg:flex-row lg:flex items-start  mt-5 mx-auto px-4 py-6">
        <div class="flex justify-between w-full">
          <div>
            <h3 class="text-lg font-bold">About Company</h3>
          </div>
          <div>
            <ul class="flex items-center">
              <li>
                <nuxt-link to="/" class="font-semibold">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about-company" class=" font-bold primary">/ "About Company"</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-44">
      <div class="w-full lg:container  flex-col lg:flex-row lg:flex items-start  mt-5 mx-auto px-4 py-6">
        <div class="p-4 bg-white rounded shadow overflow-hidden">
          <div class=" mt-4 p-4 " v-loading="isLoading">
              <h3 class="text-xl font-bold mb-4 ">{{ AboutUs.title }}</h3>
              <p v-html="AboutUs.content"></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup >
import useAboutCompany from "~/composables/useAboutCompany";
const {
  AboutUs,
    isLoading
} = useAboutCompany();
</script>