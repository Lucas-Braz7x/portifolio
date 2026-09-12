import { useState } from 'react'

const detectWebGL = (): boolean => {
  if (typeof document === 'undefined') return false

  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      canvas.getContext('webgl2') ?? canvas.getContext('webgl'),
    )
  } catch {
    return false
  }
}

export const useWebGLAvailable = (): boolean => {
  const [available] = useState(detectWebGL)
  return available
}
