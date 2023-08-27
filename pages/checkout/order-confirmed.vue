<template>
  <div>
    <CheckoutProcess/>
    <section class="mb-4" id="cart-summary">
      <div class="w-full lg:container mx-auto px-4 py-6">
        <div class="text-center mb-6">
          <icon name="material-symbols:heart-check-rounded" color="green" size="50"></icon>
          <h3 class="text-3xl font-semibold py-3">Thank you for your order</h3>
          <p class="text-md opacity-60">A copy or order summery has been sent to your Email</p>
        </div>
        <div class="shadow bg-white py-3 p-lg-4 rounded ">
          <div class="px-6 py-3 font-bold ">
            <h5>Order Summary</h5>
          </div>
          <div class="flex justify-between gap-6 px-6">
            <div  class="w-1/2 ">
              <div class="flex justify-between border-t py-2 ">
                <h5 class="font-semibold">Order date</h5>
                <p class="text-md " >27-8-2023 19.28</p>
              </div>
              <div class="flex justify-between border-t py-2">
                <h5 class="font-semibold">Name:</h5>
                <p class="text-md" >Mohammad Abdul Quaiyum</p>
              </div>
              <div class="flex justify-between border-t py-2">
                <h5 class="font-semibold">Email:</h5>
                <p class="text-md" >blackadam2000kh@gmail.com</p>
              </div>
              <div class="flex justify-between border-t py-2 ">
                <h5 class="font-semibold">Shipping Address</h5>
                <p class="w-60 h-28 ">25 house number 2nd floor road-8 sector-4, west toroto, canada</p>
              </div>
            </div>
            <div class="w-1/2">
              <div class="flex justify-between border-t py-2">
                <h5 class="font-semibold">Order Status</h5>
                <p class="text-md" >Pending</p>
              </div>
              <div class="flex justify-between border-t py-2">
                <h5 class="font-semibold">Total order amount:</h5>
                <p class="text-md">$2560</p>
              </div>
              <div class="flex justify-between border-t py-2">
                <h5 class="font-semibold">Shipping:</h5>
                <p  class="text-md">Flat shipping rate</p>
              </div>
              <div class="flex justify-between border-t py-2 ">
                <h5 class="font-semibold">Payment Method</h5>
                <p class="w-60 h-28 ">Please Contact online</p>
              </div>
            </div>
          </div>
        </div>
        <div class="shadow bg-white py-3 p-lg-4 rounded mt-8  pb-8">
          <div class=" flex items-center justify-center py-10 w-full">
            <h5 class="text-lg font-semibold">Order-Code :</h5>
            <h5 class="primary text-xl font-bold">20230827-19284084</h5>
          </div>
          <div class="flex flex-col px-4">
            <div class=" px-6 font-semibold text-lg mb-2">
              <h5>Order Details</h5>
            </div>
            <div class="flex px-4 py-3 border-t border-b">
              <div class="w-1/2 flex justify-start gap-8 font-bold">
                <p>#</p>
                <p>Product</p>
              </div>
              <div class="w-1/2 flex justify-between font-bold">
                <p>Variation</p>
                <p>Quantity</p>
                <p>Delivery Type</p>
                <p>Price</p>
              </div>
            </div>
            <div class="flex px-4 py-3 h-24">
              <div class="w-1/2 flex justify-start gap-8 ">
                <p>1</p>
                <p>PLUM Catgirl Shokura ~Temporary Dressup~ 1/7 Scale PVC Painted Finished Action Figure PF200</p>
              </div>
              <div class="w-1/2 flex justify-between ">
                <p>Kitchen items</p>
                <p>2</p>
                <p>Home delivary</p>
                <p>48.30$</p>
              </div>
            </div>
          </div>
          <div class="flex w-full px-6">
            <div class="w-1/2"></div>
              <div class="w-1/2">
                <div class="flex justify-between border-t py-2">
                  <h5 class="font-semibold">Subtotal</h5>
                  <p class="text-md" >$2552.00</p>
                </div>
                <div class="flex justify-between border-t py-2">
                  <h5 class="font-semibold">Shipping</h5>
                  <p class="text-md">$0.00</p>
                </div>
                <div class="flex justify-between border-t py-2">
                  <h5 class="font-semibold">Tex</h5>
                  <p  class="text-md">$0.00</p>
                </div>
                <div class="flex justify-between border-t py-2 ">
                  <h5 class="font-semibold">Coupon Discount</h5>
                  <p class="text-md">$0.00</p>
                </div>
                <div class="flex justify-between border-t py-2 ">
                  <h5 class="font-semibold">Total</h5>
                  <p class="text-md ">$2552.00</p>
                </div>
              </div>
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