<template>
  <section class=" bg-white border-top ">
    <div class="w-full lg:container  flex-col lg:flex-row lg:flex items-start  mx-auto px-4 ">
      <div class="flex items-center justify-between w-full ">
        <nuxt-link to="/faq" class="flex flex-col items-center w-full border-l-2 py-10">
          <icon name="material-symbols:help" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold mt-3">{{ $t('frequently_asked_question') }}</h4>
        </nuxt-link>
        <nuxt-link to="/user-agreement" class="flex flex-col items-center w-full border-l-2 py-10">
          <icon name="icon-park-solid:agreement" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold mt-3">{{ $t('user_agreement') }}</h4>
        </nuxt-link>
        <nuxt-link to="/about-company" class="flex flex-col items-center w-full border-l-2 py-10">
          <icon name="ic:baseline-support" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold mt-3">{{ $t('about_company') }}</h4>
        </nuxt-link>
        <nuxt-link to="/privacy-policy" class="flex flex-col items-center w-full border-r-2 border-l-2 py-10">
          <icon name="majesticons:shield-exclamation" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold mt-3">{{ $t('privacy_policy') }}</h4>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>