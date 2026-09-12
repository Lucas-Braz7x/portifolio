import { parseMarkdownDocument } from '@/lib/content/parse-markdown'
import type { Experiment, ExperimentFrontmatter } from '@/types/experiment'

const experimentModules = import.meta.glob('../../../content/experiments/*.{md,mdx}', {
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

const toExperiment = (path: string, raw: string): Experiment => {
  const slug = slugFromPath(path)
  const doc = parseMarkdownDocument<ExperimentFrontmatter>(raw, slug)
  const { title, summary, url, order } = doc.frontmatter

  if (!title || !summary) {
    throw new Error(
      `Experiment "${slug}" must define title and summary in frontmatter.`,
    )
  }

  return {
    slug,
    title,
    summary,
    url,
    order,
    body: doc.body,
  }
}

const allExperiments = Object.entries(experimentModules)
  .filter(([path]) => isContentFile(path))
  .map(([path, raw]) => toExperiment(path, raw))
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))

export const getAllExperiments = (): readonly Experiment[] => allExperiments
