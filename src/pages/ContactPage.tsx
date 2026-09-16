import { SitePageLayout } from '@/components/layout/SitePageLayout'

export const ContactPage = () => {
  return (
    <SitePageLayout
      title="Contato"
      intro={
        <>
          Adicionar email e links quando definidos em{' '}
          <code className="text-[var(--color-fg)]">specs/18-open-decisions.md</code>.
        </>
      }
    />
  )
}
