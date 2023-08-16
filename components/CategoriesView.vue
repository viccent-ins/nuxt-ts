<template>
  <div class="w-60 position-static hidden lg:block">
    <div class="aiz-category-menu bg-white rounded  shadow-sm">
      <!-- Category and SubCategory start here -->
      <div
          class="py-3 px-4 bg-red-300 rounded-t-lg all-category relative text-left">
        <span class="font-semibold text-lg mr-3">Categories</span>
        <a href="https://wal-marting.com/categories" class="text-reset">
          <span class="">See All &gt;</span>
        </a>
      </div>
      <ul class="list-unstyled categories py-1 xl:py-2 mb-0 text-left">
        <li class="category-nav-element" v-for="category  in categories " :key="category.name">
          <a href="" class=" py-3 px-3 flex-col xl:flex-row lg:flex items-center   ">
            <img class="cat-image mr-2 opacity-60 lazyloaded" :src=category.image width="125"
                 :alt="category.name">
            <span class="cat-name">{{ category.name }}</span>
          </a>
          <div class="sub-cat-menu c-scrollbar-light rounded shadow p-4 loaded">
            <div class="card-columns">
              <div class="card shadow-none border-0">
                <ul class="list-unstyled mb-3">
                  <li class="font-semibold border-b-2 pb-2 mb-3"
                      v-for="subCategory in category.children" :key="subCategory.id">
                    <a class="text-reset" href="https://wal-marting.com/category/--toybe">
                      {{ subCategory.name }}
                    </a>
                    <ul class="list-unstyled mb-3 flex ">
                      <li class="font-semibold mr-2 pb-2 mb-3"
                          v-for="subCategory in subCategory.children"
                          :key="subCategory.name">
                        <img width="100" class="bg-gray-200 mb-2 mt-4"
                             :src="subCategory.image" :alt="subCategory.name">
                        <p class="text-center"> {{ subCategory.name }} </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- Category and SubCategory End here -->
</template>
<script setup>
import useCategory from "~/composables/useCategory";
const {
  categories

} = useCategory();

</script>
<style scoped>
.aiz-category-menu .sub-cat-menu {
  display: none;
  position: absolute;
  width: 60%;
  left: 25%;
  height: 500px;
  overflow: hidden;
  top: 190px;
  z-index: 9;
  background-color: #fff;
  overflow-y: scroll;
  border-radius: 8px;
}

.category-nav-element:hover .sub-cat-menu {
  display:block;
}
</style>