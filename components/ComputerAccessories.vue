<template>
  <div class="w-full lg:container mt-8 mx-auto  bg-white shadow rounded-lg mb-12">
    <div class=" px-4 py-4">
      <div class="flex mb-3 items-baseline border-b ">
        <h3 class="font-bold mb-0">
        <span class="border-b-2 border-red-600 text-3xl  pb-3 inline-block">
          Computers and Accessories
        </span>
        </h3>
      </div>
      <div class=" overflow-x-scroll">
        <div class="flex " style="opacity: 1; width: 2688px; transform: translate3d(0px, 0px, 0px);">
          <div
              v-for="product in computerAccessoriesProducts"
              :key="product.id"
              style="width: 250px;"
              v-loading="isLoading"
          >
              <div class="carousel-box mr-4">
                <div class="border overflow-hidden rounded hover:shadow mt-1 mb-2 bg-white transition duration-100 ease-in-out">
                  <div class="relative">
                    <nuxt-link :to="`/product/${ product.title.replace(/\//g, '-') }?product_id=${product.id}&cat_ids=${product.category_ids}`" >
                      <img class="w-full  h-[210px]  lazyloaded" :src="product.image" :alt="product.title">
                    </nuxt-link>
                    <div class="absolute top-0 right-0 cartList-icon flex-col flex ">
                      <a href="#" class="bg-white rounded-full  mt-2 p-2">
                        <Icon name="material-symbols:favorite-outline-rounded" size="20px"/>
                      </a>
                      <a href="#" class="bg-white rounded-full my-2 p-2">
                        <Icon name="material-symbols:sync-outline" size="20px"/>
                      </a>
                      <a href="#" class="bg-white rounded-full p-2" >
                        <Icon name="material-symbols:shopping-cart-outline" size="20px"/>
                      </a>
                    </div>
                  </div>
                  <div class="p-3">
                    <div class="text-lg">
                      <span class="font-bold text-red-600">{{ product.price }}</span>
                    </div>
                    <h3 class="font-medium text-truncate text-lg mb-0 h-[55px]">
                      <nuxt-link :to="`/product/${ product.title.replace(/\//g, '-') }?product_id=${product.id}&cat_ids=${product.category_ids}`" class="block text-lg">{{ product.title }}</nuxt-link>
                    </h3>
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
import useProductList from "~/composables/useProductList";
const {
  computerAccessoriesProducts,
    isLoading
} = useProductList();
</script>
<style scoped>

</style>