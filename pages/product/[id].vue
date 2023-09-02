<template>
  <div>
    <section>
      <div class="w-full lg:container mx-auto mt-4 mb-8">
        <div class="bg-white shadow-sm rounded p-8">
          <div class="flex-col lg:flex-row lg:flex items-start justify-between gap-4">
<!--            product image start here-->
            <div class="mb-6 ">
              <div class="flex w-full">
                <div class="flex flex-col mr-4"  >
                  <div class=" border p-1 mb-2 rounded " v-for="(singleProducts, index) in singleProduct.images" :key="index" v-loading="isLoading">
                    <img loading="lazy" class=" h-[60px] " :src="singleProducts" :alt="singleProduct.title">
                  </div>
                </div>
                <div>
                  <img loading="lazy" class="img-fluid w-[450px]" :src="singleProduct.image" :alt="singleProduct.title">
                </div>
              </div>
            </div>
<!--            product image End here-->
<!--            product Details start here-->
            <div class="lg:w-3/5 full">
              <div class="text-left ">
                <h1 class="mb-2 text-lg font-semibold bg-primary text-white p-3">
                  {{ singleProduct.title }}
                </h1>
                <div class="items-center">
                  <small class="opacity-50">Sold by: </small><br>
                  <a href="" class="text-md font-medium text-yellow-600">{{
                      singleProduct.subtitle
                    }}</a>
                </div>
                <hr>
                <div class=" mt-3">
                  <div class="flex my-2 items-center">
                    <div class="opacity-50 ">Discount Price:</div>
                    <strong class="text-2xl primary">
                      <input type="number" name="price" v-model=" singleProduct.price " >$
                    </strong>
                  </div>
                  <div class="flex my-2">
                    <div class="opacity-50">Price:</div>
                    <span class="opacity-70 ml-5 line-through" >${{ singleProduct.original_price }}</span>
                  </div>
                </div>
                <hr>
                <form id="option-choice-form">
                  <!-- Quantity + Add to cart -->
                  <div class="flex items-center ">
                      <div class="opacity-50 my-2">Quantity:</div>
                      <div class="product-quantity flex items-center">
                        <div class="flex items-center ml-3">
                          <button class="btn w-6 h-6 rounded-full bg-red-100 leading-3" type="button" @click="decrement">
                            <icon name="ic:baseline-minus"></icon>
                          </button>
                          <input type="number" name="quantity" v-model="quantity"
                                 class="border-0 text-center flex-grow-1 text-xl input-number"
                                 placeholder="1" min="1" max="1000" lang="en">
                          <button class="btn  w-6 h-6 rounded-full bg-red-100 leading-3" type="button" @click="increment">
                            <icon name="ic:baseline-plus"></icon>
                          </button>
                        </div>
                        <div class="available-amount opacity-60 ml-3">
                          (<span id="available-quantity">{{ singleProduct.sales = singleProduct.original_price * singleProduct.quantity  }}</span> Pieces sold)
                        </div>
                      </div>
                  </div>
                  <hr>
                  <div class="flex items-center pb-3" id="chosen_price_div">
                    <div class="">
                      <div class="opacity-50 my-2">Total Price:</div>
                    </div>
                    <div class="">
                      <div class="product-price">
                        <strong id="chosen_price" class="text-xl primary ml-3" >{{ getTotalPrice() }}</strong>
                      </div>
                    </div>
                  </div>

                </form>

                <div class="mt-3 flex">
                  <button type="button"
                          class="btn bg-red-200 hover:bg-red-500 flex items-center font-semibold px-4 py-2 rounded-md text-red-500 hover:text-white  text-md mr-2 "
                          @click="addToCart(singleProduct)">
                    <icon name="material-symbols:shopping-bag-outline-sharp" size="20"></icon>
                    <span> Add to cart</span>
                  </button>
                  <button type="button" class="btn bg-primary font-semibold px-4 py-2 rounded-md text-white text-md"
                          @click="addToCart(singleProduct)">
                    <Icon name="material-symbols:shopping-cart-outline" size="20px" color="white"/>
                    Buy Now
                  </button>
                  <button type="button" class="btn bg-gray-200 ml-4 rounded-md px-4 py-2 hidden ">
                    Out of Stock
                  </button>
                </div>
                <div class=" mt-3">
                  <div class="flex ">
                    <!-- Add to wishlist button -->
                    <button type="button" class="btn mr-10 pl-0 hover:underline text-red-500 font-semibold"
                            @click="addToWishlist(singleProduct)">
                      Add to wishlist
                    </button>
                    <!-- Add to compare button -->
                    <button type="button" class="btn hover:underline text-red-500 font-semibold"
                            @click="compareProduct(singleProduct)">
                      Add to compare
                    </button>
                  </div>
                </div>
                <div class="mt-3">
                  <div class="">
                    <div class="opacity-50 mt-2">Service:</div>
                  </div>
                  <div class="">
                    <a href="/return-policy" target="_blank">View
                      Policy
                    </a>
                  </div>
                </div>
<!--                Social media share start here-->
                <div class=" mt-4">
                  <div class="">
                    <div class="text-black my-2">Share:</div>
                  </div>
                  <div class="">
                    <div class="aiz-share jssocials">
                      <div class="jssocials-shares flex items-center ">
                        <div
                            class="jssocials-share  bg-red-500 p-2 mr-1 rounded-sm hover:bg-red-400">
                          <a target="_self" href="#" class="jssocials-share-link leading-3">
                            <icon color="white" name="ic:baseline-facebook" size="20"></icon>
                          </a>
                        </div>
                        <div
                            class="jssocials-share bg-red-500 p-2 mr-1 rounded-sm hover:bg-red-400 ">
                          <a target="_blank" href="#" class="jssocials-share-link leading-3">
                            <icon color="white" name="mdi:gmail" size="20"></icon>
                          </a>
                        </div>
                        <div
                            class="jssocials-share bg-red-500 p-2 mr-1 rounded-sm hover:bg-red-400 ">
                          <a target="_blank" href="#" class="jssocials-share-link leading-3">
                            <icon color="white" name="mdi:twitter-circle" size="20"></icon>
                          </a>
                        </div>
                        <div
                            class="jssocials-share bg-red-500 p-2 mr-1 rounded-sm hover:bg-red-400 ">
                          <a target="_blank" href="#" class="jssocials-share-link leading-3">
                            <icon color="white" name="mdi:linkedin" size="20"></icon>
                          </a>
                        </div>
                        <div
                            class="jssocials-share bg-red-500 p-2 mr-1 rounded-sm hover:bg-red-400 ">
                          <a target="_self" href="#" class="jssocials-share-link leading-3">
                            <icon color="white" name="mdi:whatsapp" size="20"></icon>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
<!--                Social media share End here-->
              </div>
            </div>
          </div>
<!--          product Details End here-->
        </div>
      </div>
    </section>
    <section class="mb-4">
      <div class="w-full lg:container mx-auto">
        <div class="flex gap-4">
          <div class="w-1/3">
            <div class="bg-white shadow-sm mb-3">
              <div class="position-relative p-3 text-left">
                <div class="text-center border rounded p-2 mt-3">
                  <div class="rating">
                    <icon color="red" name="mdi:star"></icon>
                    <icon color="red" name="mdi:star"></icon>
                    <icon color="red" name="mdi:star"></icon>
                    <icon color="red" name="mdi:star"></icon>
                    <icon color="red" name="mdi:star-half-full"></icon>
                  </div>
                  <div class="opacity-60 text-lg">(0 customer reviews)</div>
                </div>
              </div>
              <div class="flex items-center  border-t">
                <div class="w-60">
                  <a href="#"
                     class="btn bg-red-200 hover:bg-red-500 flex items-center font-semibold px-5 py-3  text-red-500 hover:text-white  text-md">Visit Store</a>
                </div>
                <div class="w-full">
                  <ul class="social flex items-center justify-around   mb-0">
                    <li class="">
                      <a href="#"
                         class="facebook" target="_blank">
                        <icon color="skyblue" name="ic:baseline-facebook" size="30"></icon>
                      </a>
                    </li>
                    <li class="">
                      <a href="" class="google" target="_blank">
                        <icon color="pink" name="mdi:gmail" size="30"></icon>
                      </a>
                    </li>
                    <li class="">
                      <a href="" class="twitter" target="_blank">
                        <icon color="skyblue" name="mdi:twitter-circle" size="30"></icon>
                      </a>
                    </li>
                    <li class="">
                      <a href=""  target="_blank">
                        <icon color="green" name="mdi:whatsapp" size="30"></icon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- Top Selling Products Start -->
            <div class="bg-white rounded shadow-sm mb-3">
              <div class="p-3 border-b text-2xl font-semibold">
                Top Selling Products
              </div>
              <div class=" w-full overflow-y-scroll h-[900px]">
                <div class="flex flex-col">
                  <div v-for="(product , index ) in Data.BestProducts"
                      :key="index" v-loading="isLoading">
                    <div class="flex items-center p-4"  >
                      <div class="w-1/2 ">
                        <NuxtLink target="_self" :to="`/product/details?id=${product.id + '&cat_ids=' + product.category_ids}`" >
                          <img  loading="lazy" :src="product.image" :alt="product.title">
                        </NuxtLink>
                      </div>
                      <div class="w-1/2 p-3">
                        <div>
                          <h3 class="text-md font-medium text-truncate">{{ product.title }}</h3>
                        </div>
                        <div class="rating rating-sm mt-1">
                          <icon color="red" name="mdi:star"></icon>
                          <icon color="red" name="mdi:star"></icon>
                          <icon color="red" name="mdi:star"></icon>
                          <icon color="red" name="mdi:star"></icon>
                          <icon color="red" name="mdi:star-half-full"></icon>
                        </div>
                        <div class="mt-2 text-md font-semibold">
                          <span class="primary">{{ product.price }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Top Selling Products End -->
          </div>
          <div class="w-2/3">
            <!-- Product Description Start -->
            <div class="bg-white mb-3 shadow-sm rounded p-4">

              <el-tabs v-model="activeName" class="demo-tabs" >
                <el-tab-pane label="Description" name="first">
                  <div class="carousel-box c-pointer border p-1 rounded me-4 "
                       style="width: 300px; max-height:300px ; display: inline-block;"
                       v-for="(singleProducts, index) in singleProduct.images" :key="index" v-loading="isLoading">
                    <img loading="lazy" :src="singleProducts" alt="">
                  </div>
                </el-tab-pane>
                <el-tab-pane label="reviews" name="second">There have been no reviews for this product yet.</el-tab-pane>
              </el-tabs>
            </div>
            <!-- Product Description End -->
            <!-- Related products start -->
            <RelatedProduct/>
            <!-- Related products End -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import useSingleProduct from "~/composables/useSingleProduct";
import useProductList from "~/composables/useProductList";
import useUserBuyActivity from "~/composables/useUserBuyActivity";
const {
  addToCart,
  compareProduct,
  addToWishlist
} = useUserBuyActivity();
const quantity = ref('')
const price =ref('')
function increment() { quantity.value++; }
function decrement() {
  if (quantity.value > 1) {
    quantity.value--;
  }
}
 function getTotalPrice() {
  return quantity.value * price.value ;
}

const activeName = ref('first')
const {
  Data,
  isLoading
} = useProductList();

const {
  singleProduct,
} = useSingleProduct();
</script>
<style scoped>
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>