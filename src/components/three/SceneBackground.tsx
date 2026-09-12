import { DepthParallaxBackground } from '@/components/three/DepthParallaxBackground'

/** Layer 2 — imagem + depth parallax 2.5D (specs 13–14). */
export const SceneBackground = () => (
  <div className="scene-layer scene-layer--background">
    <DepthParallaxBackground />
  </div>
)
