import { Link } from 'react-router-dom'

import { CurrentlySection } from '@/components/experience/CurrentlySection'
import { SocialLinks } from '@/components/home/SocialLinks'
import { siteHomeCopy } from '@/lib/site-home'
import type { Currently } from '@/types/experience'

type HomeEditorialFooterProps = {
  currently: Currently
}

export const HomeEditorialFooter = ({ currently }: HomeEditorialFooterProps) => (
  <footer className="home-block home-editorial">
    <div className="home-editorial__col">
      <section aria-labelledby="home-col-currently">
        <p className="type-section-kicker text-[var(--color-muted)]">03.</p>
        <h2 id="home-col-currently" className="type-section-title mt-2">
          Atualmente
        </h2>
        <div className="mt-6 text-[var(--color-fg)]">
          <CurrentlySection currently={currently} compact />
        </div>
      </section>
    </div>

    <div className="home-editorial__col">
      <section aria-labelledby="home-col-elsewhere">
        <p className="type-section-kicker text-[var(--color-muted)]">04.</p>
        <h2 id="home-col-elsewhere" className="type-section-title mt-2">
          Em outro lugar
        </h2>
        <div className="mt-6">
          <SocialLinks />
        </div>
      </section>
    </div>

    <div className="home-editorial__col">
      <section aria-labelledby="home-col-notes">
        <p className="type-section-kicker text-[var(--color-muted)]">05.</p>
        <h2 id="home-col-notes" className="type-section-title mt-2">
          Notas
        </h2>
        <p className="type-body-sm mt-6 text-[var(--color-fg)]">
          {siteHomeCopy.notesTeaser}
        </p>
        <p className="type-body-sm mt-6">
          <Link to="/notes" className="home-inline-link">
            {siteHomeCopy.notesLinkLabel} →
          </Link>
        </p>
      </section>
    </div>
  </footer>
)
