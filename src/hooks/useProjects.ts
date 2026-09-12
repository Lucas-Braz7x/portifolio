import {
  getAllProjects,
  getFeaturedProjects,
  getHomeSelectedProjects,
  getProjectBySlug,
} from '@/lib/content'

export const useProjects = () => getAllProjects()

export const useFeaturedProjects = () => getFeaturedProjects()

export const useHomeSelectedProjects = () => getHomeSelectedProjects()

export const useProject = (slug: string | undefined) => {
  if (!slug) return undefined
  return getProjectBySlug(slug)
}
