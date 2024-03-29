<script setup lang="ts">
import type { TUserFull } from '~/types'

const props = defineProps<Omit<TUserFull, 'comment'>>()
const route = useRoute()

const isCurrentActiveLink = computed(() => String(props.id) === String(route.params.id))
</script>

<template>
  <NuxtLink :to="`/${props.id}`" :class="{ 'bg-gray-400': isCurrentActiveLink }" class="w-full flex items-center justify-start gap-x-10 border-b-1 border-b-gray-500/50 px-5 py-3 duration-300 hover:(bg-gray-300)">
    <span class="text-2xl text-black font-extrabold">{{ props.points }}</span>
    <p class="text-base text-black font-medium">
      {{ props.first_name }} {{ props.last_name }}
    </p>
    <span class="i-carbon-chevron-right ml-auto text-2xl text-blue-600" />
  </NuxtLink>
</template>

<style lang="scss" scoped>
</style>
