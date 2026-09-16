import { useEffect, useState } from 'react'

import { useReducedMotion } from '@/hooks/useReducedMotion'

const formatHeroTimestamp = (date: Date): string => {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}

export const HeroTimestamp = () => {
  const reducedMotion = useReducedMotion()
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    if (reducedMotion) return
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [reducedMotion])

  return (
    <time
      className="type-caption tabular-nums text-[var(--color-fg)]"
      dateTime={now.toISOString()}
    >
      {formatHeroTimestamp(now)}
    </time>
  )
}
