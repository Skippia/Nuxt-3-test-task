import type { TUser, TUserFull } from "~/types";

export async function loadAllClients() {
  const apiBaseUrl = useRuntimeConfig().public.apiBaseUrl;

  const { data, error } = await useAsyncData(
    "clients",
    () => $fetch(`${apiBaseUrl}/api/users`, {}),
    {
      transform: (data) =>
        (data as { data: TUser[] }).data.map((userData) => ({
          ...userData,
          points: 0,
        })) as Omit<TUserFull, "comment">[],
      server: true,
      lazy: false,
    },
  );

  return {
    usersData: data,
    usersErrror: error,
  };
}

export async function loadCurrentClient(
  clientId: ComputedRef<string | string[]>,
) {
  const { data, error } = await useAsyncData(
    "client",
    () =>
      $fetch(`${useRuntimeConfig().public.apiBaseUrl}/api/users`, {
        params: {
          id: clientId.value,
        },
      }),
    {
      transform: (data) =>
        ({
          ...(data as { data: TUser }).data,
          comment: "",
          points: 0,
        }) as TUserFull,
      watch: [clientId],
      server: true,
      lazy: false,
    },
  );

  return { currentUserData: data, currentUserError: error };
}
