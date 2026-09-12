export type ProjectFrontmatter = {
  title: string
  summary: string
  stack?: string[] | string
  order?: number
  featured?: boolean
}

export type Project = {
  slug: string
  title: string
  summary: string
  stack: string[]
  order?: number
  featured?: boolean
  body: string
}

export type MarkdownDocument<TFrontmatter extends Record<string, unknown>> = {
  slug: string
  frontmatter: TFrontmatter
  body: string
}
