import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { UserSearchSortedModeEnum } from '~/constants'

export function useAsideLayout(route: RouteLocationNormalizedLoaded) {
  const isLargerThanPhone = breakpoints.greaterOrEqual('tablet')
  const isClientMobilePage = computed(() => route.name === 'id' && !isLargerThanPhone.value)

  const searchString = ref('')

  const sortingMode = ref(UserSearchSortedModeEnum.STANDARD)

  //
  const filterString = ref('')
  function updateFilterString(newFilterString: string) {
    filterString.value = newFilterString.toLowerCase().trim()
  }

  //
  const isSearchVisible = ref(true)
  function updateSearchVisibility(shouldSearchVisible: boolean) {
    isSearchVisible.value = shouldSearchVisible
  }

  return { isClientMobilePage, searchString, filterString, isSearchVisible, sortingMode, updateFilterString, updateSearchVisibility }
}
