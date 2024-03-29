<script setup lang="ts">
const props = defineProps<{
  isActiveClients: boolean
}>()

const emit = defineEmits<{
  (e: 'updateSearchVisibility', value: boolean): void
}>()
</script>

<template>
  <div div class="w-full flex items-center justify-center rounded bg-gray-300 p-1">
    <div class="user-aside-tab" :class="{ 'user-aside-tab--active': props.isActiveClients }" @click="emit('updateSearchVisibility', true)">
      Clients
    </div>
    <div class="user-aside-tab" :class="{ 'user-aside-tab--active': !props.isActiveClients }" @click="emit('updateSearchVisibility', false)">
      Rating
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-aside-tab {
  @apply px-4 py-2 cursor-pointer text-sm bg-gray-300 duration-300;
  @apply border-2 rounded w-full;
  @apply text-black font-bold text-center;

  &--active {
    @apply bg-white;
  }
}
</style>
