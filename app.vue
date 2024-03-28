<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: appName,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
