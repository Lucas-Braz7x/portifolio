import { Link } from 'react-router-dom'

import { siteLinks } from '@/lib/site-links'

type SocialLinksProps = {
  showLabLink?: boolean
}

const iconClass = 'size-4 shrink-0 text-[var(--color-fg)]'

const GitHubIcon = () => (
  <svg className={iconClass} viewBox="0 0 19 19" aria-hidden="true">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844"
      clipRule="evenodd"
    />
  </svg>
)

const LinkedInIcon = () => (
  <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.25h4.56V23.5H.22V8.25zM8.5 8.25h4.37v2.09h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.54h-4.56v-7.58c0-1.81-.03-4.14-2.52-4.14-2.52 0-2.9 1.97-2.9 4v7.72H8.5V8.25z"
    />
  </svg>
)

const MailIcon = () => (
  <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13l10-6.99V6H2zm0 12h20V9l-10 6L2 9v9z"
    />
  </svg>
)

const FileIcon = () => (
  <svg className={iconClass} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M6 2h7l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V8h4.5L13 3.5zM8 12h8v2H8v-2zm0 4h8v2H8v-2z"
    />
  </svg>
)

const linkClass =
  'inline-flex items-center gap-3 text-[var(--color-fg)] underline-offset-4 hover:underline'

export const SocialLinks = ({ showLabLink = false }: SocialLinksProps) => (
  <ul className="space-y-4">
    <li>
      <a
        href={siteLinks.github}
        className={linkClass}
        rel="noreferrer"
        target="_blank"
      >
        <GitHubIcon />
        GitHub
      </a>
    </li>
    <li>
      <a
        href={siteLinks.linkedin}
        className={linkClass}
        rel="noreferrer"
        target="_blank"
      >
        <LinkedInIcon />
        LinkedIn
      </a>
    </li>
    <li>
      <Link to={siteLinks.emailPath} className={linkClass}>
        <MailIcon />
        Email
      </Link>
    </li>
    {siteLinks.resume ? (
      <li>
        <a
          href={siteLinks.resume}
          className={linkClass}
          rel="noreferrer"
          target="_blank"
        >
          <FileIcon />
          Currículo
        </a>
      </li>
    ) : (
      <li>
        <Link to="/about" className={linkClass}>
          <FileIcon />
          Currículo
        </Link>
      </li>
    )}
    {showLabLink ? (
      <li>
        <Link to="/lab" className={linkClass}>
          Lab
        </Link>
      </li>
    ) : null}
  </ul>
)
