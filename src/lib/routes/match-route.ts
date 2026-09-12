export const normalizePathname = (pathname: string): string => {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }
  return pathname
}

export const matchRoutePattern = (pathname: string, pattern: string): boolean => {
  if (pattern.endsWith('/*')) {
    const prefix = pattern.slice(0, -1)
    return pathname.startsWith(prefix) && pathname.length > prefix.length
  }
  return pathname === pattern
}
