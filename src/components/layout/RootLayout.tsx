import { NavLink, Outlet } from 'react-router-dom'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'font-mono text-sm tracking-wide uppercase transition-colors',
    isActive
      ? 'text-[var(--color-fg)]'
      : 'text-[var(--color-muted)] hover:text-[var(--color-fg)]',
  ].join(' ')

export function RootLayout() {
  return (
    <div className="min-h-dvh bg-[var(--color-bg)] text-[var(--color-fg)]">
      <header className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-12 md:py-16">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-[var(--color-muted)] uppercase">
            Portfolio
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
            Lucas Braz Dutra
          </h1>
          <p className="mt-2 text-[var(--color-muted)]">Software Engineer</p>
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
