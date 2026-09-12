import { Link } from 'react-router-dom'

import { CaseStudyContent } from '@/components/projects/CaseStudyContent'
import { CaseStudyNav } from '@/components/projects/CaseStudyNav'
import type { Project } from '@/types/content'

type CaseStudyLayoutProps = {
  project: Project
}

export const CaseStudyLayout = ({ project }: CaseStudyLayoutProps) => {
  const stackLabel = project.stack.join(' · ')

  return (
    <article>
      <p className="type-section-kicker text-[var(--color-muted)]">Case study</p>
      <h1 className="type-section-title mt-2">{project.title}</h1>
      <p className="type-body-sm mt-4 text-[var(--color-muted)]">
        {project.summary}
      </p>
      {stackLabel ? (
        <p className="type-caption mt-2 text-[var(--color-muted)]">
          {stackLabel}
        </p>
      ) : null}

      <CaseStudyNav sections={project.sections} />

      <div className="mt-10 space-y-12">
        {project.sections.map((section) => (
          <section
            key={section.key}
            id={section.key}
            className="scroll-mt-8 border-t border-[var(--color-border)] pt-10 first:border-t-0 first:pt-0"
            aria-labelledby={`${section.key}-heading`}
          >
            <h2
              id={`${section.key}-heading`}
              className="type-project-title text-[var(--color-fg)]"
            >
              {section.title}
            </h2>
            <div className="type-body-sm mt-4 text-[var(--color-muted)]">
              <CaseStudyContent content={section.content} />
            </div>
          </section>
        ))}
      </div>

      <Link
        to="/projects"
        className="type-body-sm mt-12 inline-block text-[var(--color-fg)] underline-offset-4 hover:underline"
      >
        ← voltar aos projetos
      </Link>
    </article>
  )
}
