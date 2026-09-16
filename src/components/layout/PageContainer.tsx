import type { ReactNode } from 'react'

type PageContainerProps = {
  children: ReactNode
  as?: 'main' | 'div'
  className?: string
}

export const PageContainer = ({
  children,
  as = 'main',
  className,
}: PageContainerProps) => {
  const Tag = as

  return (
    <Tag
      className={[
        'relative z-[var(--z-content)] layout-page',
        className ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  )
}
