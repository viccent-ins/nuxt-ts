<template>
<div>
  <section class="mb-4" id="cart-summary">
    <div class="w-full lg:container mx-auto px-4">
      <div class="flex justify-between w-full py-6">
        <div>
          <h3 class="text-2xl font-bold">Compare</h3>
        </div>
        <div>
          <ul class="flex items-center">
            <li>
              <nuxt-link to="/" class="font-semibold">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/compare" class=" font-bold primary">/ "Compare"</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="  bg-white rounded-sm shadow p-4">
        <div class="flex items-center py-6 justify-between w-full border-b-[1px] ">
          <div class="order-1 ">
            <p class=" font-semibold">Comparison</p>
          </div>
          <div class="order-2 block ">
            <el-button type="primary" class="" size="large" @click="resetCompare">Reset compare list</el-button>
          </div>
        </div>
        <div class=" my-4">
          <div class="flex border">
            <div class="flex flex-col justify-between border-r ">
              <div class="border-b py-3 h-20">
                <h5 class="text-lg font-semibold px-2">Name</h5>
              </div>
              <div class=" w-60 h-96 py-3">
                <h5 class="text-lg font-semibold px-2">Image</h5>
              </div>
              <div class="border-t h-10">
                <h5 class="text-lg font-semibold px-2">Price</h5>
              </div>
              <div class="border-t h-16">
                <h5 class="text-lg font-semibold px-2"></h5>
              </div>
            </div>
            <div class="flex flex-col justify-between border w-full" v-for="(compareProduct , index) in compareProducts" :key="index" >
              <div class="border-b h-20">
                <h5 class="py-3 text-md font-semibold px-2">{{ compareProduct.title }}</h5>
              </div>
              <div class="w-full py-3 flex items-center">
                <img class="w-96 h-96  mx-auto  " :src="compareProduct.image" alt="compareProduct.title">
              </div>
              <div class="border-t py-3">
                <h5 class="text-lg font-semibold primary px-2">{{ compareProduct.price }}$</h5>
              </div>
              <div class="border-t py-3 text-center" >
                <el-button type="primary" :icon="Handbag" size="large"  @click="addToCart(prop.Product)">Add to cart</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
<script setup>
import {
  Handbag
} from '@element-plus/icons-vue'
import { storeToRefs } from "pinia";
import { useStores } from "~/store/store";
import useUserBuyActivity from "~/composables/useUserBuyActivity";
const {
  addToCart
} = useUserBuyActivity();
const { compareProducts } = storeToRefs(useStores());
const prop = defineProps({
  Product: {
    type: Object,
    required: true
  }
});
</script>