import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { useDocumentScrollProgress } from '@/hooks/useDocumentScrollProgress'
import { sceneRouteStrategy, getScenePoseForPathname } from '@/lib/scene/scene-routes'
import type { SceneRoutePose, SceneVec3 } from '@/types/scene-routes'

const addVec3 = (a: SceneVec3, b: SceneVec3, scale = 1): SceneVec3 => [
  a[0] + b[0] * scale,
  a[1] + b[1] * scale,
  a[2] + b[2] * scale,
]

const blendPose = (
  base: SceneRoutePose,
  scrollProgress: number,
): SceneRoutePose => {
  if (!base.scroll || scrollProgress <= 0) {
    return base
  }

  const t = Math.min(Math.max(scrollProgress, 0), 1)

  return {
    ...base,
    camera: {
      ...base.camera,
      position: addVec3(base.camera.position, base.scroll.position, t),
      lookAt: addVec3(base.camera.lookAt, base.scroll.lookAt, t),
    },
  }
}

export const useSceneRoutePose = (): SceneRoutePose => {
  const { pathname } = useLocation()
  const isHome = normalizeHome(pathname)
  const scrollProgress = useDocumentScrollProgress(
    isHome && sceneRouteStrategy.homeScrollBlend,
  )

  return useMemo(() => {
    const pose = getScenePoseForPathname(pathname)
    return isHome ? blendPose(pose, scrollProgress) : pose
  }, [isHome, pathname, scrollProgress])
}

const normalizeHome = (pathname: string): boolean => {
  const path =
    pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return path === '/'
}
