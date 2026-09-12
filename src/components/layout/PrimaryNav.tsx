import { NavLink } from 'react-router-dom'

const navItems = [
  { index: '01', label: 'Início', to: '/' },
  { index: '02', label: 'Projetos', to: '/projects' },
  { index: '03', label: 'Sobre', to: '/about' },
  { index: '04', label: 'Lab', to: '/lab' },
  { index: '05', label: 'Contato', to: '/contact' },
] as const

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    'type-nav transition-colors',
    isActive
      ? 'text-[var(--color-fg)]'
      : 'text-[var(--color-muted)] hover:text-[var(--color-fg)]',
  ].join(' ')

export const PrimaryNav = () => (
  <nav className="flex flex-wrap gap-x-4 gap-y-2 md:gap-x-6" aria-label="Principal">
    {navItems.map(({ index, label, to }) => (
      <NavLink key={to} to={to} className={navLinkClass} end={to === '/'}>
        <span className="text-[var(--color-muted)]">[ {index} ]</span>{' '}
        {label}
      </NavLink>
    ))}
  </nav>
)
