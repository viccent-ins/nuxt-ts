<script setup lang="ts">

</script>

<template>
  <!--          Support Ticket start here-->
  <div class="flex flex-col px-4">
    <div class="flex w-full  mb-6 ">
      <p class="font-semibold">Support Ticket</p>
    </div>
    <div class="flex justify-center items-center mx-auto ">

      <div class=" w-1/3 px-20 py-4 bg-white hover:shadow-md transition duration-100 rounded-md grow">
        <div  class="p-4 flex flex-col items-center">
          <icon name="material-symbols:add-circle" size="70" color="gray"></icon>
          <h3 class="primary text-2xl">Create A Ticket</h3>
        </div>
      </div>

    </div>
    <div class="bg-white mt-8 ">
      <div class="card-header border-b-[1px] p-4">
        <h3 class="font-semibold">Tickets</h3>
      </div>
      <div class=" card-body">
        <table class="w-full flex flex-col items-center  p-5">
          <thead class="w-full">
          <tr class="flex justify-between pb-3 font-semibold  border-b-[1px]  w-full">
            <td>Ticket ID</td>
            <td>Sending Data</td>
            <td>Subject</td>
            <td>Status</td>
            <td>options</td>
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
  <!--          Support Ticket End here-->
</template>

<style scoped>

</style>