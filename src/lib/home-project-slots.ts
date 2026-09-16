import type { Project } from '@/types/content'

const HOME_PROJECT_SLOTS = 3

const editorialPlaceholders = [
  {
    title: 'Learning Analytics',
    summary: 'Métricas de aprendizado e dashboards para decisão pedagógica.',
    stack: ['Python', 'Power BI'],
  },
  {
    title: 'Oficina',
    summary: 'Experimentos de interface e narrativa — laboratório visual.',
    stack: ['TypeScript', 'Three.js'],
  },
] as const

export type HomeProjectSlot =
  | { kind: 'project'; project: Project }
  | {
      kind: 'placeholder'
      title: string
      summary: string
      stack: readonly string[]
    }

/** Até 3 slots na Home: projetos reais primeiro, depois placeholders editoriais (spec 21). */
export const buildHomeProjectSlots = (
  projects: readonly Project[],
): HomeProjectSlot[] => {
  const slots: HomeProjectSlot[] = projects
    .slice(0, HOME_PROJECT_SLOTS)
    .map((project) => ({ kind: 'project', project }))

  let placeholderIndex = 0
  while (slots.length < HOME_PROJECT_SLOTS) {
    const placeholder = editorialPlaceholders[placeholderIndex]
    if (!placeholder) break
    slots.push({ kind: 'placeholder', ...placeholder })
    placeholderIndex += 1
  }

  return slots
}
