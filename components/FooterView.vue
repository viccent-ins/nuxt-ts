<template>
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
                        class="

                    p-3
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                        placeholder="Enter your email"
                    />
                  <button type="submit" class="btn bg-red-600 rounded-md text-white w-40 p-3 text-base">Subscribe</button>
                </form>
              </div>
              <div class="mx-auto ">
                <a href="https://wal-marting.com" target="_blank" class="block mr-3 ml-0">
                  <img src="https://wal-marting.com/public/assets/img/play.png" class="max-w-3xl h-40px">
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
                     <a href="mailto:walmarting1962@gmail.com"
                         class="text-reset">walmarting1962@gmail.com</a>
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
              <ul class="list-unstyled">
                <li class="mb-2">
                  <a class="opacity-50 hover:opacity-100 "
                     href="/login"

                  >
                    Login
                  </a>
                  <a class="opacity-50 hover:opacity-100 text-reset"
                     href="/login"

                  >
                    Logout
                  </a>
                </li>
                <li class="mb-2">
                  <a class="opacity-50 hover:opacity-100 text-reset"
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
            <img src="https://wal-marting.com/public/uploads/all/2pa1XwhAPf2KPeCw45Xxyv1M6aZo1ZfsJP2YZOvR.png"
                 height="30" class="mw-100 h-auto" style="max-height: 30px">
          </div>
      </div>
    </section>

  </footer>
  <FooterMenu/>
</template>
<script setup>
import FooterMenu from "~/components/FooterMenu.vue";
const logoImage = {
  src:'/images/shopro.png',
  alt:"walmart-logo"
}
const logoWidth= "maxWidth:100%; height:40px"
const email = ref('')
</script>