import { CurrentlySection } from '@/components/experience/CurrentlySection'
import { SitePageLayout } from '@/components/layout/SitePageLayout'
import { PageSection } from '@/components/ui/PageSection'
import { useCurrently } from '@/hooks/useCurrently'

export const AboutPage = () => {
  const currently = useCurrently()

  return (
    <SitePageLayout
      title="Sobre"
      intro={
        <>
          Copy em construção. O bloco abaixo espelha o mesmo conteúdo da Home (
          <code className="text-[var(--color-fg)]">content/experience/currently.md</code>
          ).
        </>
      }
    >
      <PageSection index="Currently" title="Agora">
        <CurrentlySection currently={currently} />
      </PageSection>
    </SitePageLayout>
  )
}
