import { useParams } from 'react-router-dom'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <article>
      <p className="font-mono text-xs text-[var(--color-muted)] uppercase">
        Case study
      </p>
      <h2 className="mt-2 text-2xl font-medium tracking-tight capitalize">
        {slug?.replace(/-/g, ' ') ?? 'Projeto'}
      </h2>
      <p className="mt-6 text-[var(--color-muted)]">
        Template: Problema → Contexto → Decisões → Arquitetura → Resultado → O que eu
        faria diferente (
        <code className="text-[var(--color-fg)]">
          specs/06-projects-case-studies.md
        </code>
        ).
      </p>
    </article>
  )
}
