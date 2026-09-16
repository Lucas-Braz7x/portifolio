import { parseMarkdownDocument } from '@/lib/content/parse-markdown'
import type { Note, NoteFrontmatter } from '@/types/note'

const noteModules = import.meta.glob('../../../content/notes/*.{md,mdx}', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const slugFromPath = (path: string): string => {
  const file = path.split('/').pop() ?? ''
  return file.replace(/\.(md|mdx)$/, '')
}

const isContentFile = (path: string): boolean => {
  const file = path.split('/').pop() ?? ''
  return file !== 'README.md' && !file.startsWith('.')
}

const toNote = (path: string, raw: string): Note => {
  const slug = slugFromPath(path)
  const doc = parseMarkdownDocument<NoteFrontmatter>(raw, slug)
  const { title, date, summary, order } = doc.frontmatter

  if (!title) {
    throw new Error(`Note "${slug}" must define title in frontmatter.`)
  }

  return {
    slug,
    title,
    date,
    summary,
    order,
    body: doc.body,
  }
}

const allNotes = Object.entries(noteModules)
  .filter(([path]) => isContentFile(path))
  .map(([path, raw]) => toNote(path, raw))
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))

export const getAllNotes = (): readonly Note[] => allNotes

export const getNoteBySlug = (slug: string): Note | undefined =>
  allNotes.find((note) => note.slug === slug)
