import { Link } from 'react-router-dom'

import { siteLinks } from '@/lib/site-links'

export const SocialLinks = () => (
  <ul className="type-body-sm flex flex-wrap gap-x-6 gap-y-2">
    <li>
      <a
        href={siteLinks.github}
        className="text-[var(--color-fg)] underline-offset-4 hover:underline"
        rel="noreferrer"
        target="_blank"
      >
        GitHub
      </a>
    </li>
    <li>
      <a
        href={siteLinks.linkedin}
        className="text-[var(--color-fg)] underline-offset-4 hover:underline"
        rel="noreferrer"
        target="_blank"
      >
        LinkedIn
      </a>
    </li>
    <li>
      <Link
        to={siteLinks.emailPath}
        className="text-[var(--color-fg)] underline-offset-4 hover:underline"
      >
        Email
      </Link>
    </li>
  </ul>
)
