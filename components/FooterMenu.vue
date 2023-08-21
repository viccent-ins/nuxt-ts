<template>
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
        <a href="https://wal-marting.com/users/login" class="flex items-center flex-col pb-2 pt-3">
                <span class="block mx-auto">
                    <img src="https://wal-marting.com/public/assets/img/avatar-place.png" class="rounded-full w-[20px]">
                </span>
          <span class="d-block fs-10 fw-600 opacity-60">Account</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>