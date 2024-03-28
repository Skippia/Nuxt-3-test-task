<script setup lang="ts">
import { AsideMenu } from '~/components'
import { UserAsideList, UserAsideSearch, UserAsideTabs } from '~/components/user-aside'
import { breakpoints } from '~/composables'

const isLargerThanPhone = breakpoints.greaterOrEqual('tablet')
const route = useRoute()

const isClientMobilePage = computed(() => route.name === 'id' && !isLargerThanPhone.value)
</script>

<template>
  <main class="h-full min-h-100vh flex bg-gray-300">
    <ClientOnly>
      <NuxtLink v-if="isClientMobilePage" class="absolute left-0 top-0 flex items-center justify-start gap-x-4 rounded bg-white p-3 text-base text-black font-medium duration-300" to="/">
        <span class="i-carbon-chevron-left text-2xl" />
        Back
      </NuxtLink>

      <AsideMenu v-else class="h-full w-full">
        <template #tabs>
          <UserAsideTabs is-active-clients />
        </template>

        <template #search>
          <UserAsideSearch />
        </template>

        <template #content>
          <UserAsideList />
        </template>
      </AsideMenu>
    </ClientOnly>
    <slot />
  </main>
</template>

<style lang="scss" scoped></style>
