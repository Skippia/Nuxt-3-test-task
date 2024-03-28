import { useBreakpoints } from '@vueuse/core'

export const breakpoints = useBreakpoints({
  phone: 375,
  smallTablet: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  smallScreen: 1536,
  screen: 1920,
})
