<template>
  <div>
      <div class="w-full lg:container mt-5 mx-auto px-4 py-3">
        <div class="flex justify-between w-full">
          <div>
            <h3 class="text-lg font-bold">All categories</h3>
          </div>
          <div>
            <ul class="flex items-center">
              <li>
                <nuxt-link to="/" class="font-semibold">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/category" class=" font-bold primary">/ "All categories"</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    <section class="py-4">
      <div class="w-full lg:container mx-auto px-4 ">
        <div class="overflow-hidden">
          <div class="aiz-category-menu  ">
            <!-- Category and SubCategory start here -->
            <ul class="list-unstyled categories py-1 xl:py-2 mb-0 text-left ">
              <li class="category-nav-element" v-for="(category ,index)  in categories " :key="index">
                <nuxt-link to="" class=" py-6 px-3 flex items-center   ">
                   <img loading="lazy" class="cat-image mr-2 opacity-60 " :src=category.image width="200" :alt="category.name" />
                   <span class="cat-name text-lg font-bold">{{ category.name }}</span>
                </nuxt-link>
                <div class="sub-cat-menu  rounded shadow p-4 loaded ">
                  <div class="card-columns">
                    <div class="card shadow-none border-0">
                      <ul class="list-unstyled mb-3">
                        <li class="font-semibold border-b-2 pb-2 mb-3 "
                            v-for="(subCategory , index) in category.children" :key="index">
                          <div class="flex justify-between items-center py-3">
                            <p class="text-md" >{{ subCategory.name }}</p>
                            <nuxt-link  :to="`/category/detail?id=${subCategory.id}`" class="bg-gray-200 rounded-md p-2 cursor-pointer hover:text-red-500 ">See More</nuxt-link>
                          </div>
                          <div class="list-unstyled mb-3 flex">
                              <div class="font-semibold mr-2 pb-2 mb-3" v-for="subCategory in subCategory.children" :key="subCategory.name">
                                <nuxt-link :to="`/category/detail?id=${subCategory.id}`">
                                  <img width="100" class="bg-gray-200 mb-2 mt-4"
                                       :src="subCategory.image" :alt="subCategory.name">
                                  <p class="text-center text-sm font-medium"> {{ subCategory.name }} </p>
                                </nuxt-link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup >
import useCategory from "~/composables/useCategory";
const {
  categories,
  isLoading
} = useCategory();
</script>
<style scoped>
.aiz-category-menu .sub-cat-menu {
  width: 100%;
  left: calc(22% );
  height: 450px;
  overflow: hidden;
  top: 0;
  z-index: 5;
  background-color: #fff;
  border-radius: 8px;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 6px;

}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(24, 28, 41, 0.08);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(24, 28, 46, 0.08);
}
</style>

