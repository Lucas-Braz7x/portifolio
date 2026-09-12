import narrativeRoutes from '../../../content/site/narrative-routes.json'

import type {
  NarrativeIntensity,
  NarrativeRoutesConfig,
  NarrativeState,
} from '@/types/narrative'

const config = narrativeRoutes as NarrativeRoutesConfig

const normalizePath = (pathname: string): string => {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }
  return pathname
}

const matchRoute = (pathname: string, pattern: string): boolean => {
  if (pattern.endsWith('/*')) {
    const prefix = pattern.slice(0, -1)
    return pathname.startsWith(prefix) && pathname.length > prefix.length
  }
  return pathname === pattern
}

export const getIntensityForPathname = (pathname: string): NarrativeIntensity => {
  const path = normalizePath(pathname)

  for (const entry of config.routes) {
    if (matchRoute(path, entry.path)) {
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
