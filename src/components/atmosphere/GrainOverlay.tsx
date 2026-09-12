type GrainOverlayProps = {
  animated: boolean
}

export const GrainOverlay = ({ animated }: GrainOverlayProps) => (
  <div
    className={[
      'atmosphere-grain',
      animated ? 'atmosphere-grain--animated' : '',
    ]
      .filter(Boolean)
      .join(' ')}
    aria-hidden="true"
  />
)
