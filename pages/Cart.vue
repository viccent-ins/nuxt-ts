<template>
<div>
  <section class=" pt-5 mb-4  ">
    <div class="w-full lg:container mx-auto px-4 py-6">
      <div class="flex items-center justify-between w-full ">
        <div class="flex flex-col items-center w-full">
          <icon name="material-symbols:shopping-cart-rounded" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">1.My Cart</h4>
        </div>
        <div  class="flex flex-col items-center w-full ">
          <icon name="material-symbols:map" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">2.Shipping info</h4>
        </div>
        <div  class="flex flex-col items-center w-full">
          <icon name="material-symbols:local-shipping-rounded" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">3.Delivery info</h4>
        </div>
        <div class="flex flex-col items-center w-full">
          <icon name="material-symbols:credit-card-outline-sharp" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">4.Payment</h4>
        </div>
        <div class="flex flex-col items-center w-full">
          <icon name="material-symbols:check-circle" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">5.Confirmation</h4>
        </div>
      </div>
    </div>
  </section>
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
                  <div class="text-md font-semibold primary">{{ addToCart.price * addToCart.quantity }}</div>
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
                <a href="/" class="btn primary font-bold hover:underline">
                  <icon name="material-symbols:arrow-back-rounded"></icon>
                  Return to shop
                </a>
              </div>
              <div class="order-2 block ">
                <button class="btn bg-primary font-bold px-3 py-2 text-white rounded-md">Continue to
                  Shipping</button>
              </div>
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
} from '@element-plus/icons-vue'
import { storeToRefs } from "pinia";
import { useStores } from "~/store/store";
import useUserBuyActivity from "~/composables/useUserBuyActivity";
const {
  removeCart,
  compareProduct,
  increaseCartQty,
  decreaseCartQty
} = useUserBuyActivity();
const { addToCarts } = storeToRefs(useStores());
console.log(addToCarts)

</script>
