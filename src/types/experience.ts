/** Frontmatter de `content/experience/currently.md` (spec 05). */
export type CurrentlyFrontmatter = {
  role: string
  /** Cada entrada = uma linha na seção (ex.: `AWS / Backend / Fullstack`). */
  focus?: string[]
  /** Itens exibidos em lista numerada 01, 02, … */
  learning?: string[]
}

export type Currently = {
  role: string
  focus: string[]
  learning: string[]
}
