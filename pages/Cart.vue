<template>
<div>
  <section class=" pt-5 mb-4  ">
    <div class="w-full lg:container  flex-col lg:flex-row lg:flex items-start  mx-auto px-4 py-6">
      <div class="flex items-center justify-between w-full ">
        <div class="flex flex-col items-center w-full">
          <icon name="material-symbols:shopping-cart-rounded" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">1.My Cart</h4>
        </div>
        <div  class="flex flex-col items-center w-full ">
          <icon name="material-symbols:map" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">2.Shipping info</h4>
        </div>
        <div  class="flex flex-col items-center w-full">
          <icon name="material-symbols:local-shipping-rounded" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">3.Delivery info</h4>
        </div>
        <div class="flex flex-col items-center w-full">
          <icon name="material-symbols:credit-card-outline-sharp" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">4.Payment</h4>
        </div>
        <div class="flex flex-col items-center w-full">
          <icon name="material-symbols:check-circle" color="red" size="35" class="opacity-80"></icon>
          <h4 class="text-md font-semibold">5.Confirmation</h4>
        </div>
      </div>
    </div>
  </section>
  <section class="mb-4" id="cart-summary">
    <div class="w-full lg:container  flex-col lg:flex-row lg:flex items-start  mx-auto px-4">
      <div class="">
        <div class=" mx-auto">
          <div class="shadow bg-white p-3 p-lg-4 rounded ">
            <div class="mb-4 ">
              <div class="flex border-b justify-between items-center mb-3 py-5">
                <div class="w-1/2 font-bold">Product</div>
                <div class="w-1/2 flex justify-between items-center">
                  <div class="font-bold">Price</div>
                  <div class="font-bold">Tax</div>
                  <div class="font-bold">Quantity</div>
                  <div class="font-bold">Total</div>
                  <div class="font-bold">Remove</div>
                </div>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item px-0 px-lg-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center w-1/2">
                        <span class="mr-2 ml-0">
                           <img src="https://wal-marting.com/public/uploads/all/M3EEXPWLt8xD0m2UT7fONnA9rK4QBuITXJbCRqWN.jpg"
                                class="w-60 rounded"
                                alt="VEHHE Under Cabinet Paper Towel Holder, One Hand Operable Paper Towel Holder Wall Mount with Damping Effect, Self-Adhesive or Drilled for Kitchen, Bathroom. (Silver)">
                        </span>
                      <span class="text-base  opacity-60">VEHHE Under Cabinet Paper Towel Holder, One
                       Hand Operable Paper Towel Holder Wall Mount with Damping Effect,
                        Self-Adhesive or Drilled for Kitchen, Bathroom. (Silver)
                      </span>
                    </div>
                    <div class="w-1/2 flex justify-between items-center">
                      <div class=" order-1  my-3 ">
                        <span class="text-md font-semibold">$21.36</span>
                      </div>
                      <div class="order-2  my-3 ">
                        <span class="text-md font-semibold">$0.00</span>
                      </div>
                      <div class="order-3 my-3">
                        <span class="fw-600 fs-16 text-primary">$21.36</span>
                      </div>
                      <div class=" order-4 ">
                        <div class="flex items-center ml-2">
                          <button class="btn w-8 h-8 rounded-full bg-red-100 leading-3" type="button" @click="decrement">
                            <icon name="ic:baseline-minus"></icon>
                          </button>
                          <input type="number" name="quantity" v-model="quantity"
                                 class="border-0 text-center flex-grow-1 text-xl input-number"
                                 placeholder="1" min="1" max="1000" lang="en">
                          <button class="btn  w-8 h-8 rounded-full bg-red-100 leading-3" type="button" @click="increment">
                            <icon name="ic:baseline-plus"></icon>
                          </button>
                        </div>
                      </div>
                      <div class="order-5">
                        <button  onclick="removeFromCartView()"
                           class="btn  w-8 h-8 rounded-full bg-red-100 leading-3 hover:bg-red-500 transition duration-150 ease-out hover:ease-in ">
                          <icon name="material-symbols:delete-outline" size="15"></icon>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="px-3 py-4 mb-4 border-t flex justify-between">
              <span class="font-bold text-sm block ">Sub Total</span>
              <span class="font-bold text-sm">$21.36</span>
            </div>
            <div class="flex items-center py-6 justify-between ">
              <div class="order-1 ">
                <a href="/" class="btn primary font-bold hover:underline">
                  <icon name="material-symbols:arrow-back-rounded"></icon>
                  Return to shop
                </a>
              </div>
              <div class="order-2 block ">
                <button class="btn bg-primary font-bold px-3 py-2 text-white rounded-md" onclick="showCheckoutModal()">Continue to
                  Shipping</button>
              </div>
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
