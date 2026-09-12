/** 0 = normal, 1 = strange, 2 = revelation (spec 11). */
export type NarrativeIntensity = 0 | 1 | 2

export type NarrativeState = 'normal' | 'strange' | 'revelation'

export type NarrativeRouteEntry = {
  path: string
  intensity: NarrativeIntensity
}

export type NarrativeRoutesConfig = {
  defaultIntensity: NarrativeIntensity
  routes: readonly NarrativeRouteEntry[]
}
