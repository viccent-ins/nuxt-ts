<template>
<div>
<CheckoutProcess/>
  <section class="mb-4" id="cart-summary">
    <div class="w-full lg:container mx-auto px-4 py-6">
          <div class="shadow bg-white p-3 p-lg-4 rounded ">
            <div class="mb-4 ">
              <div class="flex border-b justify-between items-center mb-3 py-5">
                <div class="w-1/2 font-bold">Product</div>
                <div class="w-1/2 flex justify-between items-center">
                  <div class="font-bold">Price</div>
                  <div class="font-bold">Tax</div>
                  <div class="font-bold">Quantity</div>
                  <div class="font-bold">Total</div>
                  <div class="font-bold">Remove</div>
                </div>
              </div>
              <div class="flex border-b justify-between items-center mb-3 py-5" v-for="(addToCart , index) in addToCarts" :key="index">
                <div class="flex items-center w-1/2" >
                  <span class="mr-2 ml-0">
                    <img :src="addToCart.image" class="w-60 rounded" alt="addToCart.title">
                  </span>
                  <span class="text-base font-semibold  opacity-60">{{ addToCart.title }}</span>
                </div>
                <div class="w-1/2 flex justify-between items-center">
                  <div class="font-semibold">{{ addToCart.price }}</div>
                  <div class="font-semibold">$0.00</div>
                  <div class="flex items-center gap-2">
                    <el-button type="primary" :icon="Minus" circle @click="decreaseCartQty(addToCart.id)" />
                    <el-input style="width: 100px" type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');" v-model.number="addToCart.quantity"> </el-input>
                    <el-button type="primary" :icon="Plus" circle @click="increaseCartQty(addToCart.id)"/>
                  </div>
                  <div class="text-md font-semibold primary">{{addToCart.total= addToCart.price * addToCart.quantity }}</div>
                  <el-button :icon="Delete"  circle @click="removeCart(addToCart.id)"></el-button>
                </div>
               </div>
            </div>

            <div class="px-10 py-4 mb-4 flex justify-between">
              <span class="font-bold text-sm block ">{{$t('sub_total')}}</span>
              <span class="font-bold text-sm"></span>
            </div>
            <div class="flex items-center py-6 justify-between ">
              <div class="order-1 ">
                <nuxt-link to="/" class="btn primary font-bold hover:underline">
                  <icon name="material-symbols:arrow-back-rounded"></icon>
                  Return to shop
                </nuxt-link>
              </div>
              <nuxt-link to="#" class="order-2 block ">
                <button class="btn bg-primary font-bold px-3 py-2 text-white rounded-md" v-on:click="checkIsLoginButton">Continue to
                  Shipping</button>
              </nuxt-link>
            </div>
          </div>
    </div>
  </section>
</div>
</template>
<script setup>
import {
  Plus,
  Minus,
  Delete
} from '@element-plus/icons-vue';
import { storeToRefs } from "pinia";
import { useStores } from "~/store/store";
import useUserBuyActivity from "~/composables/useUserBuyActivity";
import CheckoutProcess from "~/components/CheckoutProcess.vue";
const {
  removeCart,
  increaseCartQty,
  decreaseCartQty,
  checkIsLoginButton,
} = useUserBuyActivity();
const { addToCarts } = storeToRefs(useStores());
</script>
