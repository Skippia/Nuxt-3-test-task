<script setup lang="ts"></script>

<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="Enter username to search">
    <button type="submit" class="search-button">
      <span class="i-carbon-search text-3xl" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.search {
  @apply flex relative w-full h-40px;
}

.search-input {
  @apply w-full h-full pl-2 pr-40px rounded text-base text-start;
}

.search-button {
  @apply absolute right-2% top-0 h-full w-30px;
  @apply flex items-center justify-center;
}
</style>
