import type { ReactNode } from 'react'

type PageSectionProps = {
  index: string
  title: string
  children: ReactNode
}

export const PageSection = ({ index, title, children }: PageSectionProps) => {
  return (
    <section className="border-t border-[var(--color-border)] py-12 first:border-t-0 first:pt-0">
      <p className="type-section-kicker text-[var(--color-muted)]">{index}</p>
      <h2 className="type-section-title mt-2">{title}</h2>
      <div className="mt-6 text-[var(--color-muted)]">{children}</div>
    </section>
  )
}
