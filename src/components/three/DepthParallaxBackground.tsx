import { useEffect, useRef, useState } from 'react'

import { usePrefersStaticScene } from '@/hooks/usePrefersStaticScene'
import { isSceneParallaxEnabled } from '@/lib/feature-flags'
import { getSceneTexture } from '@/lib/scene/assets'
import { mountDepthParallax } from '@/lib/scene/depth-parallax-gl'

const MAX_SHIFT = 0.035
const POINTER_STRENGTH = 0.022
const SCROLL_STRENGTH = 0.00008

const lerp = (from: number, to: number, alpha: number): number =>
  from + (to - from) * alpha

export const DepthParallaxBackground = () => {
  const prefersStatic = usePrefersStaticScene()
  const parallaxEnabled = isSceneParallaxEnabled()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [webGlFailed, setWebGlFailed] = useState(false)

  const background = getSceneTexture('room-background')
  const depth = getSceneTexture('room-depth')
  const colorUrl = background?.path ?? '/scene/room-background.svg'
  const depthUrl = depth?.path ?? '/scene/room-depth.svg'

  const useStaticFallback = prefersStatic || !parallaxEnabled || webGlFailed

  useEffect(() => {
    if (useStaticFallback) return

    const canvas = canvasRef.current
    if (!canvas) return

    let handle: Awaited<ReturnType<typeof mountDepthParallax>> = null
    let frameId = 0
    let pointerX = 0
    let pointerY = 0
    let scrollX = 0
    let currentX = 0
    let currentY = 0

    const onPointerMove = (event: PointerEvent) => {
      const nx = (event.clientX / window.innerWidth - 0.5) * 2
      const ny = (event.clientY / window.innerHeight - 0.5) * 2
      pointerX = nx * POINTER_STRENGTH
      pointerY = -ny * POINTER_STRENGTH
    }

    const onScroll = () => {
      const scrollMax = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      )
      const progress = window.scrollY / scrollMax
      scrollX = (progress - 0.5) * SCROLL_STRENGTH * scrollMax
    }

    const tick = () => {
      const targetX = pointerX + scrollX
      const targetY = pointerY
      currentX = lerp(currentX, targetX, 0.08)
      currentY = lerp(currentY, targetY, 0.08)
      const clampedX = Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, currentX))
      const clampedY = Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, currentY))
      handle?.setShift(clampedX, clampedY)
      frameId = window.requestAnimationFrame(tick)
    }

    void mountDepthParallax(canvas, {
      colorUrl,
      depthUrl,
      onFallback: () => setWebGlFailed(true),
    }).then((mounted) => {
      if (!mounted) return
      handle = mounted
      onScroll()
      window.addEventListener('pointermove', onPointerMove, { passive: true })
      window.addEventListener('scroll', onScroll, { passive: true })
      frameId = window.requestAnimationFrame(tick)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', onScroll)
      handle?.dispose()
    }
  }, [colorUrl, depthUrl, useStaticFallback])

  if (useStaticFallback) {
    return (
      <div
        className="scene-parallax scene-parallax--static"
        style={{ backgroundImage: `url(${colorUrl})` }}
        aria-hidden="true"
      />
    )
  }

  return (
    <canvas
      ref={canvasRef}
      className="scene-parallax__canvas"
      aria-hidden="true"
    />
  )
}
