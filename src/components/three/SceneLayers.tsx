import { SceneBackground } from '@/components/three/SceneBackground'
import { SceneCanvas } from '@/components/three/SceneCanvas'

/** Fixed scene stack behind HTML content — spec 12. */
export const SceneLayers = () => (
  <div className="scene-root" aria-hidden="true">
    <SceneBackground />
    <SceneCanvas />
  </div>
)
