<template>
  <div>
    <hero-part/>
    <div>
      <div class="w-full lg:container mt-8 mx-auto  bg-white shadow rounded-lg">
        <div class=" px-4 py-4">
          <div class="flex mb-3 items-baseline border-b ">
            <h3 class="font-bold mb-0">
          <span class="border-b-2 border-red-600 text-3xl  pb-3 inline-block">
            New Products
          </span>
            </h3>
          </div>
          <div class=" overflow-x-scroll">
            <div class="flex " style="opacity: 1; width: 2688px; transform: translate3d(0px, 0px, 0px);">
              <div v-for="(product, index) in Data.Products" :key="index" style="width: 250px;" v-loading="isLoading">
                <div>
                  <div class="carousel-box mr-4">
                    <div
                        class="border overflow-hidden rounded hover:shadow mt-1 mb-2 bg-white transition duration-100 ease-in-out">
                      <div class="relative">
                        <nuxt-link
                            :to="`/product/${ product.title.replace(/\//g, '-') }?product_id=${product.id}&cat_ids=${product.category_ids}`">
                          <img class="w-full  h-[210px]  lazyloaded" :src="product.image" :alt="product.title">
                        </nuxt-link>
                        <UserBuyActivity :Product="product"/>
                      </div>
                      <div class="p-3">
                        <div class="text-lg">
                          <span class="font-bold text-red-600">{{ product?.price }}</span>
                        </div>
                        <h3 class="font-medium text-truncate text-lg mb-0 h-[55px]">
                          <nuxt-link
                              :to="`/product/${ product.title.replace(/\//g, '-') }?product_id=${product.id}&cat_ids=${product.category_ids}`"
                              class="block text-lg">{{ product.title }}
                          </nuxt-link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:container mt-8 mx-auto  bg-white shadow rounded-lg">
        <div class=" px-4 py-4">
          <div class="flex mb-3 items-baseline border-b ">
            <h3 class="font-bold mb-0">
        <span class="border-b-2 border-red-600 text-3xl  pb-3 inline-block">
          Featured Products
        </span>
            </h3>
          </div>
          <div class=" overflow-x-scroll">
            <div class="flex " style="opacity: 1; width: 2688px; transform: translate3d(0px, 0px, 0px);">
              <div
                  v-for="product in Data.FeatureProducts"
                  :key="product.id"
                  style="width: 250px;"
                  v-loading="isLoading"
              >
                <div class="carousel-box mr-4">
                  <div
                      class="border overflow-hidden rounded hover:shadow mt-1 mb-2 bg-white transition duration-100 ease-in-out">
                    <div class="relative">
                      <nuxt-link
                          :to="`/product/${ product.title.replace(/\//g, '-') }?product_id=${product.id}&cat_ids=${product.category_ids}`">
                        <img class="w-full  h-[210px] lazyloaded" :src="product.image" :alt="product.title">
                      </nuxt-link>
                      <UserBuyActivity :Product="product"/>
                    </div>
                    <div class="p-3">
                      <div class="text-lg">
                        <span class="font-bold text-red-600">{{ product.price }}</span>
                      </div>
                      <h3 class="font-medium text-truncate text-lg mb-0 h-[55px]">
                        <nuxt-link
                            :to="`/product/${ product.title.replace(/\//g, '-') }?product_id=${product.id}&cat_ids=${product.category_ids}`"
                            class="block text-lg">{{ product.title }}
                        </nuxt-link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:container mt-8 mx-auto  bg-white shadow rounded-lg">
        <div class=" px-4 py-4">
          <div class="flex mb-3 items-baseline border-b ">
            <h3 class="font-bold mb-0">
              <span class="border-b-2 border-red-600 text-3xl  pb-3 inline-block">Best Selling</span>
            </h3>
          </div>
          <div class=" overflow-x-scroll">
            <div class="flex " style="opacity: 1; width: 2688px; transform: translate3d(0px, 0px, 0px);">
              <div
                  v-for="product in Data.BestProducts"
                  :key="product.id"
                  style="width: 250px;"
                  v-loading="isLoading"
              >
                <div class="carousel-box mr-4">
                  <div
                      class="border overflow-hidden rounded hover:shadow mt-1 mb-2 bg-white transition duration-100 ease-in-out">
                    <div class="relative">
                      <nuxt-link
                          :to="`/product/${ product.title.replace(/\//g, '-') }?product_id=${product.id}&cat_ids=${product.category_ids}`">
                        <img class="w-full  h-[210px]  lazyloaded" :src="product.image" :alt="product.title">
                      </nuxt-link>
                      <UserBuyActivity/>
                    </div>
                    <div class="p-3">
                      <div class="text-lg">
                        <span class="font-bold text-red-600">{{ product.price }}</span>
                      </div>
                      <h3 class="font-medium text-truncate text-lg mb-0 h-[55px]">
                        <nuxt-link
                            :to="`/product/${ product.title.replace(/\//g, '-') }?product_id=${product.id}&cat_ids=${product.category_ids}`"
                            class="block text-lg">{{ product.title }}
                        </nuxt-link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:container mt-8 mx-auto  bg-white shadow rounded-lg">
        <div class=" px-4 py-4">
          <div class="flex mb-3 items-baseline border-b ">
            <h3 class="font-bold mb-0">
        <span class="border-b-2 border-red-600 text-3xl  pb-3 inline-block">
          Beauty, Health and Hairdressing
        </span>
            </h3>
          </div>
          <div class=" overflow-x-scroll">
            <div class="flex "
                 style="opacity: 1; width: 2688px; transform: translate3d(0px, 0px, 0px);">
              <div
                  v-for="product in Data.HealthProducts"
                  :key="product.id"
                  style="width: 250px;"
                  v-loading="isLoading"
              >
                <div>
                  <div class="carousel-box mr-4">
                    <div
                        class="border overflow-hidden rounded hover:shadow mt-1 mb-2 bg-white transition duration-100 ease-in-out">
                      <div class="relative">
                        <nuxt-link
                            :to="`/product/${ product.title.replace(/\//g, '-') }?product_id=${product.id}&cat_ids=${product.category_ids}`">
                          <img class="w-full  h-[210px]  lazyloaded" :src="product.image" :alt="product.title">
                        </nuxt-link>
                        <UserBuyActivity/>
                      </div>
                      <div class="p-3">
                        <div class="text-lg">
                          <span class="font-bold text-red-600">{{ product.price }}</span>
                        </div>
                        <h3 class="font-medium text-truncate text-lg mb-0 h-[55px]">
                          <nuxt-link
                              :to="`/product/${ product.title.replace(/\//g, '-') }?product_id=${product.id}&cat_ids=${product.category_ids}`"
                              class="font-semibold text-lg">{{ product.title }}
                          </nuxt-link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:container mt-8 mx-auto  bg-white shadow rounded-lg">
        <div class=" px-4 py-4">
          <div class="flex mb-3 items-baseline border-b ">
            <h3 class="font-bold mb-0">
        <span class="border-b-2 border-red-600 text-3xl  pb-3 inline-block">
          Women's Clothing and Fashion
        </span>
            </h3>
          </div>
          <div class=" overflow-x-scroll">
            <div class="flex " style="opacity: 1; width: 2688px; transform: translate3d(0px, 0px, 0px);">
              <div
                  v-for="product in Data.WomenProducts"
                  :key="product.id"
                  style="width: 250px;"
                  v-loading="isLoading"
              >
                <div class="carousel-box mr-4">
                  <div
                      class="border overflow-hidden rounded hover:shadow mt-1 mb-2 bg-white transition duration-100 ease-in-out">
                    <div class="relative">
                      <nuxt-link
                          :to="`/product/${ product.title.replace(/\//g, '-') }?product_id=${product.id}&cat_ids=${product.category_ids}`">
                        <img class="w-full  h-[210px]  lazyloaded" :src="product.image" :alt="product.title">
                      </nuxt-link>
                      <UserBuyActivity/>
                    </div>
                    <div class="p-3">
                      <div class="text-lg">
                        <span class="font-bold text-red-600">{{ product.price }}</span>
                      </div>
                      <h3 class="font-medium text-truncate text-lg mb-0 h-[55px]">
                        <nuxt-link
                            :to="`/product/${ product.title.replace(/\//g, '-') }?product_id=${product.id}&cat_ids=${product.category_ids}`"
                            class="block text-lg">{{ product.title }}
                        </nuxt-link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  v-for="(product, index) in Data.AccessoryProducts"
                  :key="index"
                  style="width: 250px;"
                  v-loading="isLoading"
              >
                <div class="carousel-box mr-4">
                  <div
                      class="border overflow-hidden rounded hover:shadow mt-1 mb-2 bg-white transition duration-100 ease-in-out">
                    <div class="relative">
                      <nuxt-link
                          :to="`/product/${ product.title.replace(/\//g, '-') }?product_id=${product.id}&cat_ids=${product.category_ids}`">
                        <img class="w-full  h-[210px]  lazyloaded" :src="product.image" :alt="product.title">
                      </nuxt-link>
                      <UserBuyActivity/>
                    </div>
                    <div class="p-3">
                      <div class="text-lg">
                        <span class="font-bold text-red-600">{{ product.price }}</span>
                      </div>
                      <h3 class="font-medium text-truncate text-lg mb-0 h-[55px]">
                        <nuxt-link
                            :to="`/product/${ product.title.replace(/\//g, '-') }?product_id=${product.id}&cat_ids=${product.category_ids}`"
                            class="block text-lg">{{ product.title }}
                        </nuxt-link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroPart from "~/components/HeroPart.vue";
import useProductList from "~/composables/useProductList";
import UserBuyActivity from "~/components/UserBuyActivity.vue";

const {
  isLoading,
  Data,
} = useProductList();
</script>

<style scoped>

</style>
