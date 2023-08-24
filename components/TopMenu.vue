<template>
  <div class="bg-white">
    <div class=" border-b-[1px]">
      <div class="w-full lg:container flex items-center justify-between py-3 mx-auto px-4">
        <div class="menu-left lg:block w-full lg:w-4/5 justify-between flex">
<!--          <el-select v-model="value" placeholder="Select" class="border-0">-->
<!--            <el-option-->
<!--                v-for="item in cities"-->
<!--                :key="item.value"-->
<!--                :label="item.label"-->
<!--                :value="item.value"-->
<!--            >-->
<!--        <span >-->
<!--          <img class="inline-block w-[15px] h-[10px]" :src="item.flag" alt="Country flag"/> &nbsp; {{ item.label }}-->
<!--        </span>-->
<!--            </el-option>-->
<!--          </el-select>-->
          <el-select v-model="selectedLocale" class="border-0" size="large">
            <el-option v-for="(lang, index) in locales" :key="index" :value="lang.code">
              <div class="flex gap-2 items-center">
                <span>{{ lang.name }} </span>
                <img class="inline-block w-[15px] h-[10px]" :src="lang.flag" alt="Country flag"/>
              </div>
            </el-option>
          </el-select>
          <Icon :name="flagIcon" class="primary md:text-2xl lg:text-2xl text-xl"/>
          <a class="ml-3" href="#">{{ $t('online_service') }}</a>
        </div>
        <div class="menu-right w-1/5 justify-end items-center  hidden lg:flex">
          <nuxt-link  to="/login">{{ $t('login') }}</nuxt-link>
          <nuxt-link  class="border-l-2 p-2 ml-3" to="/register">{{ $t('register') }}</nuxt-link>
        </div>
      </div>
    </div>
    <div class="header border-b-[1px] py-5 shadow-[0_1px_8px_rgba(0,0,0,0.1)]">
      <div class="w-full lg:container  flex items-center justify-between py-3 mx-auto px-4">
          <NuxtLink to="/">
            <div class="logoArea">
              <img v-bind="logoImage" :style="logoWidth" height="40" >
            </div>
          </NuxtLink>
          <div class=" block lg:hidden"><el-icon :size="25"><Search /></el-icon></div>
          <div class="searchBox w-[50%] hidden lg:block" >
            <form action="#">
              <el-input
                  v-model="search"
                  class="w-50 m-2"
                  size="large"
                  placeholder="Please Input"
                  :suffix-icon="Search"
              />
            </form>
          </div>
          <div class="checkingList hidden lg:flex justify-between mr-4">
            <div id="compare" class="flex items-center ">
              <Icon name="material-symbols:sync-outline" size="30px"/>
              <nuxt-link to="/compare">
                <span class=" bg-primary p-1 ml-12 flex items-center justify-center rounded-full h-5 w-5 text-white">0</span>
                <p>{{ $t('compare') }}</p>
              </nuxt-link>
            </div>
            <div id="wishlist" class="flex items-center ml-3">
              <Icon name="material-symbols:favorite-outline-rounded" size="30px"/>
              <nuxt-link to="/user-profile/wishlist" >
                <span class=" bg-primary p-1 ml-9 flex items-center justify-center rounded-full h-5 w-5 text-white">0</span>
                <p>{{ $t('wishlist') }}</p>
              </nuxt-link>
            </div>
            <div id="cart" class="flex items-center ml-3">
              <Icon name="material-symbols:shopping-cart-outline" size="30px"/>
              <nuxt-link to="/cart">
                <span class=" bg-primary  p-1 ml-6 flex items-center justify-center rounded-full h-5 w-5 text-white">0</span>
                <p>{{ $t('cart') }}Cart</p>
              </nuxt-link>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Search } from '@element-plus/icons-vue'
const { locales, locale, setLocale } = useI18n();
const localePath = useLocalePath();
const selectedLocale = computed({
  get: () => locale.value, set: (value) => {
    setLocale(value);
  },
});
const logoImage = {
  src:'/images/shopro.png',
  alt:"walmart-logo"
}
const logoWidth= "maxWidth:100%; height:40px"
const search = ref('');
const value = ref();


const flagIcon = computed(() => {
  let icon = 'flag:gb-4x3';
  if (selectedLocale.value === 'ch-ZH') {
    icon = 'flag:cn-4x3';
  } else if (selectedLocale.value === 'th-TH') {
    icon = 'flag:th-4x3';
  } else if (selectedLocale.value === 'ch-CH') {
    icon = 'flag:cn-4x3';
  }
  return icon;
});

</script>