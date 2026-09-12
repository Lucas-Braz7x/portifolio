import { isScene3dEnabled } from '@/lib/feature-flags'

import { useWebGLAvailable } from '@/hooks/useWebGLAvailable'

/**
 * Layer 3 — WebGL boundary (spec 12).
 * R3F content arrives in specs 14–16; when disabled or without WebGL, layer 1–2 suffice.
 */
export const SceneCanvas = () => {
  const webgl = useWebGLAvailable()

  if (!isScene3dEnabled() || !webgl) {
    return null
  }

  return (
    <div
      className="scene-layer scene-layer--canvas"
      data-scene-canvas="pending"
      aria-hidden="true"
    />
  )
}
