/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NARRATIVE_LAYER?: string
  readonly VITE_SCENE_3D?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
