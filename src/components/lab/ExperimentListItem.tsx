import type { Experiment } from '@/types/experiment'

type ExperimentListItemProps = {
  experiment: Experiment
}

export const ExperimentListItem = ({ experiment }: ExperimentListItemProps) => {
  const titleClass =
    'font-display text-base leading-snug text-[var(--color-fg)] transition-colors'

  return (
    <li className="border-l border-[var(--color-accent)] pl-4">
      {experiment.url ? (
        <a
          href={experiment.url}
          className={`${titleClass} hover:text-[var(--color-accent)]`}
          rel="noreferrer"
          target="_blank"
        >
          {experiment.title}
          <span className="type-caption ml-2 text-[var(--color-muted)]" aria-hidden>
            ↗
          </span>
        </a>
      ) : (
        <p className={titleClass}>{experiment.title}</p>
      )}
      <p className="type-caption mt-2 text-[var(--color-muted)]">
        {experiment.summary}
      </p>
      {experiment.body ? (
        <p className="type-caption mt-3 line-clamp-3 text-[var(--color-muted)]">
          {experiment.body}
        </p>
      ) : null}
    </li>
  )
}
