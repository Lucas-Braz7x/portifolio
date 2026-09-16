import { Link } from 'react-router-dom'

import { SitePageLayout } from '@/components/layout/SitePageLayout'
import { useNotes } from '@/hooks/useNotes'

export const NotesPage = () => {
  const notes = useNotes()

  return (
    <SitePageLayout
      title="Notas"
      intro={
        <>
          Rascunhos e fragmentos em{' '}
          <code className="text-[var(--color-fg)]">content/notes/</code>.
        </>
      }
    >
      {notes.length === 0 ? (
        <p className="type-body-sm text-[var(--color-muted)]">
          Nenhuma nota publicada ainda.
        </p>
      ) : (
        <ul className="space-y-8">
          {notes.map((note) => (
            <li key={note.slug} className="border-t border-[var(--color-border)] pt-6">
              <p className="type-caption text-[var(--color-muted)]">
                {note.date ?? '—'}
              </p>
              <h2 className="type-section-title mt-2">{note.title}</h2>
              {note.summary ? (
                <p className="type-body-sm mt-2 text-[var(--color-fg)]">
                  {note.summary}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      )}

      <p className="type-body-sm mt-10">
        <Link
          to="/lab"
          className="text-[var(--color-muted)] underline-offset-4 hover:text-[var(--color-fg)] hover:underline"
        >
          → Lab (experimentos)
        </Link>
      </p>
    </SitePageLayout>
  )
}
