import type { CSSProperties } from 'react'

import { useSceneRouteBackground } from '@/hooks/useSceneRouteBackground'
import type { SceneBackgroundScene } from '@/types/scene-background'

type SceneLayerProps = {
  scene: SceneBackgroundScene
  motionStyle: CSSProperties
  className: string
}

const scenePlateClass = (scene: SceneBackgroundScene, extra: string) =>
  [
    extra,
    scene.id !== 'home' ? 'scene-route-bg__plate--dimmed' : '',
  ]
    .filter(Boolean)
    .join(' ')

const SceneLayer = ({ scene, motionStyle, className }: SceneLayerProps) => (
  <div
    className={className}
    style={{
      backgroundImage: `url(${scene.path})`,
      ...motionStyle,
    }}
    data-scene-id={scene.id}
    aria-hidden="true"
  />
)

export const RouteSceneBackground = () => {
  const { current, previous, isTransitioning, motion } = useSceneRouteBackground()

  const motionStyle: CSSProperties = {
    '--scene-pan-x': `${motion.panXPercent}%`,
    '--scene-pan-y': `${motion.panYPercent}%`,
    '--scene-scale': String(motion.scale),
  } as CSSProperties

  const layerMotionClass = motion.breatheEnabled
    ? 'scene-route-bg__plate scene-route-bg__plate--motion scene-route-bg__plate--breathe'
    : 'scene-route-bg__plate scene-route-bg__plate--motion'

  return (
    <div className="scene-route-bg">
      {previous ? (
        <SceneLayer
          scene={previous}
          motionStyle={motionStyle}
          className={scenePlateClass(
            previous,
            [
              layerMotionClass,
              'scene-route-bg__plate--out',
              isTransitioning ? 'is-leaving' : '',
            ]
              .filter(Boolean)
              .join(' '),
          )}
        />
      ) : null}
      <SceneLayer
        scene={current}
        motionStyle={motionStyle}
        className={scenePlateClass(
          current,
          [
            layerMotionClass,
            'scene-route-bg__plate--in',
            isTransitioning ? 'is-entering' : '',
          ]
            .filter(Boolean)
            .join(' '),
        )}
      />
    </div>
  )
}
