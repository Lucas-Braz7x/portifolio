import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { isNarrativeLayerEnabled } from '@/lib/feature-flags'
import { getIntensityForPathname, intensityToState } from '@/lib/narrative/route-intensity'
import type { NarrativeIntensity, NarrativeState } from '@/types/narrative'

export type NarrativeLayerSnapshot = {
  enabled: boolean
  intensity: NarrativeIntensity
  state: NarrativeState
}

export const useNarrativeLayer = (): NarrativeLayerSnapshot => {
  const { pathname } = useLocation()
  const enabled = isNarrativeLayerEnabled()

  return useMemo(() => {
    const routeIntensity = getIntensityForPathname(pathname)
    const intensity = enabled ? routeIntensity : 0

    return {
      enabled,
      intensity,
      state: intensityToState(intensity),
    }
  }, [enabled, pathname])
}
