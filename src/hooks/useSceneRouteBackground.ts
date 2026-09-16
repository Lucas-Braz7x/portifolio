import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useMatch } from 'react-router-dom'

import { useDocumentScrollProgress } from '@/hooks/useDocumentScrollProgress'
import { usePrefersStaticScene } from '@/hooks/usePrefersStaticScene'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { isSceneParallaxEnabled } from '@/lib/feature-flags'
import { getSceneBackgroundForPathname } from '@/lib/scene/route-backgrounds'
import type {
  SceneBackgroundMotion,
  SceneBackgroundScene,
  SceneRouteBackgroundSnapshot,
} from '@/types/scene-background'

const TRANSITION_MS = 850
const POINTER_PAN = 1.35
const SCROLL_PAN_Y = 2.5
const BASE_SCALE = 1.04

export const useSceneRouteBackground = (): SceneRouteBackgroundSnapshot => {
  const { pathname } = useLocation()
  const isHome = Boolean(useMatch({ path: '/', end: true }))
  const prefersStatic = usePrefersStaticScene()
  const parallaxEnabled = isSceneParallaxEnabled()
  const reducedMotion = useReducedMotion()
  const scrollProgress = useDocumentScrollProgress(isHome)

  const current = useMemo(
    () => getSceneBackgroundForPathname(pathname),
    [pathname],
  )

  const lastSceneRef = useRef<SceneBackgroundScene>(current)
  const [previous, setPrevious] = useState<SceneBackgroundScene | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  const motionEnabled = parallaxEnabled && !prefersStatic && !reducedMotion

  useEffect(() => {
    if (!motionEnabled) return

    const onPointerMove = (event: PointerEvent) => {
      const nx = (event.clientX / window.innerWidth - 0.5) * 2
      const ny = (event.clientY / window.innerHeight - 0.5) * 2
      setPointer({ x: nx, y: ny })
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [motionEnabled])

  useEffect(() => {
    const prev = lastSceneRef.current
    if (prev.id === current.id) return

    const startId = window.setTimeout(() => {
      setPrevious(prev)
      setIsTransitioning(true)
      lastSceneRef.current = current
    }, 0)

    const endId = window.setTimeout(() => {
      setPrevious(null)
      setIsTransitioning(false)
    }, TRANSITION_MS)

    return () => {
      window.clearTimeout(startId)
      window.clearTimeout(endId)
    }
  }, [current])

  const motion: SceneBackgroundMotion = useMemo(() => {
    if (!motionEnabled) {
      return {
        panXPercent: 0,
        panYPercent: 0,
        scale: 1,
        breatheEnabled: false,
      }
    }

    const panXPercent = pointer.x * POINTER_PAN
    const scrollPan = isHome ? (scrollProgress - 0.5) * SCROLL_PAN_Y : 0
    const panYPercent = -pointer.y * POINTER_PAN + scrollPan

    return {
      panXPercent,
      panYPercent,
      scale: BASE_SCALE,
      breatheEnabled: true,
    }
  }, [isHome, motionEnabled, pointer.x, pointer.y, scrollProgress])

  return {
    current,
    previous,
    isTransitioning,
    motion,
  }
}
