<template>

  <div class="w-full lg:container  flex-col lg:flex-row lg:flex items-start  mt-5 mx-auto px-4 ">
    <div class="w-60 position-static hidden lg:block">
      <div class="aiz-category-menu bg-white rounded  shadow-sm">
        <!-- Category and SubCategory start here -->
        <div  class="py-3 px-4 bg-red-300 rounded-t-lg all-category relative text-left flex items-center justify-between">
          <span class="font-semibold text-lg mr-3">{{ $t('categories') }}</span>
          <a href="https://wal-marting.com/categories" class="text-sm">
            <span class="">{{ $t('see_all') }}&gt;</span>
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
    <!-- Home banner start Here -->
    <div class=" w-full lg:w-2/3 ml-0 lg:ml-3">
      <div class="aiz-carousel">
        <el-carousel :interval="5000" arrow="always"  class="h-[400px]">
          <el-carousel-item v-for="(banner ,index) in banners" :key="index" class="carouselHight">
            <img :src=banner.image alt="" class="w-full h-full">
          </el-carousel-item>
        </el-carousel>
        <ul class="list-unstyled flex flex-wrap w-full items-center justify-between ">
          <li class=" mt-15  lg:mt-7" v-for="category  in categories " :key="category.name">
            <a href="https://wal-marting.com/category/----txlnh"
               class="flex flex-col items-center rounded bg-white p-2 w-32  shadow text-center">
              <img :src=category.image width="80" :alt="category.name" height="40">

              <div class="text-truncate text-md font-semibold mt-2 opacity-70">{{ category.name }}</div>
            </a>
          </li>

        </ul>
      </div>
    </div>
    <!-- Home banner End Here -->
<!--    SideMenu start here-->
    <div class=" w-full lg:w-60 ml-0 lg:ml-3 mt-8 lg:mt-0 ">
      <div class="bg-white rounded shadow">
        <div class="h-[234px] lg:h-[650px]  xl:h-[500px] overflow-y-auto p-2 bg-red-500 rounded-b-lg">
          <div class="">
            <div class=" grid grid-cols-4 lg:grid-cols-1 gap-2">
              <a href="https://wal-marting.com/product/dream-pairs-womens-boat-shoes-57Lys"
                 class="flex  p-2 mb-2  bg-white h-[100px] rounded"
                 v-for="(menuItem, index) in menus" :key="index"
              >
                <div class="flex mb-2 items-center justify-around">
                  <div class="col-xxl">
                    <div class="img">
                      <img class="img-fit h-140px h-lg-80px ls-is-cached lazyloaded"
                           :src=menuItem.image>
                    </div>
                  </div>
                  <div class="col-xxl">
                    <div class="text-lg">
                      <span class="d-block text-primary font-semibold">{{ menuItem.name }}</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    SideMenu start End-->
  </div>
</template>
<script setup>
import useCategory from "~/composables/useCategory";
import useBanner from "~/composables/useBanner";
const {
  banners,
  menus,
} = useBanner();

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
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}
.carouselHight {
  height: 400px;
  border-radius: 8px;
}
</style>