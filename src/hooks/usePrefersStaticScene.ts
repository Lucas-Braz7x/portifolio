import { useEffect, useState } from 'react'

import { useReducedMotion } from '@/hooks/useReducedMotion'

const NARROW_VIEWPORT_QUERY = '(max-width: 768px)'

/** Spec 14: sem parallax em mobile ou prefers-reduced-motion. */
export const usePrefersStaticScene = (): boolean => {
  const reducedMotion = useReducedMotion()
  const [isNarrowViewport, setIsNarrowViewport] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(NARROW_VIEWPORT_QUERY).matches
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia(NARROW_VIEWPORT_QUERY)
    const sync = () => setIsNarrowViewport(mediaQuery.matches)
    sync()
    mediaQuery.addEventListener('change', sync)
    return () => mediaQuery.removeEventListener('change', sync)
  }, [])

  return reducedMotion || isNarrowViewport
}
