import { CurrentlySection } from '@/components/experience/CurrentlySection'
import { PageSection } from '@/components/ui/PageSection'
import { useCurrently } from '@/hooks/useCurrently'

export const AboutPage = () => {
  const currently = useCurrently()

  return (
    <div>
      <h1 className="type-page-title">Sobre</h1>
      <p className="type-body-sm mt-4 text-[var(--color-muted)]">
        Copy em construção. O bloco abaixo espelha o mesmo conteúdo da Home (
        <code className="text-[var(--color-fg)]">content/experience/currently.md</code>
        ).
      </p>

      <PageSection index="Currently" title="Agora">
        <CurrentlySection currently={currently} />
      </PageSection>
    </div>
  )
}
