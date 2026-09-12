export type SitePrinciple = {
  id: string
  summary: string
  reviewPrompt: string
}

export type SitePrinciples = {
  principles: readonly SitePrinciple[]
}
