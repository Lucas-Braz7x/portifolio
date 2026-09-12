import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { PerspectiveCamera } from 'three'
import { Vector3 } from 'three'

import type { SceneRoutePose } from '@/types/scene-routes'

const damp = (current: number, target: number, lambda: number, delta: number): number =>
  current + (target - current) * (1 - Math.exp(-lambda * delta))

type SceneCameraRigProps = {
  pose: SceneRoutePose
}

export const SceneCameraRig = ({ pose }: SceneCameraRigProps) => {
  const lookAtRef = useRef(new Vector3())
  const targetPosition = useRef(new Vector3())
  const targetLookAt = useRef(new Vector3())

  useFrame((state, delta) => {
    const perspective = state.camera as PerspectiveCamera
    targetPosition.current.set(...pose.camera.position)
    targetLookAt.current.set(...pose.camera.lookAt)

    perspective.position.x = damp(
      perspective.position.x,
      targetPosition.current.x,
      4,
      delta,
    )
    perspective.position.y = damp(
      perspective.position.y,
      targetPosition.current.y,
      4,
      delta,
    )
    perspective.position.z = damp(
      perspective.position.z,
      targetPosition.current.z,
      4,
      delta,
    )

    lookAtRef.current.set(
      damp(lookAtRef.current.x, targetLookAt.current.x, 4, delta),
      damp(lookAtRef.current.y, targetLookAt.current.y, 4, delta),
      damp(lookAtRef.current.z, targetLookAt.current.z, 4, delta),
    )
    perspective.lookAt(lookAtRef.current)

    const nextFov = damp(perspective.fov, pose.camera.fov, 3, delta)
    if (Math.abs(nextFov - perspective.fov) > 0.001) {
      perspective.fov = nextFov
      perspective.updateProjectionMatrix()
    }
  })

  return null
}
