<template>
  <div>
    <div class="w-full lg:container mt-5 mx-auto flex items-center justify-between px-4 py-3">
        <nuxt-link class="flex justify-center hover:bg-red-300 items-center w-10 h-10 rounded-full bg-gray-200" to="/category"><icon class="" name="material-symbols:arrow-back-ios" size="20"></icon></nuxt-link>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item class="text-lg" to="/">Home</el-breadcrumb-item>
          <el-breadcrumb-item
          ><a class="text-lg"  href="/category">All Categories</a></el-breadcrumb-item
          >
          <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb>
     </div>
    <div class="bg-white rounded shadow-sm w-full lg:container  flex-col lg:flex-row lg:flex items-start  my-5 mx-auto py-6">
      <div class=" w-full p-4">
        <div class="flex-wrap flex " v-if="categoryChildrens.length>0" >
          <div  v-for="(categoryChildren, index) in categoryChildrens" :key="index" style="width: 290px;" v-loading="isLoading">
            <div>
              <div class="carousel-box mr-4">
                <div class="border overflow-hidden rounded hover:shadow mt-1 mb-2 bg-white transition duration-100 ease-in-out">
                  <div class="relative">
                    <nuxt-link :to="`/product/detail?id=${categoryChildren.id + '&cat_ids=' + categoryChildren.category_ids}`"  >
                      <img loading="lazy" class="w-full  h-[210px] " :src="categoryChildren.image" :alt="categoryChildren.title">
                    </nuxt-link>
                    <UserBuyActivity :Product="categoryChildren" />
                  </div>
                  <div class="p-3">
                    <div class="text-lg">
                      <span class="font-bold text-red-600">${{ categoryChildren.price }}</span>
                    </div>
                    <nuxt-link
                        :to="`/product/detail?id=${categoryChildren.id + '&cat_ids=' + categoryChildren.category_ids}`"
                        class="block">
                      <h3 class="font-medium text-truncate text-lg mb-0 h-[55px]">{{ categoryChildren.title }}</h3>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="flex flex-col items-center">
            <img src="/images/empty_goods.png" alt="Empty goods">
            <p class="text-md font-semibold">This product is not currently available, there are more good products waiting for you~</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import UserBuyActivity from "~/components/UserBuyActivity.vue";
import useCategoryDetails from "~/composables/useCategoryDetails";
const {
  categoryChildrens,
  isLoading
} = useCategoryDetails();

</script>