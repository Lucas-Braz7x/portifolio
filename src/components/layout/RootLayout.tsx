import { Link, Outlet } from 'react-router-dom'

import { PrimaryNav } from '@/components/layout/PrimaryNav'
import { useSiteDocumentMeta } from '@/hooks/useSiteDocumentMeta'

export const RootLayout = () => {
  useSiteDocumentMeta()

  return (
    <div className="min-h-dvh bg-[var(--color-bg)] text-[var(--color-fg)]">
      <div className="mx-auto max-w-3xl px-6 py-8 md:py-10">
        <div className="flex flex-col gap-6 border-b border-[var(--color-border)] pb-8 md:flex-row md:items-center md:justify-between">
          <Link
            to="/"
            className="font-display text-lg tracking-[0.2em] text-[var(--color-fg)] uppercase"
          >
            LBD
          </Link>
          <PrimaryNav />
        </div>
      </div>
      <main className="mx-auto max-w-3xl px-6 pb-24">
        <Outlet />
      </main>
    </div>
  )
}
