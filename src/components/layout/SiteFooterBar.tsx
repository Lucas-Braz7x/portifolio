import { siteHomeCopy } from '@/lib/site-home'
import { siteVision } from '@/lib/site-vision'

const footerYear = new Date().getFullYear()

export const SiteFooterBar = () => (
  <div className="home-block border-t border-[var(--color-border)] py-8">
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p className="type-caption text-[var(--color-muted)]">
        {siteVision.documentTitle} — {footerYear}
      </p>
      <p className="type-caption tracking-[0.12em] text-[var(--color-muted)] uppercase">
        {siteHomeCopy.footerTagline}
      </p>
    </div>
  </div>
)
