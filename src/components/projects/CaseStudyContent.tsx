import { MermaidDiagram } from '@/components/projects/MermaidDiagram'

type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'mermaid'; chart: string }

const parseContentBlocks = (content: string): ContentBlock[] => {
  const blocks: ContentBlock[] = []
  const parts = content.split(/```mermaid\n([\s\S]*?)```/g)

  for (let index = 0; index < parts.length; index++) {
    const part = parts[index]
    if (!part.trim()) continue

    if (index % 2 === 1) {
      blocks.push({ type: 'mermaid', chart: part.trim() })
      continue
    }

    const paragraphs = part.split(/\n{2,}/)

    for (const paragraph of paragraphs) {
      const trimmed = paragraph.trim()
      if (!trimmed) continue

      const lines = trimmed.split('\n')
      const isList = lines.every((line) => /^-\s+/.test(line))

      if (isList) {
        blocks.push({
          type: 'list',
          items: lines.map((line) => line.replace(/^-\s+/, '').trim()),
        })
      } else {
        blocks.push({ type: 'paragraph', text: trimmed })
      }
    }
  }

  return blocks
}

type CaseStudyContentProps = {
  content: string
}

export const CaseStudyContent = ({ content }: CaseStudyContentProps) => {
  const blocks = parseContentBlocks(content)

  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        if (block.type === 'mermaid') {
          return <MermaidDiagram key={`mermaid-${index}`} chart={block.chart} />
        }

        if (block.type === 'list') {
          return (
            <ul key={`list-${index}`} className="list-disc space-y-1 pl-5">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }

        return (
          <p key={`p-${index}`} className="whitespace-pre-wrap">
            {block.text}
          </p>
        )
      })}
    </div>
  )
}
