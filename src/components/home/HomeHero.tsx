import { Link } from 'react-router-dom'

import { siteVision } from '@/lib/site-vision'

const heroLinks = [
  { to: '/projects', label: 'ver projetos' },
  { to: '/about', label: 'sobre' },
  { to: '/contact', label: 'contato' },
] as const

export const HomeHero = () => (
  <header className="border-b border-[var(--color-border)] pb-12">
    <p className="type-section-kicker text-[var(--color-muted)]">Arquivo</p>
    <h1 className="type-display-name mt-3">Lucas Braz Dutra</h1>
    <p className="type-display-role mt-3 text-[var(--color-fg)]">
      Software Engineer
    </p>
    <p className="type-body mt-8 max-w-xl text-[var(--color-fg)]">
      {siteVision.positioning}
    </p>
    <nav
      className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
      aria-label="Ações principais"
    >
      {heroLinks.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="type-body-sm text-[var(--color-fg)] underline-offset-4 hover:underline"
        >
          → {label}
        </Link>
      ))}
    </nav>
  </header>
)
