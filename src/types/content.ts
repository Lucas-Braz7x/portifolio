export type ProjectFrontmatter = {
  title: string
  summary: string
  stack?: string[] | string
  order?: number
  featured?: boolean
  /** Path em `public/` — obrigatório para featured na Home quando publicado (spec 21). */
  thumbnail?: string
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
  thumbnail?: string
  sections: CaseStudySection[]
}

export type MarkdownDocument<TFrontmatter extends Record<string, unknown>> = {
  slug: string
  frontmatter: TFrontmatter
  body: string
}
