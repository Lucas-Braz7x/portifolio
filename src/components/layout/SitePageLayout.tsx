import type { ReactNode } from 'react'

import { SiteFooterBar } from '@/components/layout/SiteFooterBar'

type SitePageBelowProps = {
  children: ReactNode
  showFooter?: boolean
  /** Fundo transparente para a cena 3D/atmosfera aparecer atrás do conteúdo. */
  transparentSheet?: boolean
}

/** Faixa de conteúdo editorial abaixo do hero — mesma base visual da Home. */
export const SitePageBelow = ({
  children,
  showFooter = true,
  transparentSheet = false,
}: SitePageBelowProps) => (
  <div
    className={[
      'home-below',
      transparentSheet ? 'home-below--transparent' : '',
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
    {showFooter ? <SiteFooterBar /> : null}
  </div>
)

type SitePageLayoutProps = {
  title?: string
  intro?: ReactNode
  children?: ReactNode
  showFooter?: boolean
  transparentSheet?: boolean
}

export const SitePageLayout = ({
  title,
  intro,
  children,
  showFooter = true,
  transparentSheet = true,
}: SitePageLayoutProps) => (
  <SitePageBelow showFooter={showFooter} transparentSheet={transparentSheet}>
    {title ? (
      <header className="home-block">
        <h1 className="type-page-title">{title}</h1>
        {intro ? (
          <div className="type-body-sm mt-6 max-w-2xl text-[var(--color-muted)]">
            {intro}
          </div>
        ) : null}
      </header>
    ) : null}
    {children ? <div className="home-block">{children}</div> : null}
  </SitePageBelow>
)
