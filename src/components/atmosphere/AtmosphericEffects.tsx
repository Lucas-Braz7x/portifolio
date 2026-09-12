import { AtmosphereLog } from '@/components/atmosphere/AtmosphereLog'
import { GrainOverlay } from '@/components/atmosphere/GrainOverlay'
import { VignetteOverlay } from '@/components/atmosphere/VignetteOverlay'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export const AtmosphericEffects = () => {
  const reducedMotion = useReducedMotion()

  return (
    <>
      <GrainOverlay animated={!reducedMotion} />
      <VignetteOverlay flicker={!reducedMotion} />
      <AtmosphereLog />
    </>
  )
}
