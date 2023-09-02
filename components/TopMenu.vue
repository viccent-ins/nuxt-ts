<template>
  <div class="bg-white">
    {{ isAuth }}
    <div class=" border-b-[1px]">
      <div class="w-full lg:container flex items-center justify-between py-3 mx-auto px-4">
        <div class="menu-left w-full lg:w-4/5 justify-between lg:justify-start items-center flex">
          <div class="relative">
            <el-select v-model="selectedLocale" class="border-0" size="large">
              <el-option v-for="(lang, index) in locales" :key="index" :label="lang.name" :value="lang.code" >
                <div class="flex w-full justify-between items-center">
                  <span>{{ lang.name }} </span>
                  <img class="inline-block w-[15px] h-[10px]" :src="lang.flag" alt="Country flag"/>
                </div>
              </el-option>
            </el-select>
            <Icon :name="flagIcon" class="absolute left-[135px] top-1/2 mt-[-9px] "/>
          </div>
          <div>
            <a class="ml-3" href="#">{{ $t('online_service') }}</a>
          </div>
        </div>
        <div class="menu-right w-1/5 justify-end items-center  hidden lg:flex">
          <nuxt-link v-if="isAuth" to="/user-profile">My Panel</nuxt-link>
          <nuxt-link v-else to="/login">{{ $t('login') }}</nuxt-link>
          <nuxt-link v-if="isAuth === false" class="border-l-2 p-2 ml-3" to="/register">{{ $t('register') }}</nuxt-link>
          <div v-else class=" p-2 ml-3 cursor-pointer" @click="onLogout">Logout</div>
        </div>
      </div>
    </div>
    <div class="header border-b-[1px] py-5 shadow-[0_1px_8px_rgba(0,0,0,0.1)]">
      <div class="w-full lg:container  flex items-center justify-between py-3 mx-auto px-4">
          <NuxtLink to="/">
            <div class="logoArea bg-white">
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
                  :placeholder="$t('search_product')"
                  :suffix-icon="Search"
              />
            </form>
          </div>
          <div class="checkingList hidden lg:flex justify-between mr-4">
            <div id="compare" >
              <nuxt-link to="/compare" class="flex items-center ">
                <Icon name="material-symbols:sync-outline" size="30px"/>
                <span>
                    <span class=" bg-primary p-1 ml-12 flex items-center justify-center rounded-full h-5 w-5 text-white">{{ stores.compareProducts.length }}</span>
                    <span>{{ $t('compare') }}</span>
                </span>
              </nuxt-link>
            </div>
            <div id="wishlist" >
              <nuxt-link to="/user-profile/wishlist" class="flex items-center ml-3" >
                <Icon name="material-symbols:favorite-outline-rounded" size="30px"/>
                <span>
                  <span class=" bg-primary p-1 ml-9 flex items-center justify-center rounded-full h-5 w-5 text-white">{{ stores.addToWishlists.length }}</span>
                  <span>{{ $t('wishlist') }}</span>
                </span>
              </nuxt-link>
            </div>
            <div id="cart">
              <nuxt-link to="/cart"  class="flex items-center ml-3">
                <Icon name="material-symbols:shopping-cart-outline" size="30px"/>
               <span>
                  <span class=" bg-primary  p-1 ml-6 flex items-center justify-center rounded-full h-5 w-5 text-white">{{ stores.addToCarts.length }}</span>
                  <span>{{ $t('cart') }}</span>
               </span>
              </nuxt-link>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Search } from '@element-plus/icons-vue'
import { useStores } from "~/store/store";
import { storeToRefs } from "pinia";
const { locales, locale, setLocale } = useI18n();
const stores = useStores();
const { isAuth } = storeToRefs(stores);
const localePath = useLocalePath();
const selectedLocale = computed({
  get: () => locale.value, set: (value) => {
    setLocale(value);
  },
});
const {
  login
} = useLogin();
const {
  register
} =useRegister();
const logoImage = {
  src:'/images/shopro.png',
  alt:"walmart-logo"
}
const onLogout = () => {
  let keysToRemove = ['store'];
  keysToRemove.forEach((key) => {
    localStorage.removeItem(key);
    stores.token = '';
  });
  if (isAuth.value === false) {
    navigateTo('/');
  }
};
const logoWidth= "maxWidth:100%; height:40px"
const search = ref('');
const value = ref();
const flagIcon = computed(() => {
  let icon = 'flag:us-4x3';
  if (selectedLocale.value === 'en-US') {
    icon = 'flag:us-4x3';
  } else if (selectedLocale.value === 'in-HN') {
    icon = 'flag:in-4x3';
  } else if (selectedLocale.value === 'bn-BN') {
    icon = 'flag:bd-4x3';
  }else if (selectedLocale.value === 'ch-ZH') {
    icon = 'flag:cn-4x3';
  }else if (selectedLocale.value === 'sa-AR') {
    icon = 'flag:sa-4x3';
  }else if (selectedLocale.value === 'kr-KO') {
    icon = 'flag:kr-4x3';
  }else if (selectedLocale.value === 'pt-PT') {
    icon = 'flag:pt-4x3';
  }else if (selectedLocale.value === 'tr-TR') {
    icon = 'flag:tr-4x3';
  }else if (selectedLocale.value === 'ja-JA') {
    icon = 'flag:jp-4x3';
  }else if (selectedLocale.value === 'ma-MS') {
    icon = 'flag:ma-4x3';
  }
  return icon;
});

</script>