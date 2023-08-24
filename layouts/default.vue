<template>
  <Head>
    <Title>ShoPro - {{ title }}</Title>
    <Meta name="description" :content="title" />
    <Link rel="icon" href="/images/shopro.png"></Link>
  </Head>
  <TopMenu/>
  <slot/>
  <FooterView/>
</template>
<script setup lang="ts">
import TopMenu from "~/components/TopMenu.vue";
import FooterView from "~/components/FooterView.vue";


const title = computed(() => {
  let url = useRoute().path.split('/')[1];
  return url.charAt(0).toUpperCase() + url.slice(1);
});
</script>