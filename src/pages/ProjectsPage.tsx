import { Link } from 'react-router-dom'

export function ProjectsPage() {
  return (
    <div>
      <h2 className="text-xl font-medium tracking-tight">Projetos</h2>
      <p className="mt-4 text-[var(--color-muted)]">
        Placeholder — adicionar listagem a partir de{' '}
        <code className="text-[var(--color-fg)]">content/projects/</code>.
      </p>
      <ul className="mt-8 space-y-6">
        <li>
          <p className="font-mono text-xs text-[var(--color-muted)]">01</p>
          <p className="mt-1 font-medium">Exemplo</p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Uma frase sobre o problema.
          </p>
          <Link
            to="/projects/exemplo"
            className="mt-2 inline-block font-mono text-sm text-[var(--color-fg)] underline-offset-4 hover:underline"
          >
            → case study
          </Link>
        </li>
      </ul>
    </div>
  )
}
