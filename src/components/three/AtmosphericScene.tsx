import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import type { PointLight, Points } from 'three'

import { DoorObject } from '@/components/three/DoorObject'
import { PianoObject } from '@/components/three/PianoObject'
import { SceneCameraRig } from '@/components/three/SceneCameraRig'
import type { NarrativeIntensity } from '@/types/narrative'
import type { SceneRoutePose } from '@/types/scene-routes'

type AtmosphericSceneProps = {
  animate: boolean
  narrativeIntensity: NarrativeIntensity
  routePose: SceneRoutePose
}

const pseudoRandom = (seed: number): number => {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

const buildDustPositions = (): Float32Array => {
  const count = 80
  const data = new Float32Array(count * 3)
  for (let i = 0; i < count; i += 1) {
    data[i * 3] = (pseudoRandom(i * 3 + 1) - 0.5) * 10
    data[i * 3 + 1] = (pseudoRandom(i * 3 + 2) - 0.5) * 6
    data[i * 3 + 2] = -1.5 - pseudoRandom(i * 3 + 3) * 5
  }
  return data
}

const dustPositions = buildDustPositions()

const DustMotes = ({ animate }: { animate: boolean }) => {
  const pointsRef = useRef<Points>(null)

  useFrame((state) => {
    if (!animate || !pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[dustPositions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#c4b5a0"
        size={0.025}
        transparent
        opacity={0.38}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export const AtmosphericScene = ({
  animate,
  narrativeIntensity,
  routePose,
}: AtmosphericSceneProps) => {
  const keyLightRef = useRef<PointLight>(null)
  const { pointer } = useThree()

  useFrame((state) => {
    const light = keyLightRef.current
    if (!light) return

    if (animate) {
      light.position.x = 1.4 + pointer.x * 0.6
      light.position.y = 1 + pointer.y * 0.35
    }

    const base = narrativeIntensity >= 2 ? 0.5 : 0.4
    const wobble =
      animate && narrativeIntensity >= 1
        ? Math.sin(state.clock.elapsedTime * 2.2) * 0.06
        : 0
    light.intensity = base + wobble
  })

  return (
    <>
      <SceneCameraRig pose={routePose} />
      <fog attach="fog" args={['#0a0a0b', 5, 13]} />
      <ambientLight intensity={0.06} />
      <directionalLight
        position={[3.5, 5, 2]}
        intensity={0.28}
        color="#c4b5a0"
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-camera-far={16}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
      />
      <pointLight
        ref={keyLightRef}
        position={[1.4, 1, 2.2]}
        color="#c4b5a0"
        intensity={0.4}
        distance={12}
        decay={2}
      />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.15, -2.5]} receiveShadow>
        <planeGeometry args={[18, 18]} />
        <shadowMaterial transparent opacity={0.22} />
      </mesh>
      <DoorObject
        pose={routePose.door}
        narrativeIntensity={narrativeIntensity}
        animate={animate}
      />
      <PianoObject pose={routePose.piano} animate={animate} />
      <DustMotes animate={animate} />
    </>
  )
}
