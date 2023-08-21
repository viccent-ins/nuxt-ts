<template>
  <div class="bg-white">
    <div class=" border-b-[1px]">
      <div class="w-full lg:container flex items-center justify-between py-3 mx-auto px-4">
        <div class="menu-left lg:block w-full justify-between flex">
          <el-select v-model="value" placeholder="Select" class="border-0">
            <el-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
        <span >
          <img class="inline-block w-[15px] h-[10px]" :src="item.flag" alt="Country flag"/> &nbsp; {{ item.label }}
        </span>
            </el-option>
          </el-select>
          <a class="ml-3" href="#">Online Service</a>
        </div>
        <div class="menu-right block hidden lg:block">
          <a  href="/login">Login</a>
          <a  class="border-l-2 p-2 ml-3" href="/register">Register</a>
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
          <el-icon :size="25"><Search /></el-icon>
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
              <div >
                <span class=" bg-primary p-1 ml-12 flex items-center justify-center rounded-full h-5 w-5 text-white">0</span>
                <p>Compare</p>
              </div>
            </div>
            <div id="wishlist" class="flex items-center ml-3">
              <Icon name="material-symbols:favorite-outline-rounded" size="30px"/>
              <div >
                <span class=" bg-primary p-1 ml-9 flex items-center justify-center rounded-full h-5 w-5 text-white">0</span>
                <p>Wishlist</p>
              </div>
            </div>
            <div id="cart" class="flex items-center ml-3">
              <Icon name="material-symbols:shopping-cart-outline" size="30px"/>
              <a href="/cart">
                <span class=" bg-primary  p-1 ml-6 flex items-center justify-center rounded-full h-5 w-5 text-white">0</span>
                <p>Cart</p>
              </a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Search } from '@element-plus/icons-vue'
const logoImage = {
  src:'/images/shopro.png',
  alt:"walmart-logo"
}
const logoWidth= "maxWidth:100%; height:40px"
const search = ref('')
const value = ref()
const cities = [
  {
    value: 'english',
    label: 'English',
    flag:'/images/icon/en-flag.png'
  },
  {
    value: 'bangla',
    label: 'Bangla',
    flag:'/images/icon/bd.png'
  },
  {
    value: 'india',
    label: 'India',
    flag: '/images/icon/in.png'
        },
  {
    value:'arabic',
    label: 'Arabic',
    flag: '/images/icon/sa.png'
  },
  {
    value:'中文',
    label: '中文',
    flag: '/images/icon/cn.png'
  },
  {
    value: '日本語',
    label: '日本語',
    flag: '/images/icon/jp.png'
  },
  {
    value: '한국',
    label: '한국',
    flag: '/images/icon/kr.png'
  },
  {
    value:'turkish',
    label: 'Turkish',
    flag: '/images/icon/tr.png'
  },
  {
    value:'malay',
    label: 'Malay',
    flag: '/images/icon/ma.png'
  },
  {
    value:'中文繁体',
    label: '中文繁体',
    flag: '/images/icon/hk.png'
  },
  {
    value:'portugues',
  label: 'Portugues',
   flag: '/images/icon/pt.png'
   }
]
</script>