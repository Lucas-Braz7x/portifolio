const envFlag = (value: string | undefined, defaultWhenUnset: boolean): boolean => {
  if (value === undefined || value === '') return defaultWhenUnset
  return value !== 'false' && value !== '0'
}

/** Narrative progression (spec 11). `VITE_NARRATIVE_LAYER=false` forces state normal on all routes. */
export const isNarrativeLayerEnabled = (): boolean =>
  envFlag(import.meta.env.VITE_NARRATIVE_LAYER, true)

/** WebGL scene (spec 12). `VITE_SCENE_3D=false` desliga o canvas. */
export const isScene3dEnabled = (): boolean =>
  envFlag(import.meta.env.VITE_SCENE_3D, true)
