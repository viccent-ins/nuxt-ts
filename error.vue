<template>
  <div class="flex flex-col items-center ">
    <div class="w-1/2">
      <img v-bind="NotFoundImage" class=" mx-auto mb-5"
           height="300">
    </div>

    <div class="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
      Page Not Found!
    </div>

    <div class="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
      The page you are looking for has not been found on our server.
    </div>
  </div>
</template>
<script setup>
const NotFoundImage = {
  src:"/images/404.svg",
  alt:"Page not found"
}
</script>