import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Group } from 'three'

import type { NarrativeIntensity } from '@/types/narrative'
import type { SceneDoorPose } from '@/types/scene-routes'

type DoorObjectProps = {
  pose: SceneDoorPose
  narrativeIntensity: NarrativeIntensity
  animate: boolean
}

const narrativeOpenScale = (intensity: NarrativeIntensity): number => {
  switch (intensity) {
    case 2:
      return 1.45
    case 1:
      return 1.2
    default:
      return 1
  }
}

export const DoorObject = ({ pose, narrativeIntensity, animate }: DoorObjectProps) => {
  const panelRef = useRef<Group>(null)
  const targetOpen = pose.openRad * narrativeOpenScale(narrativeIntensity)

  useFrame((_, delta) => {
    const panel = panelRef.current
    if (!panel) return
    const lambda = animate ? 5 : 12
    const next =
      panel.rotation.y +
      (targetOpen - panel.rotation.y) * (1 - Math.exp(-lambda * delta))
    panel.rotation.y = next
  })

  return (
    <group position={pose.position} rotation={[0, pose.rotationY, 0]}>
      <mesh position={[0.38, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.04, 1.75, 0.86]} />
        <meshStandardMaterial color="#0e0e10" metalness={0.2} roughness={0.94} />
      </mesh>
      <group ref={panelRef} position={[-0.38, 0, 0]}>
        <mesh position={[0.38, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.06, 1.72, 0.82]} />
          <meshStandardMaterial color="#141416" metalness={0.28} roughness={0.9} />
        </mesh>
      </group>
    </group>
  )
}
