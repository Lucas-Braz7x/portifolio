import narrativeRoutes from '../../../content/site/narrative-routes.json'

import { matchRoutePattern, normalizePathname } from '@/lib/routes/match-route'
import type {
  NarrativeIntensity,
  NarrativeRoutesConfig,
  NarrativeState,
} from '@/types/narrative'

const config = narrativeRoutes as NarrativeRoutesConfig

export const getIntensityForPathname = (pathname: string): NarrativeIntensity => {
  const path = normalizePathname(pathname)

  for (const entry of config.routes) {
    if (matchRoutePattern(path, entry.path)) {
      return entry.intensity
    }
  }

  return config.defaultIntensity
}

export const intensityToState = (intensity: NarrativeIntensity): NarrativeState => {
  switch (intensity) {
    case 2:
      return 'revelation'
    case 1:
      return 'strange'
    default:
      return 'normal'
  }
}

export const narrativeRouteMap = config.routes
