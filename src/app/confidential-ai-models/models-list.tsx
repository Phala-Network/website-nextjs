'use client'

import { GitPullRequest, Star } from 'lucide-react'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

const categories = [
  'React',
  'TailwindCSS',
  'TypeScript',
  'Express',
  'MongoDB',
  'Python',
]

interface Project {
  title: string
  description: string
  category: string[]
  link: string
  stars: number
  contributions: number
  pullRequests: number
  role: 'author' | 'contributor'
}

const projects: Project[] = [
  {
    title: 'react-portfolio',
    description:
      'A portfolio website built that showcases my projects and skills',
    category: ['React', 'TailwindCSS', 'TypeScript'],
    link: '#',
    stars: 5,
    contributions: 2,
    pullRequests: 15,
    role: 'author',
  },
  {
    title: 'ai-chatbot',
    description: 'Chatbot rich with AI features and a clean UI',
    category: ['React', 'TailwindCSS', 'TypeScript', 'Python'],
    link: '#',
    stars: 86,
    contributions: 12,
    pullRequests: 43,
    role: 'contributor',
  },
  {
    title: 'task-manager-app',
    description:
      'Full-stack task management application with real-time updates',
    category: ['React', 'Express', 'MongoDB', 'TypeScript'],
    link: '#',
    stars: 34,
    contributions: 8,
    pullRequests: 27,
    role: 'contributor',
  },
  {
    title: 'data-visualization-dashboard',
    description: 'Interactive dashboard for visualizing complex datasets',
    category: ['React', 'TypeScript', 'Python'],
    link: '#',
    stars: 92,
    contributions: 15,
    pullRequests: 56,
    role: 'author',
  },
  {
    title: 'e-commerce-platform',
    description: 'Modern e-commerce platform with payment integration',
    category: ['React', 'Express', 'MongoDB', 'TypeScript'],
    link: '#',
    stars: 127,
    contributions: 23,
    pullRequests: 89,
    role: 'contributor',
  },
  {
    title: 'social-media-analyzer',
    description: 'Tool for analyzing social media trends and engagement',
    category: ['Python', 'React', 'MongoDB'],
    link: '#',
    stars: 73,
    contributions: 9,
    pullRequests: 31,
    role: 'author',
  },
  {
    title: 'weather-forecast-app',
    description: 'Real-time weather forecasting with interactive maps',
    category: ['React', 'TypeScript', 'Python'],
    link: '#',
    stars: 45,
    contributions: 7,
    pullRequests: 22,
    role: 'author',
  },
  {
    title: 'inventory-management-system',
    description: 'Enterprise-level inventory tracking and management solution',
    category: ['React', 'Express', 'MongoDB', 'TypeScript'],
    link: '#',
    stars: 156,
    contributions: 28,
    pullRequests: 94,
    role: 'contributor',
  },
  {
    title: 'fitness-tracking-platform',
    description: 'Comprehensive fitness and workout tracking application',
    category: ['React', 'TailwindCSS', 'MongoDB'],
    link: '#',
    stars: 112,
    contributions: 18,
    pullRequests: 67,
    role: 'author',
  },
  {
    title: 'recipe-sharing-network',
    description: 'Social platform for sharing and discovering recipes',
    category: ['React', 'Express', 'MongoDB'],
    link: '#',
    stars: 89,
    contributions: 14,
    pullRequests: 41,
    role: 'contributor',
  },
  {
    title: 'budget-tracker',
    description: 'Personal finance management and budgeting tool',
    category: ['React', 'TypeScript', 'MongoDB'],
    link: '#',
    stars: 67,
    contributions: 11,
    pullRequests: 35,
    role: 'author',
  },
  {
    title: 'learning-management-system',
    description: 'Educational platform for online course delivery',
    category: ['React', 'Express', 'TypeScript', 'MongoDB'],
    link: '#',
    stars: 143,
    contributions: 25,
    pullRequests: 78,
    role: 'contributor',
  },
]

const ModelsList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedRole, setSelectedRole] = useState<string>('all')
  const [showAllProjects, setShowAllProjects] = useState(false)

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === null || project.category.includes(selectedCategory)

    const matchesRole = selectedRole === 'all' || project.role === selectedRole

    return matchesCategory && matchesRole
  })

  return (
    <section className="bg-muted/50 py-32">
      <div className="container">
        <h1 className="text-center text-3xl font-medium md:text-5xl">
          Explore My Projects
        </h1>
        <div className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div
              className="-mx-8 flex items-center gap-2 overflow-x-auto px-8"
              style={{
                scrollbarWidth: 'none',
              }}
            >
              <Badge
                variant={selectedCategory === null ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(null)}
                className={cn(
                  'cursor-pointer',
                  selectedCategory !== null && 'bg-background',
                )}
              >
                All
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={
                    selectedCategory === category ? 'default' : 'outline'
                  }
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    'cursor-pointer',
                    selectedCategory !== category && 'bg-background',
                  )}
                >
                  {category}
                </Badge>
              ))}
            </div>
            <Select
              defaultValue={selectedRole}
              onValueChange={(value) => setSelectedRole(value)}
            >
              <SelectTrigger className="bg-background md:max-w-40 lg:max-w-96">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="author">Author</SelectItem>
                <SelectItem value="contributor">Contributor</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filteredProjects.length > 0 ? (
            <>
              <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {showAllProjects
                  ? filteredProjects.map((project) => (
                      <ProjectCard key={project.title} project={project} />
                    ))
                  : filteredProjects
                      .slice(0, 9)
                      .map((project) => (
                        <ProjectCard key={project.title} project={project} />
                      ))}
              </div>
              {filteredProjects.length > 9 && (
                <div className="mt-10 flex justify-center">
                  <Button
                    variant="outline"
                    onClick={() => setShowAllProjects(!showAllProjects)}
                  >
                    {showAllProjects ? 'Show Less' : 'View All Projects'}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="mt-16 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-medium">No Results Found</h3>
              <p className="text-muted-foreground mt-2 max-w-md">
                No projects match your filters. Try adjusting your search
                criteria or selecting a different category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ModelsList

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      href={project.link}
      className="border-border bg-background flex flex-col justify-between gap-8 rounded-lg border p-5"
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <span className="flex items-center gap-1 text-sm">
            <Star className="size-4 fill-yellow-500 text-yellow-500" />
            {project.stars}
          </span>
        </div>
        <p className="text-muted-foreground mt-2">{project.description}</p>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Badge variant="outline">{project.role}</Badge>
        <span className="text-muted-foreground flex items-center gap-3 text-sm">
          <span className="flex items-center gap-1">
            <GitPullRequest className="size-4" />
            {project.pullRequests}
          </span>
        </span>
      </div>
    </a>
  )
}
