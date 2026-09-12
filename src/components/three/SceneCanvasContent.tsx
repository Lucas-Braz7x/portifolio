import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import { AtmosphericScene } from '@/components/three/AtmosphericScene'
import { useNarrativeLayer } from '@/hooks/useNarrativeLayer'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export const SceneCanvasContent = () => {
  const reducedMotion = useReducedMotion()
  const { intensity } = useNarrativeLayer()
  const animate = !reducedMotion

  return (
    <Canvas
      className="scene-canvas__gl"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.15, 3.8], fov: 48 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      frameloop={animate ? 'always' : 'demand'}
      onCreated={({ gl, invalidate }) => {
        gl.setClearColor(0x000000, 0)
        if (!animate) invalidate()
      }}
    >
      <Suspense fallback={null}>
        <AtmosphericScene animate={animate} narrativeIntensity={intensity} />
      </Suspense>
    </Canvas>
  )
}
