import { NavLink, Outlet } from 'react-router-dom'

import { useSiteDocumentMeta } from '@/hooks/useSiteDocumentMeta'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'type-nav transition-colors',
    isActive
      ? 'text-[var(--color-fg)]'
      : 'text-[var(--color-muted)] hover:text-[var(--color-fg)]',
  ].join(' ')

export function RootLayout() {
  useSiteDocumentMeta()

  return (
    <div className="min-h-dvh bg-[var(--color-bg)] text-[var(--color-fg)]">
      <header className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-12 md:py-16">
        <div>
          <p className="type-section-kicker text-[var(--color-muted)]">Arquivo</p>
          <h1 className="type-display-name mt-3">Lucas Braz Dutra</h1>
          <p className="type-display-role mt-3 text-[var(--color-fg)]">
            Software Engineer
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Principal">
          <NavLink to="/projects" className={navLinkClass}>
            Projetos
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            Sobre
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contato
          </NavLink>
          <NavLink to="/lab" className={navLinkClass}>
            Lab
          </NavLink>
        </nav>
      </header>
      <main className="mx-auto max-w-3xl px-6 pb-24">
        <Outlet />
      </main>
    </div>
  )
}
