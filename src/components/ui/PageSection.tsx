import type { ReactNode } from 'react'

type PageSectionProps = {
  index: string
  title: string
  children: ReactNode
}

export function PageSection({ index, title, children }: PageSectionProps) {
  return (
    <section className="border-t border-[var(--color-border)] py-12 first:border-t-0 first:pt-0">
      <p className="font-mono text-xs tracking-[0.15em] text-[var(--color-muted)] uppercase">
        {index}
      </p>
      <h2 className="mt-2 text-xl font-medium tracking-tight">{title}</h2>
      <div className="mt-6 text-[var(--color-muted)]">{children}</div>
    </section>
  )
}
