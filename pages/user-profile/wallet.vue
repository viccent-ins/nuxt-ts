<script setup lang="ts">

</script>

<template>
<!--  wallet start here-->
  <div class="flex flex-col px-4">
    <div class="flex w-full  mb-6 ">
      <p class="font-semibold">My Wallet</p>
    </div>
    <div class="flex justify-between items-center gap-4 ">
      <div class="bg-grad-1 w-1/3  text-white rounded-md grow">
        <div  class="p-4 flex flex-col items-center">
          <div class="w-10 h-10 rounded-full bg-pink-500 flex justify-center items-center">
            <icon name="mdi:currency-usd" color="white" size="30"></icon>
          </div>
          <h3 class="text-white text-2xl font-bold py-1">$0.00</h3>
          <p class=" text-md opacity-40">Wallet Balance</p>
        </div>
      </div>
      <div class=" w-1/3 bg-white hover:shadow-md transition duration-100 rounded-md grow">
        <div  class="p-4 flex flex-col items-center">
          <icon name="material-symbols:add-circle" size="70" color="gray"></icon>
          <h3 class="primary text-2xl">Offline Recharge Wallet</h3>
        </div>
      </div>
      <div class=" w-1/3 bg-white hover:shadow-md transition duration-100 rounded-md grow">
        <div  class="p-4 flex flex-col items-center">
          <icon name="material-symbols:add-circle" size="70" color="gray"></icon>
          <h3 class="primary text-2xl">Send Withdraw Request</h3>
        </div>
      </div>
    </div>
    <div class="bg-white mt-8 ">
      <div class="card-header border-b-[1px] p-4">
        <h3 class="font-semibold">Wallet Recharge History</h3>
      </div>
      <div class=" card-body">
        <table class="w-full flex flex-col items-center  p-5">
          <thead class="w-full">
          <tr class="flex justify-between pb-3 font-semibold  border-b-[1px]  w-full">
            <td>#</td>
            <td>Data</td>
            <td>Amount</td>
            <td>Payment method</td>
            <td>approval</td>
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
    <div class="bg-white mt-8 ">
      <div class="card-header border-b-[1px] p-4">
        <h3 class="font-semibold">Withdraw Recharge History</h3>
      </div>
      <div class=" card-body">
        <table class="w-full flex flex-col items-center  p-5">
          <thead class="w-full">
          <tr class="flex justify-between pb-3 font-semibold  border-b-[1px]  w-full">
            <td>#</td>
            <td>Data</td>
            <td>Amount</td>
            <td>Status</td>
            <td>Message</td>
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
  <!--      wallet End here-->
</template>

<style scoped>
.bg-grad-1 {
  background-color: #eb4786;
  background-image: linear-gradient(315deg, #eb4786 0%, #b854a6 74%);
}
</style>