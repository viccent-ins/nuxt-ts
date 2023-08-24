<template>
<div>
  <section class="mb-4" id="cart-summary">
    <div class="w-full lg:container mx-auto px-4">
      <div class="flex justify-between w-full py-6">
        <div>
          <h3 class="text-2xl font-bold">Compare</h3>
        </div>
        <div>
          <ul class="flex items-center">
            <li>
              <nuxt-link to="/" class="font-semibold">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/compare" class=" font-bold primary">/ "Compare"</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="  bg-white rounded-sm shadow p-4">
        <div class="flex items-center py-6 justify-between w-full border-b-[1px] ">
          <div class="order-1 ">
            <p>Comparison</p>
          </div>
          <div class="order-2 block ">
            <button class="btn bg-red-100 hover:bg-red-500 font-bold px-3 py-2 text-primary hover:text-white rounded-md" >Reset compare list</button>
          </div>
        </div>
        <div class=" my-4">
          <table class="border-[1px] flex flex-col   justify-between w-full">
            <thead>
              <tr class="flex justify-between text-left  items-center border-b-[1px] ">
                <th class="w-2/5 px-2" >Name</th>
                <th class="w-3/5 border-l-[2px] p-2">Product Title</th>
              </tr>
            </thead>
            <tbody class="flex flex-col justify-between w-full ">
              <tr class="flex justify-between text-left  items-center border-b-[1px]">
                <th class="w-2/5 px-2">Image</th>
                <td class="w-3/5 p-2 border-l-[2px]"><img class="w-full" src="https://wal-marting.com/public/uploads/all/RJ00gJwWg2NjBQgNJrUjyaf09G2qRZ4xjLPEJeyy.jpg" alt=""></td>
              </tr>
              <tr class="flex justify-between text-left  items-center border-b-[1px]">
                <th class="w-2/5 px-2 ">Price</th>
                <td class="w-3/5 p-2 primary font-bold  border-l-[2px]">30.96 <span>$</span></td>
              </tr>
              <tr class="flex justify-between text-left  items-center border-b-[1px]">
                <th class="w-2/5 p-2">Brand</th>
                <td class="w-3/5 p-2 border-l-[2px]"></td>
              </tr>
              <tr class="flex justify-between text-left  items-center border-b-[1px]">
                <th class="w-2/5 px-2">Category</th>
                <td class="w-3/5 p-2 border-l-[2px]">Home decoration</td>
              </tr>
              <tr class="flex justify-between w-full   border-b-[1px]">
                <th class="w-2/5 "></th>
                <td class="w-3/5 border-l-[2px] flex justify-center p-2 ">
                  <button type="button"
                          class="btn bg-red-200 hover:bg-red-500 flex items-center font-semibold px-4 py-2 rounded-md text-red-500 hover:text-white  text-md mr-2 "
                          @click="addToCart(product)">
                    <icon name="material-symbols:shopping-bag-outline-sharp" size="20"></icon>
                    <span> Add to cart</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </section>
</div>
</template>
<script setup>

</script>