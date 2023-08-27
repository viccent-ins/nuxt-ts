<template>
<div>
 <div>
   <h3 class="font-semibold text-lg">Wishlist</h3>
 </div>
  <div class="mt-3 ">
    <div class="flex">
      <div
          v-for="(wishList , index) in addToWishlists"
          :key="index"
          style="width: 250px;"
      >
        <div class="carousel-box mr-4">
          <div
              class="border overflow-hidden rounded hover:shadow mt-1 mb-2 bg-white transition duration-100 ease-in-out">
            <div class="relative">
              <img class="w-full  h-[210px]  lazyloaded" :src="wishList.image" :alt="wishList.title">
            </div>
            <div class="p-3">
              <div class="text-lg">
                <span class="font-bold text-red-600">{{ wishList.price }}</span>
              </div>
              <h3 class="font-medium text-truncate text-lg mb-0 h-[55px]">
                {{ wishList.title }}
              </h3>
            </div>
            <hr>
            <div class="flex justify-between items-center p-3">
              <el-icon  size="30" class="cursor-pointer" @click="removeWishList(wishList.id)">
                <Delete/>
              </el-icon>
              <el-button type="primary" :icon="Handbag" size="large" @click="addToCart(wishList)">Add to cart</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useStores } from "~/store/store";
import useUserBuyActivity from "~/composables/useUserBuyActivity";
import { Delete, Handbag } from "@element-plus/icons-vue";
const {
  addToCart,
  removeWishList,
} = useUserBuyActivity();
const { addToWishlists } = storeToRefs(useStores());

</script>
<style scoped>

</style>