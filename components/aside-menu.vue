<script setup lang="ts">
import { breakpoints } from '~/composables'

const isLargerThanPhone = breakpoints.greaterOrEqual('tablet')

const isMenuActive = ref(true)

function toggleAsideMenu() {
  isMenuActive.value = !isMenuActive.value
}
</script>

<template>
  <aside class="aside-menu relative" :class="{ 'translate-x--100% max-w-0': !isMenuActive, 'min-w-25vw': isMenuActive }">
    <button v-if="isLargerThanPhone" class="absolute right-0 top-3 translate-x-100% bg-blue-300 px-2 py-3" @click="toggleAsideMenu">
      <span class="text-2xl font-medium" :class="{ 'i-carbon-chevron-left': isMenuActive, 'i-carbon-chevron-right': !isMenuActive }" />
    </button>

    <template v-if="isMenuActive">
      <div class="w-full flex flex-col items-center justify-center gap-y-4 bg-blue-300 p-3">
        <slot name="tabs" />
        <slot name="search" />
      </div>

      <slot name="content" />
    </template>
  </aside>
</template>

<style lang="scss" scoped>
.aside-menu {
  @apply bg-white duration-150;
  @apply flex flex-col items-start gap-y-3;
  width: max(25vw, 768px);
}
</style>
