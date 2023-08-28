<template>
<div>
  <CheckoutProcess/>
  <section class="mb-4" id="cart-summary">
    <div class="w-full lg:container mx-auto px-4 py-6">
      <div class="shadow bg-white py-3 p-lg-4 rounded ">
            <div class="flex flex-col justify-between">
              <div class="border-b p-3 font-semibold ">
                <h4>The Lucky Shop Products</h4>
              </div>
              <div class="flex gap-4 items-center p-4">
                <img class=" w-44" src="http://file.shopro.top/uploads/20210519/ea9590d9a47a101b70d4ee4972250ab6.jpeg" alt="">
                <h5 class="font-semibold text-md">Canon/佳能1500D 单反相机 18-55mm防抖套机 EOS 入门级 蚂蚁摄影</h5>
              </div>
              <div class="flex p-4 justify-around items-center gap-4">
                <h5 class="text-md font-semibold">Choose Delivery Type</h5>
                <div class=" border flex p-3 rounded-md w-80">
                   <el-radio-group v-model="ruleForm.resource">
                     <el-radio label="Home Delivery" />
                   </el-radio-group>
                </div>
              </div>
            </div>
      </div>
      <div class="flex items-center py-6 justify-between ">
        <div class="order-1 ">
          <nuxt-link to="/public" class="btn primary font-bold hover:underline">
            <icon name="material-symbols:arrow-back-rounded"></icon>
            Return to shop
          </nuxt-link>
        </div>
        <nuxt-link to="/checkout/payment-method" class="order-2 block ">
          <button class="btn bg-primary font-bold px-3 py-2 text-white rounded-md">Continue to
            Payment</button>
        </nuxt-link>
      </div>
    </div>
  </section>
</div>
</template>
<script setup >
const ruleForm = reactive({
  resource: '',
})
</script>
<style scoped>

</style>