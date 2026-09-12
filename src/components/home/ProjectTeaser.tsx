import { Link } from 'react-router-dom'

import type { Project } from '@/types/content'

type ProjectTeaserProps = {
  project: Project
  index: number
  showStack?: boolean
}

export const ProjectTeaser = ({
  project,
  index,
  showStack = true,
}: ProjectTeaserProps) => {
  const stackLabel = project.stack.join(' · ')

  return (
    <article>
      <p className="type-caption text-[var(--color-muted)]">
        {String(index).padStart(2, '0')}
      </p>
      <h3 className="type-project-title mt-1">{project.title}</h3>
      <p className="type-caption mt-1 text-[var(--color-muted)]">
        {project.summary}
      </p>
      {showStack && stackLabel ? (
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
    </article>
  )
}
