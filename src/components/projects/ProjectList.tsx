import { ProjectListItem } from '@/components/projects/ProjectListItem'
import type { Project } from '@/types/content'

type ProjectListProps = {
  projects: readonly Project[]
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  if (projects.length === 0) {
    return (
      <p className="type-body-sm text-[var(--color-muted)]">
        Nenhum projeto em <code className="text-[var(--color-fg)]">content/projects/</code>.
      </p>
    )
  }

  return (
    <ul className="mt-8 space-y-8">
      {projects.map((project, index) => (
        <ProjectListItem
          key={project.slug}
          project={project}
          index={index + 1}
        />
      ))}
    </ul>
  )
}
