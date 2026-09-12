import { Link } from 'react-router-dom'

export function ProjectsPage() {
  return (
    <div>
      <h2 className="type-page-title">Projetos</h2>
      <p className="type-body-sm mt-4 text-[var(--color-muted)]">
        Placeholder — adicionar listagem a partir de{' '}
        <code className="text-[var(--color-fg)]">content/projects/</code>.
      </p>
      <ul className="mt-8 space-y-6">
        <li>
          <p className="type-caption text-[var(--color-muted)]">01</p>
          <p className="type-project-title mt-1">Exemplo</p>
          <p className="type-caption mt-1 text-[var(--color-muted)]">
            Uma frase sobre o problema.
          </p>
          <Link
            to="/projects/exemplo"
            className="type-body-sm mt-2 inline-block text-[var(--color-fg)] underline-offset-4 hover:underline"
          >
            → case study
          </Link>
        </li>
      </ul>
    </div>
  )
}
