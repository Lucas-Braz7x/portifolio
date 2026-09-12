export type SceneAssetStatus = 'placeholder' | 'planned' | 'procedural' | 'optional' | 'ready'

export type SceneTextureAsset = {
  id: string
  path: string
  format: string
  role: 'environment' | 'depth-map'
  status: SceneAssetStatus
  pairs?: string
  notes?: string
}

export type SceneMeshAsset = {
  id: string
  path: string | null
  format: 'glb' | 'gltf'
  status: SceneAssetStatus
  spec: string
  justification: string
}

export type SceneAssetsManifest = {
  version: number
  planB: {
    summary: string
    disableParallax: string
    disableMeshes: string
  }
  textures: readonly SceneTextureAsset[]
  meshes: readonly SceneMeshAsset[]
}
