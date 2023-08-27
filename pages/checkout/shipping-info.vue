<template>
<div>
  <CheckoutProcess/>
  <section class="mb-4" id="cart-summary">
    <div class="w-full lg:container mx-auto px-4 py-6">
      <div class="shadow bg-white p-3 p-lg-4 rounded ">
        <div>
            <div class="border w-96 h-28 rounded-lg  flex flex-col justify-center items-center mx-auto" @click="checkOutFormPopUP = true">
              <icon name="material-symbols:add" size="30"></icon>
              <div>Add New Address</div>
            </div>
          <el-dialog
              v-model="checkOutFormPopUP"
              title="New Address"
              width="30%"
              destroy-on-close
          >
            <hr class="mt-[-10px]">
            <div style="margin: 20px" />
            <el-form
                model="ruleForm"
                label-width="200px"
                label-position="left"
            >
              <el-form-item label="Receiver Name" prop="name">
                <el-input v-model="ruleForm.name"  placeholder="Enter your Name"/>
              </el-form-item>
              <el-form-item label="Phone Number" prop="phoneNumber">
                <el-input v-model="ruleForm.phoneNumber" placeholder="Enter Your Phone Number" />
              </el-form-item>
              <el-form-item label="Country" prop="country">
                <el-input v-model="ruleForm.region" />
              </el-form-item>
              <el-form-item label="State Name" prop="state">
                <el-input v-model="ruleForm.state" />
              </el-form-item>
              <el-form-item label="City" prop="city">
                <el-input v-model="ruleForm.city" />
              </el-form-item>
              <el-form-item label="Address" prop="address">
                <el-input v-model="ruleForm.address" type="textarea"  placeholder="Your Address"/>
              </el-form-item>
              <el-form-item label="Set as the default address" prop="defaultAddress">
                <el-switch v-model="ruleForm.defaultAddress" />
              </el-form-item>
            </el-form>
            <template #footer>
            <span class="dialog-footer">
                  <el-button type="primary" @click="checkOutFormPopUP = false">
                    Save
                  </el-button>
            </span>
            </template>
          </el-dialog>
        </div>
        <div class="flex w-full justify-between gap-4">
          <div class="flex-1 border flex p-3 rounded-md max-h-40 ">
            <el-radio  />
            <div class=" ">
              <p>{{ ruleForm.name  }}</p>
              <p>{{ ruleForm.phoneNumber }}</p>
              <p>{{ ruleForm.region }}</p>
              <p>{{ ruleForm.state }}</p>
              <p>{{ ruleForm.city }}</p>
              <p>{{ ruleForm.address }}</p>
            </div>
          </div>
          <div class="flex-1">
            <div class="border h-40 max-h-40 rounded-lg  flex flex-col justify-center items-center mx-auto" @click="checkOutFormPopUP = true">
              <icon name="material-symbols:add" size="30"></icon>
              <div>Add New Address</div>
            </div>
          </div>
        </div>
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
<script setup >
const checkOutFormPopUP = ref(false)
const ruleForm =  reactive({
  name:'',
  phoneNumber:'',
  region: '',
  state: '',
  city: '',
  address:'',
  defaultAddress: 'false',
  resource:''
})
</script>
<style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
</style>