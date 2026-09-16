import { ExperimentList } from '@/components/lab/ExperimentList'
import { SitePageLayout } from '@/components/layout/SitePageLayout'
import { useExperiments } from '@/hooks/useExperiments'

export const LabPage = () => {
  const experiments = useExperiments()

  return (
    <SitePageLayout
      title="Lab"
      intro={
        <>
          Experimentos, estudos e ideias que não viraram case study. Lista carregada
          de{' '}
          <code className="text-[var(--color-fg)]">content/experiments/</code> no
          build.
        </>
      }
    >
      <ExperimentList experiments={experiments} />
    </SitePageLayout>
  )
}
