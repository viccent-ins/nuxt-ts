<script setup lang="ts">

</script>

<template>
  <div>
    <!--      Refund request start-->
    <div  class="bg-white ">
      <div class="card-header border-b-[1px] p-4">
        <h3 class="font-semibold">Applied Refund Request</h3>
      </div>
      <div class=" card-body">
        <table class="w-full flex flex-col items-center  p-5">
          <thead class="w-full">
          <tr class="flex justify-between pb-3 font-semibold  border-b-[1px]  w-full">
            <td>#</td>
            <td>Date</td>
            <td>OrderId</td>
            <td>Product</td>
            <td>Amount</td>
            <td>Status</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class=" w-full text-center  py-10">
              <icon name="fluent:emoji-20-filled" size="60" color="gray"></icon>
              <p class="text-3xl font-semibold">Nothing Found</p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!--      Refund request End-->
  </div>
</template>

<style scoped>

</style>