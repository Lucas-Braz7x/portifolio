import { getAllProjects, getFeaturedProjects, getProjectBySlug } from '@/lib/content'

export const useProjects = () => getAllProjects()

export const useFeaturedProjects = () => getFeaturedProjects()

export const useProject = (slug: string | undefined) => {
  if (!slug) return undefined
  return getProjectBySlug(slug)
}
