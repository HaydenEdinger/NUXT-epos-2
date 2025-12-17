<script setup lang="ts">
// This sets up SEO metadata and title templates
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - EPOS` : 'EPOS';
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>