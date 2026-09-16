import { Link } from 'react-router-dom'

import { RecIndicator } from '@/components/atmosphere/RecIndicator'
import { PrimaryNav } from '@/components/layout/PrimaryNav'

/** Header único em todas as rotas — paridade com referência da Home (spec 19/24). */
export const SiteHeader = () => (
  <header className="layout-header layout-header--site">
    <div className="layout-header__grid">
      <Link
        to="/"
        className="layout-header__logo font-mono text-sm tracking-[0.28em] text-[var(--color-fg)] uppercase"
      >
        LBD
      </Link>
      <PrimaryNav className="layout-header__nav" />
      <div className="layout-header__rec">
        <RecIndicator />
      </div>
    </div>
  </header>
)
