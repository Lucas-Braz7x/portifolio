import { ProjectList } from '@/components/projects/ProjectList'
import { useProjects } from '@/hooks/useProjects'

export const ProjectsPage = () => {
  const projects = useProjects()

  return (
    <div>
      <h1 className="type-page-title">Projetos</h1>
      <p className="type-body-sm mt-4 text-[var(--color-muted)]">
        Case studies carregados de{' '}
        <code className="text-[var(--color-fg)]">content/projects/</code> no build.
      </p>
      <ProjectList projects={projects} />
    </div>
  )
}
