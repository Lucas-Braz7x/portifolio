import type { ReactNode } from 'react'

type PageContainerProps = {
  children: ReactNode
  as?: 'main' | 'div'
}

export const PageContainer = ({ children, as = 'main' }: PageContainerProps) => {
  const Tag = as

  return <Tag className="relative z-[var(--z-content)] layout-page">{children}</Tag>
}
