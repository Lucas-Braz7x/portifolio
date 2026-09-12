import type { CaseStudySection } from '@/types/content'

type CaseStudyNavProps = {
  sections: readonly CaseStudySection[]
}

export const CaseStudyNav = ({ sections }: CaseStudyNavProps) => (
  <nav
    className="type-caption flex flex-wrap gap-x-4 gap-y-2 border-b border-[var(--color-border)] pb-6"
    aria-label="Seções do case study"
  >
    {sections.map((section) => (
      <a
        key={section.key}
        href={`#${section.key}`}
        className="text-[var(--color-muted)] underline-offset-4 hover:text-[var(--color-fg)] hover:underline"
      >
        {section.title}
      </a>
    ))}
  </nav>
)
