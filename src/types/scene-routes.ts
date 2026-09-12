export type SceneVec3 = readonly [number, number, number]

export type SceneCameraPose = {
  position: SceneVec3
  lookAt: SceneVec3
  fov: number
}

export type SceneScrollBlend = {
  position: SceneVec3
  lookAt: SceneVec3
}

export type SceneDoorPose = {
  position: SceneVec3
  rotationY: number
  openRad: number
}

export type ScenePianoPose = {
  position: SceneVec3
  rotationY: number
  scale: number
  opacity: number
}

export type SceneRoutePose = {
  camera: SceneCameraPose
  scroll?: SceneScrollBlend
  door: SceneDoorPose
  piano: ScenePianoPose
}

export type SceneRouteEntry = SceneRoutePose & {
  path: string
}

export type SceneRoutesConfig = {
  strategy: {
    primary: string
    homeScrollBlend: boolean
    summary: string
  }
  routes: readonly SceneRouteEntry[]
  default: SceneRoutePose
}
