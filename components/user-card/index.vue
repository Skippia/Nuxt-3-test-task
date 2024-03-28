<script setup lang="ts">
import { UserCardCounter } from '.'
import type { TUser } from '~/types'

const props = defineProps<TUser>()
const fullName = computed(() => `${props.first_name} ${props.last_name}`)
const points = ref(0)
</script>

<template>
  <section class="flex flex-col items-center gap-y-3 rounded-lg bg-white p-6 shadow-md hover:bg-gray-50 hover:shadow-lg">
    <div class="flex flex-col items-center justify-center gap-x-6 lg:flex-row">
      <img class="h-25 w-25 rounded-xl sm:(h-35 w-35)" :src="props.avatar" alt="User Image">

      <div class="flex flex-col gap-y-1">
        <p class="text-xl text-black font-bold sm:text-2xl">
          {{ fullName }}
        </p>
        <p class="text-sm text-black sm:text-base">
          {{ props.email }}
        </p>

        <UserCardCounter v-model="points" class="my-3" />

        <textarea class="my-3 h-60px w-full resize-none border-2 border-gray/500 rounded p-2 text-base sm:h-80px" />
      </div>
    </div>

    <button
      type="button"
      class="font-me inline-block w-1/2 rounded bg-blue-600 px-4 py-2 text-center text-sm text-white font-medium font-medium hover:bg-blue-700"
    >
      Save
    </button>
  </section>
</template>

<style lang="scss" scoped></style>
