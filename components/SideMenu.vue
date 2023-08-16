<template>
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
</template>
<script setup>
 import useBanner from "~/composables/useBanner";
 const {
   menus,
 } = useBanner();
</script>