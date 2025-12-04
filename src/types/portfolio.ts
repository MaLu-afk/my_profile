export interface Certification {
  name: string
  institution: string
  year: number
  url?: string
}

export interface Testimonial {
  id: number
  text: string
  author: string
  position: string
}

export const ProjectType = {
  ACADEMIC: "academic",
  PERSONAL: "personal",
} as const

export type ProjectType = typeof ProjectType[keyof typeof ProjectType]

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  demoAvailable: boolean
  projectType: ProjectType
  dateRange: string
  image: string
}