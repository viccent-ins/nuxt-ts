<template>
  <div>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about"> About</NuxtLink>
    <NuxtPage></NuxtPage>
  </div>
<!--    <div class="container mx-auto">-->
<!--        <Header />-->
<!--        <main class="p-5 mt-10">-->
<!--          <div class="flex justify-center">-->
<!--          <div class="shadow-lg rounded-xl w-full md:w-[600px] pb-5">-->
<!--            <h1 class="text-2xl text-center pt-5">រូបមន្តម្សៅ</h1>-->
<!--            <el-form-->
<!--                ref="ruleFormRef"-->
<!--                label-position="top"-->
<!--                status-icon-->
<!--                class="px-10 py-5"-->
<!--            >-->
<!--                <el-form-item label="ចំនួនម្សៅក្នុងគីឡូ">-->
<!--                    <el-input v-model="amountOfKg" type="number"/>-->
<!--                </el-form-item>-->
<!--            </el-form>-->
<!--            <div class="px-5 grid grid-cols-1 gap-5">-->
<!--                <div class="border">-->
<!--                    <div class="text-2xl text-orange-400 my-2 text-center">ម្សៅសរ</div>-->
<!--                    -->
<!--                    <div class="flex gap-10 px-10 mb04 items-center justify-between">-->
<!--                        <div class="text-md">មេនំប៉ាវ៖</div> -->
<!--                        <div>-->
<!--                            <span class="text-xl text-orange-400 text-end">{{ data.main * amountOfKg }}</span><small>ស្លាបព្រា</small>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="flex gap-10 px-10 items-center justify-between">-->
<!--                        <div class="text-md">ស្ករសរ</div> -->
<!--                        <div>-->
<!--                            <span class="text-xl text-orange-400 text-end">{{ data.sugar * amountOfKg }}</span><small>ក្រាម</small>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="flex gap-10 px-10 items-center justify-between">-->
<!--                        <div class="text-md">អំបិល</div> -->
<!--                        <div>-->
<!--                            <span class="text-xl text-orange-400 text-end">{{ data.salt * amountOfKg }}/6</span><small>ស្លាបព្រា</small>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="flex gap-10 px-10 items-center justify-between">-->
<!--                        <div class="text-md">ខ្លាញ់</div> -->
<!--                        <div class="stacked-fractions">-->
<!--                            <span class="text-xl text-orange-400 text-end ">{{ data.oil * amountOfKg }}/6</span><small>កំពុង</small>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="flex gap-10 px-10 items-center justify-between">-->
<!--                        <div class="text-md">ទឹក</div> -->
<!--                        <div>-->
<!--                            <span class="text-xl text-orange-400 text-end">{{ parseFloat(data.water*amountOfKg).toFixed(2) }}</span><small>កំពុង</small>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="border">-->
<!--                    <div class="text-2xl text-orange-400 my-2 text-center">ម្សៅឡឹកតយ</div>-->
<!--                    -->
<!--                    <div class="text-2xl text-orange-400 my-2 text-center">ម្សៅសរ</div>-->
<!--                    -->
<!--                    <div class="flex gap-10 px-10 mb04 items-center justify-between">-->
<!--                        <div class="text-md">មេនំប៉ាវ៖</div> -->
<!--                        <div>-->
<!--                            <span class="text-xl text-orange-400 text-end">{{ data.main * amountOfKg }}</span><small>ស្លាបព្រា</small>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="flex gap-10 px-10 items-center justify-between">-->
<!--                        <div class="text-md">ស្ករសរ</div> -->
<!--                        <div>-->
<!--                            <span class="text-xl text-orange-400 text-end">{{ data.sugar * amountOfKg }}</span><small>ក្រាម</small>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="flex gap-10 px-10 items-center justify-between">-->
<!--                        <div class="text-md">អំបិល</div> -->
<!--                        <div>-->
<!--                            <span class="text-xl text-orange-400 text-end">{{ data.salt * amountOfKg }}/6</span><small>ស្លាបព្រា</small>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="flex gap-10 px-10 items-center justify-between">-->
<!--                        <div class="text-md">ខ្លាញ់</div> -->
<!--                        <div class="stacked-fractions">-->
<!--                            <span class="text-xl text-orange-400 text-end ">{{ data.oil * amountOfKg }}/6</span><small>កំពុង</small>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="flex gap-10 px-10 items-center justify-between">-->
<!--                        <div class="text-md">ទឹក</div> -->
<!--                        <div>-->
<!--                            <span class="text-xl text-orange-400 text-end">{{ parseFloat(data.water*amountOfKg).toFixed(2) }}</span><small>កំពុង</small>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="flex gap-10 px-10 items-center justify-between">-->
<!--                        <div class="text-md">ម្សៅដូង</div> -->
<!--                        <div>-->
<!--                            <span class="text-xl text-orange-400 text-end">{{ data.whitePowder * amountOfKg }}/3</span><small>ស្លាបព្រា</small>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="flex gap-10 px-10 items-center justify-between">-->
<!--                        <div class="text-md">លាក់</div> -->
<!--                        <div>-->
<!--                            <span class="text-xl text-orange-400 text-end">{{ data.paint * amountOfKg }}/3</span><small>កំរោប</small>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            </div> -->
<!--        </div>-->
<!--        </main>-->
<!--    </div>-->
</template>

<script setup lang="ts">
const amountOfKg = ref(1);
const data = {
    main: 2,
    sugar: 3,
    salt: 1,
    whitePowder: 1,
    paint: 1,
    oil: 1,
    water: 0.84
};
</script>

<style scoped>
.el-divider--vertical {
    height: 3rem;
}
</style>