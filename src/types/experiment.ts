export type ExperimentFrontmatter = {
  title: string
  summary: string
  url?: string
  order?: number
}

export type Experiment = {
  slug: string
  title: string
  summary: string
  url?: string
  order?: number
  body: string
}
