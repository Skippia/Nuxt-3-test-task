<script setup lang="ts">
import { UserAsideCard } from '~/components/user-aside'
import type { TUser } from '~/types'

const { data: usersData, error } = await useAsyncData(
  'clients',
  () => $fetch(`${useRuntimeConfig().public.apiBaseUrl}/api/users`, {
  }),
  {
    transform: data => (data as { data: TUser[] }).data,
    server: true,
    lazy: false,
  },
)
</script>

<template>
  <ul class="w-full flex flex-col bg-white">
    <template v-if="!error">
      <UserAsideCard v-for="userData in usersData" :key="userData.id" v-bind="userData" />
    </template>

    <template v-else>
      <p class="w-fit rounded bg-red-200 p-3 text-sm text-red-900 font-bold">
        An error occurred. Reload page
      </p>
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
