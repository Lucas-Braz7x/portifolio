import { Link } from 'react-router-dom'

import { PrimaryNav } from '@/components/layout/PrimaryNav'

export const SiteHeader = () => (
  <header className="relative z-[var(--z-content)] layout-header border-b border-[var(--color-border)]">
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <Link
        to="/"
        className="font-display text-lg tracking-[0.2em] text-[var(--color-fg)] uppercase"
      >
        LBD
      </Link>
      <PrimaryNav />
    </div>
  </header>
)
