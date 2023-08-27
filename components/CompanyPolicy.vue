<template>
  <section class=" bg-white border-top ">
    <div class="w-full lg:container  flex-col lg:flex-row lg:flex items-start  mx-auto px-4 ">
      <div class="flex items-center justify-between w-full ">
        <nuxt-link to="/faq" class="flex flex-col items-center w-full border-l-2 py-10">
          <icon name="material-symbols:help" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">Frequently Asked Questions</h4>
        </nuxt-link>
        <nuxt-link to="/return-policy" class="flex flex-col items-center w-full border-l-2 py-10">
          <icon name="ic:baseline-reply" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">return policy</h4>
        </nuxt-link>
        <nuxt-link to="/about-company" class="flex flex-col items-center w-full border-l-2 py-10">
          <icon name="ic:baseline-support" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">About Company</h4>
        </nuxt-link>
        <nuxt-link to="/privacy-policy" class="flex flex-col items-center w-full border-r-2 border-l-2 py-10">
          <icon name="majesticons:shield-exclamation" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">privacy policy</h4>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>