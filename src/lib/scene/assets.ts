import manifest from '../../../content/scene/assets.json'

import type { SceneAssetsManifest } from '@/types/scene-assets'

const data = manifest as SceneAssetsManifest

export const sceneAssets = data

export const getSceneTexture = (id: string) =>
  data.textures.find((asset) => asset.id === id)
