import { useEffect, useState } from 'react'

/** 0–1 scroll do documento; listener passivo (spec 16). */
export const useDocumentScrollProgress = (enabled: boolean): number => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!enabled) {
      return
    }

    const sync = () => {
      const scrollMax = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      )
      setProgress(window.scrollY / scrollMax)
    }

    sync()
    window.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync, { passive: true })

    return () => {
      window.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [enabled])

  return enabled ? progress : 0
}
