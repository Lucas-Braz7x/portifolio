import { ProjectTeaser } from '@/components/home/ProjectTeaser'
import type { Project } from '@/types/content'

type ProjectListItemProps = {
  project: Project
  index: number
}

export const ProjectListItem = ({ project, index }: ProjectListItemProps) => (
  <li>
    <ProjectTeaser project={project} index={index} />
  </li>
)
