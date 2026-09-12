import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import { AtmosphericScene } from '@/components/three/AtmosphericScene'
import { useNarrativeLayer } from '@/hooks/useNarrativeLayer'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useSceneRoutePose } from '@/hooks/useSceneRoutePose'

export const SceneCanvasContent = () => {
  const reducedMotion = useReducedMotion()
  const { intensity } = useNarrativeLayer()
  const routePose = useSceneRoutePose()
  const animate = !reducedMotion

  return (
    <Canvas
      className="scene-canvas__gl"
      dpr={[1, 1.5]}
      shadows
      camera={{ position: [...routePose.camera.position], fov: routePose.camera.fov }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      frameloop={animate ? 'always' : 'demand'}
      onCreated={({ gl, invalidate }) => {
        gl.setClearColor(0x000000, 0)
        if (!animate) invalidate()
      }}
    >
      <Suspense fallback={null}>
        <AtmosphericScene
          animate={animate}
          narrativeIntensity={intensity}
          routePose={routePose}
        />
      </Suspense>
    </Canvas>
  )
}
