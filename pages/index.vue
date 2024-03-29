<script setup lang="ts">
import type { ClientOnly } from "#build/components";
import { breakpoints } from "~/composables";

definePageMeta({
  layout: "aside",
});

const isLargerThanPhone = breakpoints.greaterOrEqual("tablet");
</script>

<template>
  <ClientOnly>
    <div
      :class="{ 'w-full': isLargerThanPhone, 'w-0 hidden': !isLargerThanPhone }"
      class="grid place-items-center text-2xl font-bold"
    >
      Select a client
    </div>
  </ClientOnly>
</template>
