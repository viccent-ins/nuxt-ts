<template>
  <div>
    <CheckoutProcess/>
    <section class="mb-4" id="cart-summary">
      <div class="w-full lg:container mx-auto px-4 py-6">
        <div class="shadow bg-white py-3 p-lg-4 rounded ">
          <div>This is payment method</div>
        </div>
        <div class="flex items-center py-6 justify-between ">
          <div class="order-1 ">
            <a href="/public" class="btn primary font-bold hover:underline">
              <icon name="material-symbols:arrow-back-rounded"></icon>
              Return to shop
            </a>
          </div>
          <div class="order-2 block ">
            <button class="btn bg-primary font-bold px-3 py-2 text-white rounded-md">Continue to
              Shipping</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>

</script>

<style scoped>

</style>