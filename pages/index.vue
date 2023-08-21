<template>
    <div>
      <hero-part/>
      <ProductList />
      <FeaturedProduct/>
      <BestSelling/>
      <BeautyHealth/>
      <WomenClothing/>
      <ComputerAccessories/>
    </div>
</template>

<script setup lang="ts">
import HeroPart from "~/components/HeroPart.vue";
import ProductList from "~/components/ProductList.vue";
import FeaturedProduct from "~/components/FeaturedProduct.vue";
import BestSelling from "~/components/BestSelling.vue";
import BeautyHealth from "~/components/BeautyHealth.vue";
import WomenClothing from "~/components/WomenClothing.vue";
import ComputerAccessories from "~/components/ComputerAccessories.vue";

</script>

<style scoped>

</style>
