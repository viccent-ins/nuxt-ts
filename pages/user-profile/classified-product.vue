<script setup lang="ts">

</script>

<template>
  <!--      Classified Products start-->
  <div  class="flex flex-col px-4">
    <div class="flex w-full  mb-4 ">
      <p class="font-semibold">Products</p>
    </div>
    <div class="flex justify-between items-center gap-4 ">
      <div class="bg-grad-1 w-1/3  text-white rounded-md grow">
        <div  class="p-4 flex flex-col items-center">
          <div class="w-10 h-10 rounded-full bg-red-200 flex justify-center items-center"><icon name="ic:outline-file-upload" color="white" size="30"></icon></div>
          <h3 class="text-white text-2xl font-bold py-1">0</h3>
          <p class=" text-md opacity-40">Remaining Upload</p>
        </div>
      </div>
      <div class=" w-1/3 bg-white hover:shadow-md transition duration-100 rounded-md grow">
        <div  class="p-4 flex flex-col items-center">
          <icon name="material-symbols:add-circle" size="70" color="gray"></icon>
          <h3 class="primary text-2xl">Add New Product</h3>
        </div>
      </div>
      <div class=" w-1/3 bg-white hover:shadow-md primary rounded-md grow">
        <div class="p-4 flex flex-col items-center">
          <icon name="iconoir:emoji-sad" size="30" color="primary"></icon>
          <h3 class="py-1">No Package Found</h3>
          <a href="#">
            <button type="button" class=" hover:bg-red-500 hover:text-white transition duration-50 border-[1px] border-red-600 primary px-4 py-2 text-sm rounded-md">Upgrade Package</button>
          </a>
        </div>
      </div>
    </div>
    <div class="bg-white mt-6 ">
      <div class="card-header border-b-[1px] p-4">
        <h3 class="font-semibold"></h3>
      </div>
      <div class=" card-body">
        <table class="w-full flex flex-col items-center  p-5">
          <thead class="w-full">
          <tr class="flex justify-between pb-3 font-semibold  border-b-[1px]  w-full">
            <td>#</td>
            <td>Name</td>
            <td>Price</td>
            <td>Available Status</td>
            <td>Admin Status</td>
            <td>option</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class=" w-full text-center  py-10">
              <icon name="iconoir:emoji-sad" size="60" color="gray"></icon>
              <p class="text-3xl font-semibold">Nothing Found</p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!--      Classified Products start-->
</template>

<style scoped>
.bg-grad-1 {
  background-color: #eb4786;
  background-image: linear-gradient(315deg, #eb4786 0%, #b854a6 74%);
}
</style>