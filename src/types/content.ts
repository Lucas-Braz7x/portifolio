export type ProjectFrontmatter = {
  title: string
  summary: string
  stack?: string[] | string
  order?: number
  featured?: boolean
}

export type CaseStudySectionKey =
  | 'problema'
  | 'contexto'
  | 'decisoes'
  | 'arquitetura'
  | 'resultado'
  | 'reflexao'

export type CaseStudySection = {
  key: CaseStudySectionKey
  title: string
  content: string
}

export type Project = {
  slug: string
  title: string
  summary: string
  stack: string[]
  order?: number
  featured?: boolean
  sections: CaseStudySection[]
}

export type MarkdownDocument<TFrontmatter extends Record<string, unknown>> = {
  slug: string
  frontmatter: TFrontmatter
  body: string
}
