<template>

    <div>
      <LazyNuxtLayout name="front-site">
          <NuxtPage/>
      </LazyNuxtLayout>
    </div>
<!--  <div>-->
<!--    <PortfolioComponent/>-->
<!--  </div>-->
</template>
<script setup lang="ts">
  // const store = useStore();
  // import { t } from '@/i18n';
  // const displayLang = computed(() => {
  //   let lang = t('khmer');
  //   if (store.locale === 'en') {
  //     lang = t('english');
  //   } return lang;
  // });
  // const switchLocale = async (locale = 'kh') => {
  //   await store.updateLocale('updateLocale');
  //   window.location.reload();
  // };
</script>
<style scoped >

</style>

