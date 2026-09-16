export type NoteFrontmatter = {
  title: string
  date?: string
  summary?: string
  order?: number
}

export type Note = {
  slug: string
  title: string
  date?: string
  summary?: string
  order?: number
  body: string
}
