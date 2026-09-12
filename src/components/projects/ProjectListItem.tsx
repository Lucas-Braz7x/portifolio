import { Link } from 'react-router-dom'

import type { Project } from '@/types/content'

type ProjectListItemProps = {
  project: Project
  index: number
}

export const ProjectListItem = ({ project, index }: ProjectListItemProps) => {
  const stackLabel = project.stack?.join(' · ')

  return (
    <li>
      <p className="type-caption text-[var(--color-muted)]">
        {String(index).padStart(2, '0')}
      </p>
      <p className="type-project-title mt-1">{project.title}</p>
      <p className="type-caption mt-1 text-[var(--color-muted)]">
        {project.summary}
      </p>
      {stackLabel ? (
        <p className="type-caption mt-2 text-[var(--color-muted)]">
          {stackLabel}
        </p>
      ) : null}
      <Link
        to={`/projects/${project.slug}`}
        className="type-body-sm mt-2 inline-block text-[var(--color-fg)] underline-offset-4 hover:underline"
      >
        → case study
      </Link>
    </li>
  )
}
