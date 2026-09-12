import { Link } from 'react-router-dom'

import { CurrentlySection } from '@/components/experience/CurrentlySection'
import { HomeHero } from '@/components/home/HomeHero'
import { ProjectTeaser } from '@/components/home/ProjectTeaser'
import { SocialLinks } from '@/components/home/SocialLinks'
import { PageSection } from '@/components/ui/PageSection'
import { useCurrently } from '@/hooks/useCurrently'
import { useHomeSelectedProjects } from '@/hooks/useProjects'

export const HomePage = () => {
  const currently = useCurrently()
  const selectedProjects = useHomeSelectedProjects()

  return (
    <div>
      <HomeHero />

      <PageSection index="01 / Currently" title="Atualmente">
        <CurrentlySection currently={currently} />
      </PageSection>

      <PageSection index="02 / Selected work" title="Trabalho selecionado">
        {selectedProjects.length === 0 ? (
          <p className="type-body-sm">
            Nenhum projeto em{' '}
            <code className="text-[var(--color-fg)]">content/projects/</code>.
          </p>
        ) : (
          <ul className="space-y-8">
            {selectedProjects.map((project, index) => (
              <li key={project.slug}>
                <ProjectTeaser project={project} index={index + 1} />
              </li>
            ))}
          </ul>
        )}
        <p className="type-body-sm mt-8">
          <Link
            to="/projects"
            className="text-[var(--color-fg)] underline-offset-4 hover:underline"
          >
            → ver todos os projetos
          </Link>
        </p>
      </PageSection>

      <PageSection index="03 / Elsewhere" title="Em outro lugar">
        <SocialLinks />
      </PageSection>
    </div>
  )
}
