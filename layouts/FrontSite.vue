<template>
  <Head>
    <Title>Nuxt3App - {{ title }}</Title>
    <Meta name="description" :content="title" />
    <Link rel="icon" href="images/logo.png"></Link>
  </Head>
  <HeaderComponent/>
  <MenuComponent/>
  <slot/>
</template>
<script setup lang="ts">
const title = computed(() => {
  let url = useRoute().path.split('/')[1];
  return url.charAt(0).toUpperCase() + url.slice(1);
});
</script>