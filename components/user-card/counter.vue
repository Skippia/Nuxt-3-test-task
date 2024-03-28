<script setup lang="ts">
const props = defineProps<{
  modelValue: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()
</script>

<template>
  <div class="w-full flex items-center justify-between bg-gray-300">
    <div class="user-card-counter-btn" @click="emit('update:modelValue', props.modelValue > 0 ? props.modelValue - 1 : props.modelValue)">
      <span class="i-carbon-subtract" />
    </div>

    <span class="text-base"> {{ props.modelValue }} points</span>

    <div class="user-card-counter-btn" @click="emit('update:modelValue', props.modelValue + 1)">
      <span class="i-carbon-add" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-card-counter-btn {
  @apply rounded border-2 border-gray-500 bg-white cursor-pointer text-black p-0 text-xl duration-300;
}
</style>
