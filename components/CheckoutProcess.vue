<template>
  <section class="pt-5 mb-4">
    <div class="w-full lg:container mx-auto px-4 py-6">
      <div class="flex items-center justify-between w-full">
        <nuxt-link
            to="/cart"
            exact-active-class="text-red-500"
            class="flex flex-col items-center w-full"
        >
          <icon name="material-symbols:shopping-cart-rounded" size="35" class="opacity-60"></icon>
          <h4 class="text-md font-semibold ">1.My Cart</h4>
        </nuxt-link>
        <icon name="material-symbols:arrow-forward-ios" size="150" class="opacity-40"></icon>
        <nuxt-link
            to="/checkout/shipping-info"
            exact-active-class="text-red-500"
            class="flex flex-col items-center w-full"
        >
          <icon name="material-symbols:map" size="35" class="opacity-60"></icon>
          <h4 class="text-md font-semibold">2.Shipping info</h4>
        </nuxt-link>
        <icon name="material-symbols:arrow-forward-ios" size="150" class="opacity-40"></icon>
        <nuxt-link
            to="/checkout/delivery-info"
            exact-active-class="text-red-500"
            class="flex flex-col items-center w-full"
        >
          <icon name="material-symbols:local-shipping-rounded" size="35" class="opacity-60"></icon>
          <h4 class="text-md font-semibold">3.Delivery info</h4>
        </nuxt-link>
        <icon name="material-symbols:arrow-forward-ios" size="150" class="opacity-40"></icon>
        <nuxt-link
            to="/checkout/payment-method"
            exact-active-class="text-red-500"
            class="flex flex-col items-center w-full"
        >
          <icon
              name="material-symbols:credit-card-outline-sharp"
              size="35"
              class="opacity-60"
          ></icon>
          <h4 class="text-md font-semibold">4.Payment</h4>
        </nuxt-link>
        <icon name="material-symbols:arrow-forward-ios" size="150" class="opacity-40"></icon>
        <nuxt-link
            to="/checkout/order-confirmed"
            exact-active-class="text-red-500"
            class="flex flex-col items-center w-full"
        >
          <icon name="material-symbols:check-circle" size="35" class="opacity-60"></icon>
          <h4 class="text-md font-semibold">5.Confirmation</h4>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>