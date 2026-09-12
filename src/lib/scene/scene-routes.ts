import sceneRoutes from '../../../content/scene/scene-routes.json'

import { matchRoutePattern, normalizePathname } from '@/lib/routes/match-route'
import type { SceneRoutePose, SceneRoutesConfig } from '@/types/scene-routes'

const config = sceneRoutes as unknown as SceneRoutesConfig

export const sceneRouteStrategy = config.strategy

export const getScenePoseForPathname = (pathname: string): SceneRoutePose => {
  const path = normalizePathname(pathname)

  for (const entry of config.routes) {
    if (matchRoutePattern(path, entry.path)) {
      return entry
    }
  }

  return config.default
}
