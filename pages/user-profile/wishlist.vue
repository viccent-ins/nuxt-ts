<template>
<div>
 <div>
   <h3 class="font-semibold text-lg">Wishlist</h3>
 </div>
  <div class=" ">
    <div class="flex">
      <div
          v-for="(addToWishlist , index) in addToWishlists"
          :key="index"
          style="width: 250px;"
      >
        <div class="carousel-box mr-4">
          <div
              class="border overflow-hidden rounded hover:shadow mt-1 mb-2 bg-white transition duration-100 ease-in-out">
            <div class="relative">
              <img class="w-full  h-[210px]  lazyloaded" :src="addToWishlist.image" :alt="addToWishlist.title">
            </div>
            <div class="p-3">
              <div class="text-lg">
                <span class="font-bold text-red-600">{{ addToWishlist.price }}</span>
              </div>
              <h3 class="font-medium text-truncate text-lg mb-0 h-[55px]">
                <h4>{{ addToWishlist.title }}</h4>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStores } from "~/store/store";
import useUserBuyActivity from "~/composables/useUserBuyActivity";
import useProductList from "~/composables/useProductList";
const {
  addToWishlist,
} = useUserBuyActivity();
const { addToWishlists } = storeToRefs(useStores());
const {
  Data,
} = useProductList();
</script>
<style scoped>

</style>