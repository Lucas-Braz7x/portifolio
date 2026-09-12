import { ExperimentList } from '@/components/lab/ExperimentList'
import { useExperiments } from '@/hooks/useExperiments'

export const LabPage = () => {
  const experiments = useExperiments()

  return (
    <div>
      <h1 className="type-page-title">Lab</h1>
      <p className="type-body-sm mt-4 max-w-xl text-[var(--color-muted)]">
        Experimentos, estudos e ideias que não viraram case study. Lista carregada
        de{' '}
        <code className="text-[var(--color-fg)]">content/experiments/</code> no
        build.
      </p>
      <div className="mt-10">
        <ExperimentList experiments={experiments} />
      </div>
    </div>
  )
}
