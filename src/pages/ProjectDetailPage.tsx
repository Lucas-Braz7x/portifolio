import { Link, useParams } from 'react-router-dom'

import { useProject } from '@/hooks/useProjects'

export const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = useProject(slug)

  if (!project) {
    return (
      <div>
        <h1 className="type-page-title">Projeto não encontrado</h1>
        <p className="type-body-sm mt-4 text-[var(--color-muted)]">
          Slug <code className="text-[var(--color-fg)]">{slug}</code> não existe em{' '}
          <code className="text-[var(--color-fg)]">content/projects/</code>.
        </p>
        <Link
          to="/projects"
          className="type-body-sm mt-6 inline-block text-[var(--color-fg)] underline-offset-4 hover:underline"
        >
          ← voltar aos projetos
        </Link>
      </div>
    )
  }

  const stackLabel = project.stack.join(' · ')

  return (
    <article>
      <p className="type-section-kicker text-[var(--color-muted)]">Case study</p>
      <h1 className="type-section-title mt-2">{project.title}</h1>
      <p className="type-body-sm mt-4 text-[var(--color-muted)]">{project.summary}</p>
      {stackLabel ? (
        <p className="type-caption mt-2 text-[var(--color-muted)]">{stackLabel}</p>
      ) : null}
      <div
        className="type-body-sm mt-8 space-y-4 whitespace-pre-wrap text-[var(--color-muted)]"
      >
        {project.body}
      </div>
    </article>
  )
}
