
<template>
  <div class="absolute top-0 right-0 cartList-icon flex-col flex ">
    <a href="#" class="bg-white rounded-full  mt-2 p-2" >
      <Icon name="material-symbols:favorite-outline-rounded" size="20px" />
    </a>
    <a href="#" class="bg-white rounded-full my-2 p-2">
      <Icon name="material-symbols:sync-outline" size="20px" @click="compareProduct(prop.Product)"/>
    </a>
    <a href="#" class="bg-white rounded-full p-2" @click="addToCart(prop.Product)">
      <Icon name="material-symbols:shopping-cart-outline" size="20px"/>
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
    } = useUserBuyActivity();
</script>
<style scoped>

</style>