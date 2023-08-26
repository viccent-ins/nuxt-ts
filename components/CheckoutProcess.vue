<script setup lang="ts">

</script>

<template>
  <section class=" pt-5 mb-4  ">
    <div class="w-full lg:container mx-auto px-4 py-6">
      <div class="flex items-center justify-between w-full ">
        <nuxt-link to="/cart" class="flex flex-col items-center w-full">
          <icon name="material-symbols:shopping-cart-rounded" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">1.My Cart</h4>
        </nuxt-link>
        <nuxt-link to="/checkout/shipping-info"  class="flex flex-col items-center w-full ">
          <icon name="material-symbols:map" color="" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">2.Shipping info</h4>
        </nuxt-link>
        <nuxt-link to="/checkout/delivery-info"  class="flex flex-col items-center w-full">
          <icon name="material-symbols:local-shipping-rounded" color="" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">3.Delivery info</h4>
        </nuxt-link>
        <nuxt-link to="/checkout/payment-method" class="flex flex-col items-center w-full">
          <icon name="material-symbols:credit-card-outline-sharp" color="" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">4.Payment</h4>
        </nuxt-link>
        <nuxt-link to="/checkout/order-confirmed" class="flex flex-col items-center w-full">
          <icon name="material-symbols:check-circle" color="" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">5.Confirmation</h4>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>