import { Link } from 'react-router-dom'

import { PageSection } from '@/components/ui/PageSection'
import { siteVision } from '@/lib/site-vision'

export function HomePage() {
  return (
    <div className="space-y-2">
      <p className="max-w-xl text-lg leading-relaxed text-[var(--color-fg)]">
        {siteVision.positioning}
      </p>

      <PageSection index="01 / Currently" title="Agora">
        <p className="font-mono text-sm text-[var(--color-fg)]">
          Software Engineer @ Certta
        </p>
        <p className="mt-2 font-mono text-sm">AWS · Backend · Fullstack · AI</p>
        <p className="mt-4 text-sm">
          Conteúdo editável em{' '}
          <code className="text-[var(--color-fg)]">content/experience/</code>.
        </p>
      </PageSection>

      <PageSection index="02 / Selected work" title="Trabalho selecionado">
        <p className="text-sm">
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
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
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
