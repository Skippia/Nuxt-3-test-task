import { UserSearchSortedModeEnum } from '~/constants'
import type { TUser, TUserFull } from '~/types'

export function buildFilterAndSortedUsersData(props: { filterString: string, sortingMode: UserSearchSortedModeEnum }, usersData: Ref<Omit<TUserFull, 'comment'>[] | null>) {
  const filteredUsersData = computed(
    () => usersData.value
      ?.filter(userData => `${userData.first_name}${userData.last_name}`.toLowerCase().trim().includes(props.filterString)),
  )

  const filteredAndSortedUsersData = computed(
    () => props.sortingMode === UserSearchSortedModeEnum.STANDARD
      ? filteredUsersData.value
      : filteredUsersData.value?.toSorted((a, b) => b.points - a.points),
  )

  return { filteredAndSortedUsersData }
}
