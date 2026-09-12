import { Link } from 'react-router-dom'

import { PageSection } from '@/components/ui/PageSection'
import { siteVision } from '@/lib/site-vision'

export const HomePage = () => {
  return (
    <div className="space-y-2">
      <p className="type-body max-w-xl text-[var(--color-fg)]">
        {siteVision.positioning}
      </p>

      <PageSection index="01 / Currently" title="Agora">
        <p className="type-body-sm text-[var(--color-fg)]">
          Software Engineer @ Certta
        </p>
        <p className="type-body-sm mt-2">AWS · Backend · Fullstack · AI</p>
        <p className="type-body-sm mt-4">
          Conteúdo editável em{' '}
          <code className="text-[var(--color-fg)]">content/experience/</code>.
        </p>
      </PageSection>

      <PageSection index="02 / Selected work" title="Trabalho selecionado">
        <p className="type-body-sm">
          Case studies em{' '}
          <Link
            to="/projects"
            className="text-[var(--color-fg)] underline-offset-4 hover:underline"
          >
            projetos
          </Link>
          .
        </p>
      </PageSection>

      <PageSection index="03 / Elsewhere" title="Links">
        <ul className="type-body-sm flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a
              href="https://github.com/"
              className="text-[var(--color-fg)] underline-offset-4 hover:underline"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/"
              className="text-[var(--color-fg)] underline-offset-4 hover:underline"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-[var(--color-fg)] underline-offset-4 hover:underline"
            >
              Email
            </Link>
          </li>
        </ul>
      </PageSection>
    </div>
  )
}
