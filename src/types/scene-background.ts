export type SceneBackgroundId = 'home' | 'corredor' | 'piano'

export type SceneBackgroundScene = {
  id: SceneBackgroundId
  path: string
  label?: string
}

export type SceneBackgroundRouteEntry = {
  path: string
  sceneId: SceneBackgroundId
}

export type SceneBackgroundRoutesConfig = {
  defaultSceneId: SceneBackgroundId
  scenes: readonly SceneBackgroundScene[]
  routes: readonly SceneBackgroundRouteEntry[]
}

export type SceneBackgroundMotion = {
  panXPercent: number
  panYPercent: number
  scale: number
  breatheEnabled: boolean
}

export type SceneRouteBackgroundSnapshot = {
  current: SceneBackgroundScene
  previous: SceneBackgroundScene | null
  isTransitioning: boolean
  motion: SceneBackgroundMotion
}
