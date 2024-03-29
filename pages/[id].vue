<script setup lang="ts">
import { UserCard } from '~/components'
import { useGlobalState } from '~/store'
import { loadCurrentClient } from '~/helpers/api'

definePageMeta({
  layout: 'aside',
})

const route = useRoute()
const clientId = computed(() => route.params.id)

const { currentUserData } = await loadCurrentClient(clientId)
const { mergeUserData, loadCurrentCommentAndPointsFromLC, updatePointsForCurrentUserData, updateCommentForCurrentUserData } = useClientId(currentUserData)

const { pushUpdatedUserCardEvent } = useGlobalState()
function saveUserCard({ comment, points }: { comment: string, points: number }) {
  updatePointsForCurrentUserData(points)
  updateCommentForCurrentUserData(comment)

  // Notify aside-menu about updated user card
  pushUpdatedUserCardEvent({
    id: currentUserData.value!.id,
    points,
  })
}

watch(currentUserData, (newCurrentUserData) => {
  if (newCurrentUserData) {
    loadCurrentCommentAndPointsFromLC()
    mergeUserData()
  }
}, {
  immediate: true,
})
</script>

<template>
  <div v-if="currentUserData" class="grid w-full place-items-center text-2xl font-bold">
    <ClientOnly>
      <UserCard v-bind="currentUserData" @save-user-card="saveUserCard" />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped></style>
