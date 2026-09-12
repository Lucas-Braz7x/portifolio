import { atmosphereLog } from '@/lib/site-atmosphere'

export const AtmosphereLog = () => {
  if (!atmosphereLog.visible) return null

  return (
    <aside className="atmosphere-log type-caption" aria-hidden="true">
      <p>LOG {atmosphereLog.logId}</p>
      <p className="mt-1">{atmosphereLog.date}</p>
      <div className="mt-2 space-y-0.5">
        {atmosphereLog.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </aside>
  )
}
