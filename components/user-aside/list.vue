<script setup lang="ts">
import { buildFilterAndSortedUsersData } from './helpers'
import { useManagePointsLC } from './composables'
import { loadAllClients } from '~/helpers/api'
import { UserAsideCard } from '~/components/user-aside'
import type { UserSearchSortedModeEnum } from '~/constants'
import { useGlobalState } from '~/store'

const props = defineProps<{
  /**
   * Lowercased & trimmed
   */
  filterString: string
  sortingMode: UserSearchSortedModeEnum
}>()

const { usersData, usersErrror } = await loadAllClients()
const { loadAndMergeAllPointsFromLC } = useManagePointsLC(usersData)
const { updatedUserCardEvents, popUpdatedUserCardEvent } = useGlobalState()
const { filteredAndSortedUsersData } = buildFilterAndSortedUsersData(props, usersData)

watch(usersData, (newUsersData) => {
  if (newUsersData)
    loadAndMergeAllPointsFromLC()
}, {
  immediate: true,
})

watch(updatedUserCardEvents.value, () => {
  const lastUpdatedUserCardEvent = popUpdatedUserCardEvent()

  if (lastUpdatedUserCardEvent) {
    const targetUserData = usersData.value?.find(userData => userData.id === lastUpdatedUserCardEvent.id)
    if (targetUserData)
      targetUserData.points = lastUpdatedUserCardEvent.points
  }
})
</script>

<template>
  <ul class="w-full flex flex-col bg-white">
    <template v-if="!usersErrror">
      <ClientOnly>
        <UserAsideCard v-for="userData in filteredAndSortedUsersData" :key="userData.id" v-bind="userData" />
      </ClientOnly>
    </template>

    <template v-else>
      <p class="w-fit rounded bg-red-200 p-3 text-sm text-red-900 font-bold">
        An error occurred. Reload page
      </p>
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
