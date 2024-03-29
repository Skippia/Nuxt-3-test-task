import type { TUserFull, TUserMiscellaneous } from "~/types";

export function useManagePointsLC(
  usersData: Ref<Omit<TUserFull, "comment">[] | null>,
) {
  const usersDataStateLC = ref([] as TUserMiscellaneous[]);

  function loadAndMergeAllPointsFromLC() {
    // 1. Load data from LC
    usersDataStateLC.value = useLocalStorage(
      "usersDataMiscellaneous",
      [] as TUserMiscellaneous[],
    ).value;

    // 2. Merge points
    usersDataStateLC.value?.forEach((userDataLC) => {
      const targetUserData = usersData.value?.find(
        (userData) => userData.id === userDataLC.id,
      );

      if (targetUserData) targetUserData.points = userDataLC.points ?? 0;
    });
  }

  return { loadAndMergeAllPointsFromLC };
}
