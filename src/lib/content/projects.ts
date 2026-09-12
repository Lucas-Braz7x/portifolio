import { parseMarkdownDocument } from '@/lib/content/parse-markdown'
import type { Project, ProjectFrontmatter } from '@/types/content'

const projectModules = import.meta.glob('../../../content/projects/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const slugFromPath = (path: string): string => {
  const file = path.split('/').pop() ?? ''
  return file.replace(/\.md$/, '')
}

const normalizeStack = (stack: ProjectFrontmatter['stack']): string[] => {
  if (!stack) return []
  return Array.isArray(stack) ? stack : [stack]
}

const toProject = (path: string, raw: string): Project => {
  const slug = slugFromPath(path)
  const doc = parseMarkdownDocument<ProjectFrontmatter>(raw, slug)
  const { title, summary, order, featured, stack } = doc.frontmatter

  if (!title || !summary) {
    throw new Error(
      `Project "${slug}" must define title and summary in frontmatter.`,
    )
  }

  return {
    slug,
    title,
    summary,
    order,
    featured,
    stack: normalizeStack(stack),
    body: doc.body,
  }
}

const allProjects = Object.entries(projectModules)
  .map(([path, raw]) => toProject(path, raw))
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))

export const getAllProjects = (): readonly Project[] => allProjects

export const getFeaturedProjects = (): readonly Project[] =>
  allProjects.filter((project) => project.featured)

export const getProjectBySlug = (slug: string): Project | undefined =>
  allProjects.find((project) => project.slug === slug)
