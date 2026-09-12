import { lazy, Suspense, type ReactNode } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from '@/components/layout/RootLayout'
import { PageFallback } from '@/components/ui/PageFallback'

const HomePage = lazy(() =>
  import('@/pages/HomePage').then((m) => ({ default: m.HomePage })),
)
const ProjectsPage = lazy(() =>
  import('@/pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })),
)
const ProjectDetailPage = lazy(() =>
  import('@/pages/ProjectDetailPage').then((m) => ({
    default: m.ProjectDetailPage,
  })),
)
const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })),
)
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })),
)
const LabPage = lazy(() =>
  import('@/pages/LabPage').then((m) => ({ default: m.LabPage })),
)

function withSuspense(element: ReactNode) {
  return <Suspense fallback={<PageFallback />}>{element}</Suspense>
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: withSuspense(<HomePage />) },
      { path: 'projects', element: withSuspense(<ProjectsPage />) },
      { path: 'projects/:slug', element: withSuspense(<ProjectDetailPage />) },
      { path: 'about', element: withSuspense(<AboutPage />) },
      { path: 'contact', element: withSuspense(<ContactPage />) },
      { path: 'lab', element: withSuspense(<LabPage />) },
    ],
  },
])
