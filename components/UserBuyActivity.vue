
<template>
  <div class="absolute top-0 right-0 cartList-icon flex-col flex ">
    <a href="#" class="bg-white w-10 h-10 flex items-center justify-center mt-3 rounded-full   " @click="addToWishlist(prop.Product)">
      <Icon name="material-symbols:favorite-outline-rounded" size="20px" />
    </a>
    <a href="#" class="bg-white w-10 h-10 flex items-center justify-center  rounded-full my-2 " @click="compareProduct(prop.Product)">
      <Icon name="material-symbols:sync-outline" size="20px" />
    </a>
    <a href="#" class="bg-white w-10 h-10 flex items-center justify-center  rounded-full " @click="addToCart(prop.Product)">
      <Icon name="material-symbols:shopping-cart-outline" size="22px"/>
    </a>
  </div>
</template>
<script setup lang="ts">
  import useUserBuyActivity from "~/composables/useUserBuyActivity";
  const prop = defineProps({
    Product: {
      type: Object,
      required: true
    }
  });
  const {
    addToCart,
    compareProduct,
      addToWishlist
    } = useUserBuyActivity();
</script>
<style scoped>

</style>