import { ExperimentListItem } from '@/components/lab/ExperimentListItem'
import type { Experiment } from '@/types/experiment'

type ExperimentListProps = {
  experiments: readonly Experiment[]
}

export const ExperimentList = ({ experiments }: ExperimentListProps) => {
  if (experiments.length === 0) {
    return (
      <p className="type-body-sm text-[var(--color-muted)]">
        Nenhum experimento em{' '}
        <code className="text-[var(--color-fg)]">content/experiments/</code>.
      </p>
    )
  }

  return (
    <ul className="editorial-grid list-none">
      {experiments.map((experiment) => (
        <ExperimentListItem key={experiment.slug} experiment={experiment} />
      ))}
    </ul>
  )
}
