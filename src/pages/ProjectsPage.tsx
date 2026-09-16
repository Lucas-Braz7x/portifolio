import { SitePageLayout } from '@/components/layout/SitePageLayout'
import { ProjectList } from '@/components/projects/ProjectList'
import { useProjects } from '@/hooks/useProjects'

export const ProjectsPage = () => {
  const projects = useProjects()

  return (
    <SitePageLayout
      title="Projetos"
      intro={
        <>
          Case studies carregados de{' '}
          <code className="text-[var(--color-fg)]">content/projects/</code> no build.
        </>
      }
    >
      <ProjectList projects={projects} />
    </SitePageLayout>
  )
}
