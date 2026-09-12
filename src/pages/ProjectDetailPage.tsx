import { useParams } from 'react-router-dom'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <article>
      <p className="type-section-kicker text-[var(--color-muted)]">Case study</p>
      <h2 className="type-section-title mt-2 capitalize">
        {slug?.replace(/-/g, ' ') ?? 'Projeto'}
      </h2>
      <p className="type-body-sm mt-6 text-[var(--color-muted)]">
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
