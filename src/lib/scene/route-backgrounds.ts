import routeBackgrounds from '../../../content/scene/route-backgrounds.json'

import { matchRoutePattern, normalizePathname } from '@/lib/routes/match-route'
import type {
  SceneBackgroundId,
  SceneBackgroundRoutesConfig,
  SceneBackgroundScene,
} from '@/types/scene-background'

const config = routeBackgrounds as SceneBackgroundRoutesConfig

const sceneById = new Map<SceneBackgroundId, SceneBackgroundScene>(
  config.scenes.map((scene) => [scene.id, scene]),
)

export const getSceneBackgroundById = (
  id: SceneBackgroundId,
): SceneBackgroundScene => {
  const scene = sceneById.get(id)
  if (!scene) {
    throw new Error(`Unknown scene background id: ${id}`)
  }
  return scene
}

export const getDefaultSceneBackground = (): SceneBackgroundScene =>
  getSceneBackgroundById(config.defaultSceneId)

export const getSceneBackgroundForPathname = (
  pathname: string,
): SceneBackgroundScene => {
  const path = normalizePathname(pathname)

  for (const entry of config.routes) {
    if (matchRoutePattern(path, entry.path)) {
      return getSceneBackgroundById(entry.sceneId)
    }
  }

  return getDefaultSceneBackground()
}
