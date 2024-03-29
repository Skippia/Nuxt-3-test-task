import type { TUserFull, TUserMiscellaneous } from '~/types'

export function useClientId(currentUserData: Ref<TUserFull | null>) {
  const usersDataStateLC = ref([] as TUserMiscellaneous[])
  const currentComment = ref('')
  const currentPoints = ref(0)

  function loadCurrentCommentAndPointsFromLC(
  ) {
    // 1. Load data from LC
    usersDataStateLC.value = useLocalStorage('usersDataMiscellaneous', [] as TUserMiscellaneous[]).value
    const targetUserDataLC = usersDataStateLC.value?.find(userMiscellaneous => userMiscellaneous.id === currentUserData.value?.id)

    // 2. Set current comment and points
    if (targetUserDataLC) {
      currentComment.value = targetUserDataLC.comment
      currentPoints.value = targetUserDataLC.points
    }
  }
  function updatePointsForCurrentUserData(newPointsVal: number) {
    if (!currentUserData.value)
      return

    const idx = usersDataStateLC.value?.findIndex(userMiscellaneous => userMiscellaneous.id === currentUserData.value?.id)

    // 1. Update in-memory UsersData
    currentUserData.value.points = newPointsVal

    // 2. Update in LC
    if (idx === -1) {
      usersDataStateLC.value.push({
        id: currentUserData.value.id,
        comment: currentUserData.value.comment,
        points: newPointsVal,
      })
    }
    else {
      usersDataStateLC.value[idx].points = newPointsVal
    }
  }

  function updateCommentForCurrentUserData(newCommentVal: string) {
    if (!currentUserData.value)
      return

    const idx = usersDataStateLC.value?.findIndex(userMiscellaneous => userMiscellaneous.id === currentUserData.value?.id)

    // 1. Update in-memory UsersData
    currentUserData.value.comment = newCommentVal

    // 2. Update in LC
    if (idx === -1) {
      usersDataStateLC.value.push({
        id: currentUserData.value.id,
        comment: newCommentVal,
        points: currentUserData.value.points,
      })
    }
    else {
      usersDataStateLC.value[idx].comment = newCommentVal
    }
  }

  function mergeUserData() {
    // Check if current user card exists in local storage (LC)
    const userMiscellaneous = usersDataStateLC.value?.find(userMiscellaneous => userMiscellaneous.id === currentUserData.value?.id)

    // User from LC and from API exist
    if (userMiscellaneous && currentUserData.value) {
      currentUserData.value.comment = userMiscellaneous.comment ?? ''
      currentUserData.value.points = userMiscellaneous.points ?? 0
    }
  }

  return { usersDataStateLC, loadCurrentCommentAndPointsFromLC, updatePointsForCurrentUserData, updateCommentForCurrentUserData, mergeUserData }
}
