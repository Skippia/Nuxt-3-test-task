<script setup lang="ts">
import type { TUser } from '~/types'

const props = defineProps<TUser>()
</script>

<template>
  <NuxtLink :to="`/${props.id}`" class="w-full flex items-center justify-start gap-x-10 border-b-1 border-b-gray-500/50 px-5 py-3 duration-300 hover:(bg-gray-300)">
    <span class="text-2xl text-black font-extrabold">{{ props.id }}</span>
    <p class="text-base text-black font-medium">
      {{ props.first_name }} {{ props.last_name }}
    </p>
    <span class="i-carbon-chevron-right ml-auto text-2xl text-blue-600" />
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
