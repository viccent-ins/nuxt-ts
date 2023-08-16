<template>
  <!-- Home banner start Here -->
  <div class=" w-full lg:w-2/3 ml-0 lg:ml-3">
    <div class="aiz-carousel">
      <el-carousel :interval="5000" arrow="always"  class="h-[400px]">
        <el-carousel-item v-for="(banner ,index) in banners" :key="index" class="carouselHight">
          <img :src=banner.image alt="" class="w-full h-full">
        </el-carousel-item>
      </el-carousel>
    <ul class="list-unstyled flex flex-wrap w-full items-center justify-between ">
      <li class=" mt-15  lg:mt-7" v-for="category  in categories " :key="category.name">
        <a href="https://wal-marting.com/category/----txlnh"
           class="flex flex-col items-center rounded bg-white p-2 w-32  shadow text-center">
          <img :src=category.image width="80" :alt="category.name" height="40">

          <div class="text-truncate text-md font-semibold mt-2 opacity-70">{{ category.name }}</div>
        </a>
      </li>

    </ul>
    </div>
  </div>
  <!-- Home banner End Here -->
</template>
<script setup>
import useBanner from "~/composables/useBanner";
import useCategory from "~/composables/useCategory";
const {
  categories,
} = useCategory();
const {
  banners,
} = useBanner();

</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}
.carouselHight {
  height: 400px;
  border-radius: 8px;
}

</style>