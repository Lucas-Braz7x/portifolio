import { lazy, Suspense } from 'react'

import { useWebGLAvailable } from '@/hooks/useWebGLAvailable'
import { isScene3dEnabled } from '@/lib/feature-flags'

const SceneCanvasContent = lazy(() =>
  import('@/components/three/SceneCanvasContent').then((m) => ({
    default: m.SceneCanvasContent,
  })),
)

/**
 * Layer 3 — WebGL boundary (spec 12).
 * Bundle `three` carrega sob demanda; desligar com `VITE_SCENE_3D=false`.
 */
export const SceneCanvas = () => {
  const webgl = useWebGLAvailable()

  if (!isScene3dEnabled() || !webgl) {
    return null
  }

  return (
    <div className="scene-layer scene-layer--canvas">
      <Suspense fallback={null}>
        <SceneCanvasContent />
      </Suspense>
    </div>
  )
}
