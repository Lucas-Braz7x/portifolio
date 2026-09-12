import { useEffect } from 'react'

import { useNarrativeLayer } from '@/hooks/useNarrativeLayer'

/** Syncs route-based narrative intensity to `<html>` data attributes (spec 11). */
export const NarrativeLayer = () => {
  const { enabled, intensity, state } = useNarrativeLayer()

  useEffect(() => {
    const root = document.documentElement
    root.dataset.narrativeIntensity = String(intensity)
    root.dataset.narrativeState = state

    if (enabled) {
      delete root.dataset.narrativeDisabled
    } else {
      root.dataset.narrativeDisabled = 'true'
    }
  }, [enabled, intensity, state])

  return null
}
