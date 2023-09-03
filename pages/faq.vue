<template>
  <div >
      <section class="pt-4 mb-4">
        <div class="w-full lg:container  flex-col lg:flex-row lg:flex items-start  mt-5 mx-auto px-4 py-6">
          <div class="flex justify-between w-full">
            <div>
              <h3 class="text-lg font-bold">Frequently Asked Question</h3>
            </div>
            <div>
              <ul class="flex items-center">
                <li>
                  <nuxt-link to="/" class="font-semibold">Home</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/faq" class=" font-bold primary">/ "FAQ"</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="mb-44">
        <div class="w-full lg:container  flex-col lg:flex-row lg:flex items-start  mt-5 mx-auto px-4 py-6">
          <div class="p-4 bg-white rounded shadow overflow-hidden">
            <ul class="list-none mt-4 p-4 ">
              <li
                  class="mb-6"
                  v-for="(FrequentlyAskedQuestion , index ) in FrequentlyAskedQuestions"
                  :key="index"
              >
                <h3 class="text-xl font-bold mb-4 ">{{ FrequentlyAskedQuestion.title }}</h3>
                <p>{{ FrequentlyAskedQuestion.content }}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
  </div>
</template>
<script setup >
import useFaq from "~/composables/useFaq";
const {
  FrequentlyAskedQuestions
} = useFaq();
</script>