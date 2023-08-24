<script setup>

const manageProfile = reactive({
  name: '',
  phone: '',
  file: '',
  password:'',
  confirmPassword: '',
  cashPayment: false,
  bankPayment: false,
  bankName: '',
  bankAccountName:'',
  bankAccountNumber:'',
  routingNumber:'',
  trc20:'',
  erc20:'',
  updateEmail:'',
  apiurl:'',
  clientKey:''


})
</script>

<template>
  <!--        Manage Profile start-->
  <div class="flex flex-col px-4">
    <div class="flex w-full  mb-4 ">
      <p class="font-semibold">Manage Profile</p>
    </div>
    <el-form
        :label-position="'left'"
        label-width="200px"
        :model="manageProfile"
        size="large"
        style="width: 100%"
        class="flex flex-col items-end "
    >
      <!--          Basic info start Here-->
      <div class="bg-white px-4 shadow-sm w-full  rounded-[3px]">
        <div class="card">
          <div Class="card-header p-3 border-b-[1px]">
            <h3>Basic Info</h3>
          </div>
          <div class="card-body w-full p-4 ">

            <el-form-item label="Name">
              <el-input v-model="manageProfile.name" />
            </el-form-item>
            <el-form-item label="Phone number">
              <el-input v-model="manageProfile.phone" />
            </el-form-item>
            <el-form-item label="Photo">
              <el-upload
                  v-model:file-list="fileList"
                  class="upload-demo "
                  multiple
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  :limit="3"
                  :on-exceed="handleExceed"

              >
                <el-input v-model="manageProfile.file" placeholder="Choose File" />
              </el-upload>
            </el-form-item>
            <el-form-item label="Password">
              <el-input v-model="manageProfile.password" />
            </el-form-item>
            <el-form-item label="Confirm Password">
              <el-input v-model="manageProfile.confirmPassword" />
            </el-form-item>

          </div>
        </div>
      </div>
      <!--          Basic Info end-->
      <!--          Payment setting start here-->

      <div class="bg-white px-4 mt-6 w-full shadow-sm border-[1px] border-color-gray rounded-[5px]">
        <div class="card">
          <div Class="card-header p-3 border-b-[1px]">
            <h3>Payment Setting</h3>
          </div>
          <div class="card-body w-full p-4 ">
            <el-form-item label="Instant delivery" prop="delivery">
              <el-switch v-model="manageProfile.cashPayment" />
            </el-form-item>
            <el-form-item label="Instant delivery" prop="delivery">
              <el-switch v-model="manageProfile.bankPayment" />
            </el-form-item>
            <el-form-item label="Bank Name">
              <el-input v-model="manageProfile.bankName" />
            </el-form-item>
            <el-form-item label="Bank Account Name">
              <el-input v-model="manageProfile.bankAccountName" />
            </el-form-item>
            <el-form-item label="Bank Account Number">
              <el-input v-model="manageProfile.bankAccountNumber" />
            </el-form-item>
            <el-form-item label="Bank Routing Number">
              <el-input v-model="manageProfile.routingNumber" />
            </el-form-item>
            <el-form-item label="USDT (TRC20)">
              <el-input v-model="manageProfile.trc20" />
            </el-form-item>
            <el-form-item label="USDT (ERC20)">
              <el-input v-model="manageProfile.erc20" />
            </el-form-item>
          </div>
        </div>
      </div>
      <el-form-item class=" mt-6">
        <el-button type="primary"
        >Update Profile</el-button>
      </el-form-item>
      <!--          Payment setting end here-->
    </el-form>
    <br>
    <!--      Address update start-->
    <div class="bg-white  pb-4 border-[1px] border-color-gray rounded-[5px]">
      <div class="bg-white px-4 shadow-sm mb-8 border-[1px] border-color-gray rounded-b-[5px]">
        <el-form
            :label-position="'left'"
            label-width="100px"
            :model="manageProfile"
            size="large"
            style="width: 100%"
        >
          <div class="card">
            <div Class="card-header p-3 border-b-[1px]">
              <h3>Change Your Email</h3>
            </div>

            <div class="card-body w-full  p-4 flex flex-col  items-end">
              <el-form-item label="Your Email" class="w-full">
                <el-input v-model="manageProfile.updateEmail" placeholder="Enter your email">
                  <template #append>Verify</template>
                </el-input>
              </el-form-item>
              <el-form-item class="">
                <el-button type="primary"
                >Update Email</el-button>
              </el-form-item>
            </div>
          </div>
        </el-form>
      </div>
      <div class="bg-white px-4 shadow-sm my-8 border-[1px] border-color-gray rounded-[5px]">
        <div class="card">
          <div Class="card-header p-3 border-b-[1px]">
            <h3>Caiji Key</h3>
          </div>
          <div class="card-body w-full p-4 ">
            <el-form
                :label-position="'left'"
                label-width="100px"
                :model="manageProfile"
                size="large"
                style="width: 100%"
            >
              <el-form-item label="Api Url" >
                <el-input v-model="manageProfile.apiurl" placeholder="https://shancheng2.chainbitraclo.com/" />
              </el-form-item>
              <el-form-item label="Your Key">
                <el-input v-model="manageProfile.clientKey"  placeholder="CC8764E1B08B0EDA4238A71B80807974"/>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <!--      Address update End-->
  </div>

  <!--        Manage Profile End-->
</template>

<style scoped>

</style>