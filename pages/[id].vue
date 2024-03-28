<script setup lang="ts">
import { UserCard } from '~/components'
import type { TUser } from '~/types'

const route = useRoute()
const clientId = computed(() => route.params.id)

const { data } = await useAsyncData(
  'client',
  () => $fetch(`${useRuntimeConfig().public.apiBaseUrl}/api/users`, {
    params: {
      id: clientId.value,
    },
  }),
  {
    transform: data => (data as { data: TUser }).data,
    watch: [clientId],
    server: true,
    lazy: false,
  },
)
</script>

<template>
  <div class="grid w-full place-items-center text-2xl font-bold">
    <UserCard v-bind="data!" />
  </div>
</template>

<style lang="scss" scoped></style>
