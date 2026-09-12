type VignetteOverlayProps = {
  flicker: boolean
}

export const VignetteOverlay = ({ flicker }: VignetteOverlayProps) => (
  <div
    className={[
      'atmosphere-vignette',
      flicker ? 'atmosphere-vignette--flicker' : '',
    ]
      .filter(Boolean)
      .join(' ')}
    aria-hidden="true"
  />
)
