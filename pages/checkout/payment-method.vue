<template>
  <div>
    <CheckoutProcess/>
    <section class="mb-4" id="cart-summary">
      <div class="w-full lg:container mx-auto px-4 py-6">
        <div class="flex  gap-4">
          <div class="shadow bg-white py-3 p-lg-4 rounded w-full lg:w-3/5 ">
            <div class=" border-b py-2 px-3 font-semibold">
              <h5>Select a Payment option</h5>
            </div>
            <div>
              <el-tabs
                  v-model="activeName"
                  type="card"
                  class="demo-tabs h-60"
                  @tab-click="handleClick"
              >
                <el-tab-pane label="USDT-TRC20" name="first" class="flex items-center justify-start gap-5  px-6">
                  <img src="/images/usdt-trc20.png" alt="USDT-TRC20" class="w-40 border p-2">
                  <p>0xC28Df73Fa523b90d2F19a04393BbD11923034aB5</p>
                </el-tab-pane>
                <el-tab-pane label="USDT-ERC20" name="second" class="flex items-center justify-start gap-5  px-6">
                  <img src="/images/usdt-erc20.png" alt="USDT-ERC20" class="w-40 border p-2">
                  <p>TTH69359UjGFGASudAx4scG5kgHvz4fNp7</p>
                </el-tab-pane>
                <el-tab-pane label="Online Payment" name="third" class="flex items-center justify-start gap-5  px-6">
                  <img src="/images/paypal-visa-card.jpg" alt="" class="w-60 border p-2">
                  <p>Please contact online customer service</p>
                </el-tab-pane>
              </el-tabs>
            </div>
            <hr>
            <div class="flex flex-col items-center py-8">
              <div class="flex ">
                <p class="text-md opacity-60 font-semibold">Your wallet balance:</p>
                <h5 class="ml-2 font-semibold text-lg ">$0.00</h5>
              </div>
              <el-button class="mt-3" size="large" type="info">Insufficient balance</el-button>
            </div>
          </div>
          <div class=" shadow bg-white py-3 w-full lg:w-2/5">
            <div class=" flex px-3 border-b pb-3 justify-between">
              <h5 class="text-md font-semibold">Summary</h5>
              <el-button type="primary">Danger</el-button>
            </div>
            <div class="flex flex-col px-3 pb-6">
              <div class=" flex  px-2 justify-between border-b py-3">
                <h5 class=" text-md font-semibold">Product</h5>
                <h5 class=" text-md font-semibold">Total</h5>
              </div>
              <div class=" flex  px-2 justify-between border-b py-3">
                <p>Aroma Housewares Aroma 6 Cups (Cooked) 1.5 Qt. One Touch Rice Cooker, White (ARC-363NG), 6 Cups Cooked/3 Cups Uncooked/1.5 Qt. × 2</p>
                <h6 class=" text-md font-semibold">$43.20</h6>
              </div>
              <div class=" flex  px-2 justify-between border-b py-3">
                <h5 class=" text-md font-semibold">Subtotal</h5>
                <p class=" text-md font-semibold">$43.20</p>
              </div>
              <div class=" flex  px-2 justify-between border-b py-3">
                <h5 class=" text-md font-semibold">Tax</h5>
                <p class=" text-md font-semibold">$0.00</p>
              </div>
              <div class=" flex  px-2 justify-between border-b py-3">
                <h5 class=" text-md font-semibold">Total shipping</h5>
                <p class=" text-md font-semibold">$0.00</p>
              </div>
              <div class=" flex  px-2 justify-between border-b py-3">
                <h5 class=" text-md font-semibold">Total</h5>
                <p class=" text-md font-semibold">$43.20</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center py-6 justify-between ">
          <div class="order-1 flex flex-col">
           <div class=" flex items-center ">
             <el-checkbox v-model="agree" label="I agree to the " />
             <a class=" primary ml-2" href="#">terms and conditions,</a>
             <a class=" primary ml-2" href="#">return policy</a> "&"
             <a class=" primary ml-2" href="#">privacy policy</a>
           </div>
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
const activeName = ref('first')
const agree = ref(true)
const handleClick = () => {
}
</script>

<style scoped>
.demo-tabs {
  padding: 0;
  color: #6b778c;

  font-weight: 600;
}
</style>