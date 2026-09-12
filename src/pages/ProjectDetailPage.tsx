import { Link, useParams } from 'react-router-dom'

import { CaseStudyLayout } from '@/components/projects/CaseStudyLayout'
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

  return <CaseStudyLayout project={project} />
}
