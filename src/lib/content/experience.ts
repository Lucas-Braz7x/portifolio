import { parseMarkdownDocument } from '@/lib/content/parse-markdown'
import type { Currently, CurrentlyFrontmatter } from '@/types/experience'

const CURRENTLY_FILE = 'currently.md'

const experienceModules = import.meta.glob('../../../content/experience/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const toCurrently = (raw: string): Currently => {
  const doc = parseMarkdownDocument<CurrentlyFrontmatter>(raw, 'currently')
  const { role, focus, learning } = doc.frontmatter

  if (!role) {
    throw new Error(
      `${CURRENTLY_FILE} must define role in frontmatter (content/experience/).`,
    )
  }

  return {
    role,
    focus: focus ?? [],
    learning: learning ?? [],
  }
}

const currentlyPath = Object.keys(experienceModules).find((path) =>
  path.endsWith(CURRENTLY_FILE),
)

if (!currentlyPath) {
  throw new Error(`Missing content/experience/${CURRENTLY_FILE}`)
}

const currently = toCurrently(experienceModules[currentlyPath])

export const getCurrently = (): Currently => currently
