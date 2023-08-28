<template>
<div>
  <!--          Basic info start Here-->
  <el-form
      :label-position="'top'"
      label-width="100px"
      style="width:100%"
  >
  <div class="bg-white px-4 shadow-sm w-full  rounded-[3px]">
    <div class="card">
      <div Class="card-header p-3 border-b-[1px]">
        <h3>Basic Info</h3>
      </div>
      <div class="card-body w-full p-4 ">

        <el-form-item label="Shop Name" >
          <el-input  v-model="merchantForm.shopName" />
        </el-form-item >
        <el-form-item label="Email Address">
          <el-input v-model="merchantForm.emailAddress" />
        </el-form-item>
        <el-form-item label="ID photo Front">
          <input type="file" id="myfile" name="myfile" class="border w-full">
        </el-form-item>
          <el-form-item label="ID photo Reverse">
            <input type="file" id="myfile" name="myfile" class="border w-full">
          </el-form-item>
          <el-form-item label="ID photo">
            <input type="file" id="myfile" name="myfile" class="border w-full">
          </el-form-item>
      </div>
    </div>
  </div>
    <div>
        <h5 class="py-4 font-semibold">Invitation code</h5>
        <el-form-item  size="large">
          <el-input  />
        </el-form-item >
    </div>
      <el-form-item >
        <el-button size="large" type="primary" >Register Your Shop</el-button>
      </el-form-item>


  <!--          Basic Info end-->
  </el-form>
</div>
</template>
<script setup lang="ts">
const merchantForm = reactive ({
  shopName: '',
  emailAddress: '',


})
</script>
<style scoped>

</style>