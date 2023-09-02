<template>
  <div>
    <hero-part/>
    <div>
      <div class="w-full lg:container mt-8 mx-auto relative bg-white shadow rounded-lg px-4">
        <div class=" py-3">
          <div class="flex  mb-4 items-baseline border-b px-3 ">
            <h3 class="font-bold mb-0">
          <span class="border-b-2 border-red-600 text-3xl  pb-3 inline-block">
            New Products
          </span>
            </h3>
          </div>
          <div class="relative">
            <swiper
                ref="{swiperRef}"
                :style="{
                    '--swiper-navigation-color': '#000',
                    }"
                :slidesPerView="5"
                :spaceBetween="19"
                navigation
                :modules="modules"
                :lazy="true"
                class="mySwiper pr-6" >
              <swiper-slide v-for="(product, index) in Data.Products" :key="index" style="width: 280px;">
                <div class="carousel-box ">
                  <div class="border overflow-hidden rounded hover:shadow  ">
                    <div class="relative">
                      <nuxt-link
                          :to="`/product/detail?id=${product.id + '&cat_ids=' + product.category_ids}`">
                        <img loading="lazy" class="w-full  h-[210px]" :src="product.image" :alt="product.title">
                      </nuxt-link>
                      <UserBuyActivity :Product="product"/>
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
              </swiper-slide>
            </swiper>
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
          <div class="relative">
            <swiper
                ref="{swiperRef}"
                :style="{
                    '--swiper-navigation-color': '#000',
                    }"
                v-loading="isLoading"
                :slidesPerView="5"
                :spaceBetween="19"
                navigation
                :modules="modules"
                :lazy="true"
                class="mySwiper pr-6"
            >
              <swiper-slide
                  v-for="product in Data.FeatureProducts"
                  :key="product.id"
                  style="width: 250px;"
              >
                <div class="carousel-box">
                  <div
                      class="border overflow-hidden rounded hover:shadow ">
                    <div class="relative">
                      <nuxt-link
                          :to="`/product/product_id=${product.id}&cat_ids=${product.category_ids}`">
                        <img loading="lazy" class="w-full  h-[210px] " :src="product.image" :alt="product.title">
                      </nuxt-link>
                      <UserBuyActivity :Product="product"/>
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
              </swiper-slide>
            </swiper>
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
          <div class=" relative">
            <swiper
                ref="{swiperRef}"
                :style="{
                    '--swiper-navigation-color': '#000',
                    }"
                :slidesPerView="5"
                :spaceBetween="19"
                navigation
                :modules="modules"
                :lazy="true"
                class="mySwiper pr-6"
                v-loading="isLoading"
            >
              <swiper-slide
                  v-for="product in Data.BestProducts"
                  :key="product.id"
                  style="width: 250px;"
              >
                <div class="carousel-box ">
                  <div
                      class="border overflow-hidden rounded hover:shadow ">
                    <div class="relative">
                      <nuxt-link
                          :to="`/product/detail?id=${product.id + '&cat_ids=' + product.category_ids}`">
                        <img loading="lazy" class="w-full  h-[210px]" :src="product.image" :alt="product.title">
                      </nuxt-link>
                      <UserBuyActivity :Product="product"/>
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
              </swiper-slide>
            </swiper>
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
          <div class="swiper">
            <swiper
                ref="{swiperRef}"
                :style="{
                    '--swiper-navigation-color': '#000',
                    }"
                :slidesPerView="5"
                :spaceBetween="19"
                navigation
                :modules="modules"
                :lazy="true"
                class="mySwiper pr-6"
                v-loading="isLoading"
            >
              <swiper-slide
                  v-for="product in Data.HealthProducts"
                  :key="product.id"
                  style="width: 250px;"
              >
                <div>
                  <div class="carousel-box mr-4">
                    <div
                        class="border overflow-hidden rounded hover:shadow mt-1 mb-2 bg-white transition duration-100 ease-in-out">
                      <div class="relative">
                        <nuxt-link
                            :to="`/product/detail?id=${product.id + '&cat_ids=' + product.category_ids}`">
                          <img loading="lazy" class="w-full  h-[210px] " :src="product.image" :alt="product.title">
                        </nuxt-link>
                        <UserBuyActivity :Product="product"/>
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
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="w-full lg:container mt-8 mx-auto  bg-white shadow rounded-lg">
        <div class=" px-4 py-4">
          <div class="flex mb-3 items-baseline border-b ">
            <h3 class="font-bold mb-0">
              <span class="border-b-2 border-red-600 text-3xl  pb-3 inline-block">Women's Clothing and Fashion </span>
            </h3>
          </div>
          <div class="swiper">
            <swiper
                ref="{swiperRef}"
                :style="{
                    '--swiper-navigation-color': '#000',
                    }"
                :slidesPerView="5"
                :spaceBetween="19"
                navigation
                :modules="modules"
                :lazy="true"
                class="mySwiper pr-6"
                v-loading="isLoading"
            >
              <swiper-slide
                  v-for="product in Data.WomenProducts"
                  :key="product.id"
                  style="width: 250px;"
              >
                <div class="carousel-box mr-4">
                  <div
                      class="border overflow-hidden rounded hover:shadow mt-1 mb-2 bg-white transition duration-100 ease-in-out">
                    <div class="relative">
                      <nuxt-link
                          :to="`/product/detail?id=${product.id + '&cat_ids=' + product.category_ids}`">
                        <img loading="lazy" class="w-full  h-[210px] " :src="product.image" :alt="product.title">
                      </nuxt-link>
                      <UserBuyActivity :Product="product"/>
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
              </swiper-slide>
            </swiper>
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
          <div class="swiper">
            <swiper
                ref="{swiperRef}"
                :style="{
                    '--swiper-navigation-color': '#000',
                    }"
                :slidesPerView="5"
                :spaceBetween="19"
                navigation
                :modules="modules"
                :lazy="true"
                class="mySwiper pr-6"
                v-loading="isLoading"
            >
              <swiper-slide
                  v-for="(product, index) in Data.AccessoryProducts"
                  :key="index"
                  style="width: 250px;"
              >
                <div class="carousel-box mr-4">
                  <div
                      class="border overflow-hidden rounded hover:shadow mt-1 mb-2 bg-white transition duration-100 ease-in-out">
                    <div class="relative">
                      <nuxt-link
                          :to="`/product/detail?id=${product.id + '&cat_ids=' + product.category_ids}`">
                        <img loading="lazy" class="w-full  h-[210px] " :src="product.image" :alt="product.title">
                      </nuxt-link>
                      <UserBuyActivity :Product="product"/>
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
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroPart from "~/components/HeroPart.vue";
import useProductList from "~/composables/useProductList";
import UserBuyActivity from "~/components/UserBuyActivity.vue";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';

const {
  isLoading,
  Data,
  modules,
} = useProductList();

</script>

<style scoped>

</style>
