<template>
<div>
  <div class="w-full lg:container mx-auto p-4">
     <div class="flex gap-5 w-full">
       <div class="w-1/4">
         <div class="bg-white shadow rounded-sm ">
           <div class="flex flex-col">
             <div class="user bg-primary rounded-sm">
               <div class=" flex flex-col justify-center items-center p-4">
                 <img class=" w-32 h-32 rounded-full " src="/images/avatar.png" alt="Avater Photo">
                 <h3 class="text-white font-bold text-lg">Black Adam</h3>
                 <p class=" text-white font-semibold text-md">User ID</p>
               </div>
             </div>
             <div class="user-settings">
               <div>
                 <ul class="bg-white py-6 px-3">
                   <li class="p-3 bg-red-200 rounded-sm">
                     <NuxtLink to="" class=" flex gap-4 items-center ">
                       <icon name="material-symbols:home-outline-rounded" size="20" color="red"></icon>
                       <h5 class="font-semibold text-md ">Dashboard</h5>
                     </NuxtLink>
                   </li>
                   <li class="p-3 hover:bg-red-200 rounded-sm">
                     <NuxtLink to="/user-profile/purchase-history" class=" flex gap-4 items-center ">
                       <icon name="material-symbols:event-note-outline" size="20" color="red"></icon>
                       <h5 class="font-semibold text-md ">Purchase History</h5>
                     </NuxtLink>
                   </li>
                   <li class="p-3 hover:bg-red-200 rounded-sm" >
                     <nuxt-link to="/user-profile/refund-request" class=" flex gap-4 items-center ">
                       <icon name="mdi:cash-refund" size="20" color="red"></icon>
                       <h5 class="font-semibold text-md ">Sent Refund Request</h5>
                     </nuxt-link>
                   </li>
                   <li class="p-3 hover:bg-red-200 rounded-sm">
                     <nuxt-link to="/user-profile/classified-product" class=" flex gap-4 items-center ">
                       <icon name="mdi:diamond-stone" size="20" color="red"></icon>
                       <h5 class="font-semibold text-md ">Classified Products</h5>
                     </nuxt-link>
                   </li>
                   <li class="p-3 hover:bg-red-200 rounded-sm" >
                     <nuxt-link to="/user-profile/wallet" class=" flex gap-4 items-center ">
                       <icon name="ic:sharp-wallet" size="20" color="red"></icon>
                       <h5 class="font-semibold text-md ">My Wallet</h5>
                     </nuxt-link>
                   </li>
                   <li class="p-3 hover:bg-red-200 rounded-sm" >
                     <nuxt-link to="/user-profile/support-ticket" class=" flex gap-4 items-center ">
                       <icon name="material-symbols:support-agent" size="20" color="red"></icon>
                       <h5 class="font-semibold text-md ">Support Ticket</h5>
                     </nuxt-link>
                   </li>
                   <li class="p-3 hover:bg-red-200 rounded-sm" >
                     <nuxt-link to="/user-profile/update-profile" class=" flex gap-4 items-center ">
                       <icon name="iconamoon:profile-fill" size="20" color="red"></icon>
                       <h5 class="font-semibold text-md ">Manage Profile</h5>
                     </nuxt-link>
                   </li>
                 </ul>
               </div>
             </div>
             <nuxt-link to="/user-profile/merchant-registration" class="seller p-3 bg-red-200 hover:bg-red-500 hover:text-white text-center font-semibold primary ">
               <h5>Be A Seller</h5>
             </nuxt-link>
           </div>
         </div>
       </div>
       <div class="w-3/4">
          <NuxtPage/>
       </div>
     </div>
  </div>
</div>
</template>
<script setup >

</script>
<style scoped>
</style>