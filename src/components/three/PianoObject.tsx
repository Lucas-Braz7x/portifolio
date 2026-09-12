import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import type { Group, Mesh } from 'three'
import { Vector3 } from 'three'

import type { ScenePianoPose } from '@/types/scene-routes'

type PianoObjectProps = {
  pose: ScenePianoPose
  animate: boolean
}

const KEY_COUNT = 7
const HOVER_RADIUS = 0.12

export const PianoObject = ({ pose, animate }: PianoObjectProps) => {
  const groupRef = useRef<Group>(null)
  const activeKeyRef = useRef<Mesh>(null)
  const targetOpacity = useRef(pose.opacity)
  const targetScale = useRef(pose.scale)
  const keyPress = useRef(0)
  const projected = useRef(new Vector3())

  const { camera, pointer } = useThree()

  useFrame((_, delta) => {
    const group = groupRef.current
    if (!group) return

    targetOpacity.current = pose.opacity
    targetScale.current = pose.scale

    const lambda = 4
    const blend = 1 - Math.exp(-lambda * delta)
    group.scale.setScalar(
      group.scale.x + (targetScale.current - group.scale.x) * blend,
    )

    group.traverse((child) => {
      if (child.type === 'Mesh' && 'material' in child) {
        const mesh = child as Mesh
        const mat = mesh.material
        if (mat && typeof mat === 'object' && 'opacity' in mat) {
          const standard = mat as { opacity: number; transparent: boolean }
          standard.transparent = true
          standard.opacity =
            standard.opacity + (targetOpacity.current - standard.opacity) * blend
        }
      }
    })

    const key = activeKeyRef.current
    if (!animate) {
      keyPress.current = 0
      if (key) key.position.y = 0.11
      return
    }
    if (!key) return

    key.getWorldPosition(projected.current)
    projected.current.project(camera)
    const dx = projected.current.x - pointer.x
    const dy = projected.current.y - pointer.y
    const near = Math.hypot(dx, dy) < HOVER_RADIUS

    const targetPress = near ? -0.018 : 0
    keyPress.current += (targetPress - keyPress.current) * blend
    key.position.y = 0.11 + keyPress.current
  })

  return (
    <group
      ref={groupRef}
      position={pose.position}
      rotation={[0, pose.rotationY, 0]}
      scale={pose.scale}
    >
      <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.35, 0.55, 0.45]} />
        <meshStandardMaterial
          color="#0c0c0e"
          metalness={0.35}
          roughness={0.88}
          transparent
          opacity={pose.opacity}
        />
      </mesh>
      <mesh position={[0, 0.08, 0.12]} castShadow>
        <boxGeometry args={[1.28, 0.12, 0.38]} />
        <meshStandardMaterial
          color="#1a1816"
          metalness={0.2}
          roughness={0.92}
          transparent
          opacity={pose.opacity}
        />
      </mesh>
      {Array.from({ length: KEY_COUNT }, (_, index) => {
        const x = -0.54 + index * 0.18
        const isActive = index === 3
        return (
          <mesh
            key={index}
            ref={isActive ? activeKeyRef : undefined}
            position={[x, 0.11, 0.22]}
            castShadow
          >
            <boxGeometry args={[0.14, 0.04, 0.22]} />
            <meshStandardMaterial
              color={isActive ? '#ece8e1' : '#d8d4cd'}
              metalness={0.05}
              roughness={0.75}
              transparent
              opacity={pose.opacity}
            />
          </mesh>
        )
      })}
    </group>
  )
}
