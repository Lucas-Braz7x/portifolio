import { Outlet } from 'react-router-dom'

import { AtmosphericEffects } from '@/components/atmosphere/AtmosphericEffects'
import { PageContainer } from '@/components/layout/PageContainer'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { NarrativeLayer } from '@/components/narrative/NarrativeLayer'
import { SceneLayers } from '@/components/three/SceneLayers'
import { useSiteDocumentMeta } from '@/hooks/useSiteDocumentMeta'

export const RootLayout = () => {
  useSiteDocumentMeta()

  return (
    <div className="min-h-dvh bg-[var(--color-bg)] text-[var(--color-fg)]">
      <NarrativeLayer />
      <SceneLayers />
      <AtmosphericEffects />
      <SiteHeader />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </div>
  )
}
