<template>
  <div class="bg-white rounded shadow-sm w-full">
    <div class=" px-4 py-4">
      <div class="flex mb-3 items-baseline border-b ">
        <h3 class="font-bold mb-0">
          <span class="border-b-2 border-red-600 text-3xl  pb-3 inline-block">Related Product</span>
        </h3>
      </div>
    </div>
    <div class=" w-full p-4">
      <div class="flex-wrap flex " >
        <div v-for="(product, index) in relatedProducts" :key="index" style="width: 290px;" v-loading="isLoading">
          <div>
            <div class="carousel-box mr-4">
              <div class="border overflow-hidden rounded hover:shadow mt-1 mb-2 bg-white transition duration-100 ease-in-out">
                <div class="relative">
                  <nuxt-link :to="`/product/details?id=${product.id + '&cat_ids=' + product.category_ids}`"  >
                    <img loading="lazy" class="w-full  h-[210px] " :src="product.image" :alt="product.title">
                  </nuxt-link>
                  <UserBuyActivity :Product="product" />
                </div>
                <div class="p-3">
                  <div class="text-lg">
                    <span class="font-bold text-red-600">${{ product.price }}</span>
                  </div>
                  <nuxt-link
                      :to="`/product/detail?id=${product.id + '&cat_ids=' + product.category_ids}`"
                      class="block">
                    <h3 class="font-medium text-truncate text-lg mb-0 h-[55px]">{{ product.title }}</h3>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import useRelatedProduct from "~/composables/useRelatedProduct";
import UserBuyActivity from "~/components/UserBuyActivity.vue";
const {
  relatedProducts,
  isLoading
} = useRelatedProduct();

</script>