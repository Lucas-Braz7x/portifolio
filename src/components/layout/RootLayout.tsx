import { Outlet } from 'react-router-dom'

import { PageContainer } from '@/components/layout/PageContainer'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { useSiteDocumentMeta } from '@/hooks/useSiteDocumentMeta'

export const RootLayout = () => {
  useSiteDocumentMeta()

  return (
    <div className="min-h-dvh bg-[var(--color-bg)] text-[var(--color-fg)]">
      <SiteHeader />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </div>
  )
}
