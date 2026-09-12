import { useEffect, useId, useRef, useState } from 'react'

type MermaidDiagramProps = {
  chart: string
}

export const MermaidDiagram = ({ chart }: MermaidDiagramProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const reactId = useId()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let cancelled = false

    const render = async () => {
      try {
        const mermaid = (await import('mermaid')).default
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          securityLevel: 'strict',
          fontFamily: 'IBM Plex Mono, ui-monospace, monospace',
        })

        const diagramId = `mermaid-${reactId.replace(/:/g, '')}`
        const { svg } = await mermaid.render(diagramId, chart.trim())
        if (!cancelled) {
          container.innerHTML = svg
          setError(null)
        }
      } catch (renderError) {
        if (!cancelled) {
          setError(
            renderError instanceof Error
              ? renderError.message
              : 'Falha ao renderizar diagrama.',
          )
        }
      }
    }

    void render()

    return () => {
      cancelled = true
      container.innerHTML = ''
    }
  }, [chart, reactId])

  if (error) {
    return (
      <pre className="type-caption overflow-x-auto rounded border border-[var(--color-border)] p-4 text-[var(--color-muted)]">
        {chart}
      </pre>
    )
  }

  return (
    <div
      ref={containerRef}
      className="my-4 overflow-x-auto [&_svg]:mx-auto [&_svg]:max-w-full"
      role="img"
      aria-label="Diagrama de arquitetura"
    />
  )
}
