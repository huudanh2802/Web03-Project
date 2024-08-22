<script setup lang="ts">
// defineProps<{
//   link: String,
// )>()
defineProps<{
  link: string;
  linkName: string;
}>();
</script>

<template>
  <div class="flex flex-col">
    <slot />
    <NuxtLink :to="link">{{ linkName }}</NuxtLink>
  </div>
</template>
