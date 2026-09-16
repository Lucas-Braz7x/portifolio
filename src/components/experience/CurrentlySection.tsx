import type { Currently } from '@/types/experience'

type CurrentlySectionProps = {
  currently: Currently
  /** Exibir prefixo `/` nas linhas de foco (referência visual home). */
  showFocusSlash?: boolean
  /** Faixa editorial Home: só role + foco, sem learning. */
  compact?: boolean
}

export const CurrentlySection = ({
  currently,
  showFocusSlash = true,
  compact = false,
}: CurrentlySectionProps) => (
  <div className="space-y-4">
    <p className="type-body-sm text-[var(--color-fg)]">{currently.role}</p>

    {currently.focus.length > 0 ? (
      <ul className="space-y-1" aria-label="Foco técnico">
        {currently.focus.map((line) => (
          <li key={line} className="type-body-sm">
            {showFocusSlash ? (
              <span className="text-[var(--color-muted)]" aria-hidden="true">
                /{' '}
              </span>
            ) : null}
            {line}
          </li>
        ))}
      </ul>
    ) : null}

    {!compact && currently.learning.length > 0 ? (
      <div>
        <p
          id="currently-learning-label"
          className="type-caption text-[var(--color-muted)]"
        >
          Learning
        </p>
        <ol
          className="mt-2 space-y-1"
          aria-labelledby="currently-learning-label"
        >
          {currently.learning.map((item, index) => (
            <li key={item} className="type-body-sm flex gap-3">
              <span
                className="type-caption w-6 shrink-0 tabular-nums text-[var(--color-muted)]"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>
    ) : null}
  </div>
)
