import { HomeEditorialFooter } from '@/components/home/HomeEditorialFooter'
import { HomeHero } from '@/components/home/HomeHero'
import { HomeProjectShowcase } from '@/components/home/HomeProjectShowcase'
import { SitePageBelow } from '@/components/layout/SitePageLayout'
import { useCurrently } from '@/hooks/useCurrently'
import { useHomeSelectedProjects } from '@/hooks/useProjects'

export const HomePage = () => {
  const currently = useCurrently()
  const selectedProjects = useHomeSelectedProjects()

  return (
    <div className="home-page home-page--cinematic">
      <HomeHero />
      <SitePageBelow transparentSheet={false}>
        <HomeProjectShowcase projects={selectedProjects} />
        <HomeEditorialFooter currently={currently} />
      </SitePageBelow>
    </div>
  )
}
