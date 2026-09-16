import { Link } from 'react-router-dom'

import { HeroTimestamp } from '@/components/home/HeroTimestamp'
import { siteHomeCopy } from '@/lib/site-home'
import { siteVision } from '@/lib/site-vision'

const heroLinks = [
  { to: '/projects', label: 'ver projetos' },
  { to: '/about', label: 'sobre mim' },
  { to: '/contact', label: 'contato' },
] as const

export const HomeHero = () => (
  <section className="home-hero" aria-labelledby="home-hero-title">
    <div className="home-hero__scrim" aria-hidden="true" />
    <div className="home-hero__inner layout-hero">
      <h1 id="home-hero-title" className="type-display-name">
        {siteVision.documentTitle}
      </h1>
      <p className="type-display-role mt-4 text-[var(--color-fg)]">
        Software Engineer
      </p>
      <p className="type-body mt-8 max-w-2xl text-[var(--color-fg)]">
        {siteVision.positioning}
      </p>
      <nav
        className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
        aria-label="Ações principais"
      >
        {heroLinks.map(({ to, label }) => (
          <Link key={to} to={to} className="home-hero__cta">
            → {label}
          </Link>
        ))}
      </nav>
    </div>
    <div className="home-hero__chrome layout-hero">
      <p className="home-hero__quote type-hero-quote">{siteHomeCopy.heroQuote}</p>
      <HeroTimestamp />
    </div>
  </section>
)
