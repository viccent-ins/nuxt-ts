<template>
    <div class="flex justify-center items-center gap-5">
        <NuxtLink :to="localePath('/')">Home</NuxtLink>
        <NuxtLink :to="localePath('/about')">About</NuxtLink>
    </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>

