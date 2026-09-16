/** Indicador ● REC — spec 24. */
export const RecIndicator = () => (
  <p
    className="type-caption flex items-center gap-2 tracking-[0.14em] text-[var(--color-fg)] uppercase"
    aria-label="Gravando"
  >
    <span
      className="inline-block size-2 rounded-full bg-[var(--color-rec)] motion-safe:animate-pulse"
      aria-hidden="true"
    />
    REC
  </p>
)
