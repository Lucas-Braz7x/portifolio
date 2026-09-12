import type { CaseStudySection, CaseStudySectionKey } from '@/types/content'

const SECTION_DEFINITIONS: readonly {
  key: CaseStudySectionKey
  title: string
  headingMatchers: readonly string[]
}[] = [
  { key: 'problema', title: 'Problema', headingMatchers: ['problema'] },
  { key: 'contexto', title: 'Contexto', headingMatchers: ['contexto'] },
  {
    key: 'decisoes',
    title: 'Decisões',
    headingMatchers: ['decisoes', 'decisões'],
  },
  {
    key: 'arquitetura',
    title: 'Arquitetura',
    headingMatchers: ['arquitetura'],
  },
  { key: 'resultado', title: 'Resultado', headingMatchers: ['resultado'] },
  {
    key: 'reflexao',
    title: 'O que eu faria diferente',
    headingMatchers: [
      'o que eu faria diferente',
      'o que faria diferente',
    ],
  },
]

const normalizeHeading = (heading: string): string =>
  heading
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')

const matchSectionKey = (heading: string): CaseStudySectionKey | null => {
  const normalized = normalizeHeading(heading)

  for (const definition of SECTION_DEFINITIONS) {
    if (
      definition.headingMatchers.some(
        (matcher) => normalizeHeading(matcher) === normalized,
      )
    ) {
      return definition.key
    }
  }

  return null
}

export const CASE_STUDY_SECTION_DEFINITIONS = SECTION_DEFINITIONS

export const parseCaseStudySections = (body: string): CaseStudySection[] => {
  const chunks = body.split(/^##\s+/m).filter(Boolean)
  const byKey = new Map<CaseStudySectionKey, string>()

  for (const chunk of chunks) {
    const newline = chunk.indexOf('\n')
    if (newline === -1) continue

    const heading = chunk.slice(0, newline).trim()
    const content = chunk.slice(newline + 1).trim()
    const key = matchSectionKey(heading)

    if (key) {
      byKey.set(key, content)
    }
  }

  return SECTION_DEFINITIONS.map((definition) => ({
    key: definition.key,
    title: definition.title,
    content: byKey.get(definition.key) ?? '',
  }))
}

export const assertCaseStudyComplete = (
  slug: string,
  sections: readonly CaseStudySection[],
): void => {
  for (const definition of SECTION_DEFINITIONS) {
    const section = sections.find((item) => item.key === definition.key)
    if (!section?.content.trim()) {
      throw new Error(
        `Project "${slug}" is missing required section "## ${definition.title}".`,
      )
    }
  }

  const architecture =
    sections.find((item) => item.key === 'arquitetura')?.content ?? ''

  const hasDiagram =
    architecture.includes('```mermaid') || /!\[[^\]]*\]\([^)]+\)/.test(architecture)

  if (!hasDiagram) {
    throw new Error(
      `Project "${slug}" must include an architecture diagram (mermaid fence or image) in "## Arquitetura".`,
    )
  }
}
