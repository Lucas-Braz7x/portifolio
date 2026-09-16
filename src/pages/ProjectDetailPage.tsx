import { Link, useParams } from 'react-router-dom'

import { SitePageLayout } from '@/components/layout/SitePageLayout'
import { CaseStudyLayout } from '@/components/projects/CaseStudyLayout'
import { useProject } from '@/hooks/useProjects'

export const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = useProject(slug)

  if (!project) {
    return (
      <SitePageLayout
        title="Projeto não encontrado"
        intro={
          <>
            Slug <code className="text-[var(--color-fg)]">{slug}</code> não existe em{' '}
            <code className="text-[var(--color-fg)]">content/projects/</code>.
          </>
        }
      >
        <Link
          to="/projects"
          className="type-body-sm inline-block text-[var(--color-fg)] underline-offset-4 hover:underline"
        >
          ← voltar aos projetos
        </Link>
      </SitePageLayout>
    )
  }

  return (
    <SitePageLayout>
      <CaseStudyLayout project={project} />
    </SitePageLayout>
  )
}
