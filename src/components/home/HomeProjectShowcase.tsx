import { Link } from 'react-router-dom'

import { ProjectCard } from '@/components/home/ProjectCard'
import { buildHomeProjectSlots } from '@/lib/home-project-slots'
import { siteHomeCopy } from '@/lib/site-home'
import type { Project } from '@/types/content'

type HomeProjectShowcaseProps = {
  projects: readonly Project[]
}

export const HomeProjectShowcase = ({ projects }: HomeProjectShowcaseProps) => {
  const slots = buildHomeProjectSlots(projects)

  return (
    <section
      className="home-block home-projects"
      aria-labelledby="home-projects-heading"
    >
      <div className="home-projects__intro">
        <p className="type-section-kicker text-[var(--color-muted)]">02.</p>
        <h2 id="home-projects-heading" className="type-section-title mt-2">
          Projetos
        </h2>
        <p className="type-body-sm mt-6 max-w-sm text-[var(--color-fg)]">
          {siteHomeCopy.projectsIntro}
        </p>
        <p className="type-body-sm mt-8">
          <Link to="/projects" className="home-inline-link">
            ver todos →
          </Link>
        </p>
      </div>

      <ul className="home-projects__grid">
        {slots.map((slot) => (
          <li key={slot.kind === 'project' ? slot.project.slug : slot.title}>
            <ProjectCard slot={slot} />
          </li>
        ))}
      </ul>
    </section>
  )
}
