import type { TUpdatedUserCardEvent } from '~/types'

export const useGlobalState = createGlobalState(
  () => {
    // State
    const updatedUserCardEvents = ref([] as TUpdatedUserCardEvent[])

    // Actions
    const popUpdatedUserCardEvent = () => updatedUserCardEvents.value.pop()
    const pushUpdatedUserCardEvent = (newEvent: TUpdatedUserCardEvent) => {
      const idx = updatedUserCardEvents.value.findIndex(e => e.id === newEvent.id)

      if (idx !== -1)
        updatedUserCardEvents.value[idx] = newEvent

      else
        updatedUserCardEvents.value.push(newEvent)
    }

    return { updatedUserCardEvents, popUpdatedUserCardEvent, pushUpdatedUserCardEvent }
  },
)
