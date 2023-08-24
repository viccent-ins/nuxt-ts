<template>
  <div>
  <CompanyPolicy/>
  <footer class="" >
    <section class="bg-gray-900  py-16 text-light footer-widget">
      <div class="w-full lg:container mx-auto px-3">
        <div class="grid grid-cols-3 gap-6">
          <div class="  text-left">
            <div class="mt-4">
              <a href="#" class="block bg-white">
                <img v-bind="logoImage" :style="logoWidth" height="44" >
              </a>
              <div class="  my-4">
                <form class=" flex items-center" method="POST" action="#">
                  <input
                        type="email"
                        v-model="email"
                        class=" p-3 block w-full rounded-md border-gray-300 shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Enter your email"
                    />
                  <button type="submit" class="btn bg-red-600 rounded-md text-white w-40 p-3 text-base">Subscribe</button>
                </form>
              </div>
              <div class="flex justify-between ">
                <a href="/" target="_blank" class="block mr-3 ml-0">
                  <img v-bind="playStoreImage" class=" h-40px">
                </a>
                <a href="/" target="_blank" class="block mr-3 ml-0">
                  <img v-bind="appleStoreImage" class=" h-40px">
                </a>
              </div>
            </div>
          </div>
          <div class=" ml-0 text-white">
            <div class="text-left mt-4">
              <h4 class="text-lg uppercase font-semibold border-b-gray-200 border-b pb-2 mb-4 border-opacity-25">
                Contact Info
              </h4>
              <ul class="list-unstyled">
                <li class="mb-2">
                  <span class="block opacity-30">Address:</span>
                  <span class="block opacity-70">Given at Companies House,Cardiff</span>
                </li>
                <li class="mb-2">
                  <span class="block opacity-30">Phone:</span>
                  <span class="block opacity-70"></span>
                </li>
                <li class="mb-2">
                  <span class="block opacity-30">Email:</span>
                  <span class="block opacity-70">
                     <a href="mailto:walmarting1962@gmail.com" class="text-reset">walmarting1962@gmail.com</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="text-white">
            <div class="text-left mt-4">
              <h4 class="text-lg uppercase font-semibold border-b-gray-200 border-b pb-2 mb-4 border-opacity-25 ">
                My Account
              </h4>
              <ul class="list-none">
                <li class="mb-2">
                  <a class="opacity-50 hover:opacity-100 " href="/login">
                    Login
                  </a>
                  <a class="opacity-50 hover:opacity-100 text-base"
                     href="/login"
                  >
                    Logout
                  </a>
                </li>
                <li class="mb-2">
                  <a class="opacity-50 hover:opacity-100 text-base"
                     href="https://wal-marting.com/purchase_history">
                    Order History
                  </a>
                </li>
                <li class="mb-2">
                  <a class="opacity-50 hover:opacity-100 text-reset"
                     href="https://wal-marting.com/wishlists">
                    My Wishlist
                  </a>
                </li>
                <li class="mb-2">
                  <a class="opacity-50 hover:opacity-100 text-light"
                     href="https://wal-marting.com/affiliate">Be an affiliate partner</a>
                </li>
              </ul>
            </div>
            <div class="text-left mt-4">
              <h4 class="text-lg uppercase font-semibold border-b-gray-200 border-b pb-2 mb-8 border-opacity-25 ">
                Be A Seller
              </h4>
              <a href="https://wal-marting.com/shops/create" class="btn bg-red-600 rounded-md text-white w-40 p-3 text-base shadow ">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-6 bg-black text-light pb-[100px] xl:pb-6">
      <div class="container mx-auto">
          <div class="flex items-center justify-end">
            <img v-bind="paymentSystem"
                 height="30" class="mw-100 h-auto" style="max-height: 30px">
          </div>
      </div>
    </section>

  </footer>
<!--  Footer Menu start here-->
    <div class="block xl:hidden w-full fixed bottom-0 bg-white shadow border-t rounded-t-md z-10" style="box-shadow: 0px -1px 10px rgb(0 0 0 / 15%)!important; ">
      <div class="w-full lg:container px-3 mx-auto flex items-center justify-between ">
        <div class="">
          <a href="https://wal-marting.com" class="flex items-center flex-col pb-2 pt-3">
            <icon name="material-symbols:house-outline-rounded" size="25px"></icon>
            <span class="text-md font-semibold">Home</span>
          </a>
        </div>
        <div class="">
          <a href="https://wal-marting.com/categories" class="flex items-center flex-col pb-2 pt-3">
            <icon name="material-symbols:view-list-sharp" size="25" class="opacity-60"></icon>
            <span class="text-md font-semibold opacity-60 ">Categories</span>
          </a>
        </div>
        <div class="">
          <a href="https://wal-marting.com/cart" class="flex items-center flex-col  ">
                <span class="text-center border-white border-4  relative top-[-25px] rounded-full w-[50px] h-[50px] bg-red-600" >
                    <icon class="text-white" name="material-symbols:shopping-bag-outline-sharp" size="35"></icon>
                </span>
            <span class=" mt-[-20px] text-base font-bold opacity-60 ">
                    Cart(<span class="cart-count">0</span>)
          </span>
          </a>
        </div>
        <div class="">
          <a href="https://wal-marting.com/all-notifications" class="flex items-center flex-col pb-2 pt-3">
            <span class="block relative px-2">
              <icon name="material-symbols:notifications" size="25"></icon>
            </span>
            <span class=" text-md font-semibold opacity-60 ">Notifications</span>
          </a>
        </div>
        <div class="">
          <a href='/userprofile/dashboard' class="flex items-center flex-col pb-2 pt-3">
                <span class="block mx-auto">
                    <img src="https://wal-marting.com/public/assets/img/avatar-place.png" class="rounded-full w-[20px]">
                </span>
            <span class="d-block fs-10 fw-600 opacity-60">Account</span>
          </a>
        </div>
      </div>
    </div>
<!--  Footer Menu End here-->
  </div>
</template>
<script setup>
import CompanyPolicy from "~/components/CompanyPolicy.vue";
const logoImage = {
  src:'/images/shopro.png',
  alt:"walmart-logo"
}
const playStoreImage = {
  src:'/images/play.png',
  alt:"playstore "
}
const appleStoreImage = {
  src:"/images/app.png",
  alt: "applestore"
}
const paymentSystem = {
  src: "/images/payment.png",
  alt: "Payment accept "
}
const logoWidth= "maxWidth:100%; height:40px"
const email = ref('')
</script>