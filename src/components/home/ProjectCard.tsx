import { Link } from 'react-router-dom'

import type { HomeProjectSlot } from '@/lib/home-project-slots'

const PLACEHOLDER_THUMB = '/projects/placeholder.svg'

type ProjectCardProps = {
  slot: HomeProjectSlot
}

export const ProjectCard = ({ slot }: ProjectCardProps) => {
  if (slot.kind === 'placeholder') {
    return (
      <article className="project-card project-card--placeholder">
        <div className="project-card__media">
          <img
            src={PLACEHOLDER_THUMB}
            alt=""
            width={640}
            height={400}
            loading="lazy"
            className="project-card__img"
          />
        </div>
        <h3 className="type-project-card-title mt-4">{slot.title}</h3>
        <p className="type-body-sm mt-2 text-[var(--color-muted)]">
          {slot.summary}
        </p>
        <p className="type-caption mt-4 text-[var(--color-muted)]">
          Em construção
        </p>
        {slot.stack.length > 0 ? (
          <ul className="project-card__tags mt-4" aria-label="Stack prevista">
            {slot.stack.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
      </article>
    )
  }

  const { project } = slot
  const thumb = project.thumbnail ?? PLACEHOLDER_THUMB

  return (
    <article className="project-card">
      <Link to={`/projects/${project.slug}`} className="project-card__link">
        <div className="project-card__media">
          <img
            src={thumb}
            alt=""
            width={640}
            height={400}
            loading="lazy"
            className="project-card__img"
          />
        </div>
        <h3 className="type-project-card-title mt-4">{project.title}</h3>
        <p className="type-body-sm mt-2 text-[var(--color-muted)]">
          {project.summary}
        </p>
        {project.stack.length > 0 ? (
          <ul className="project-card__tags mt-4" aria-label="Stack">
            {project.stack.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
      </Link>
    </article>
  )
}
