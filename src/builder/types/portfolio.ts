export interface SocialLinks {
  github: string
  linkedin: string
  email: string
}

export interface Stat {
  number: string
  label: string
}

export interface SkillCategory {
  title: string
  skills: string[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  isPaper?: boolean
}

export interface PortfolioConfig {
  name: string
  title: string
  location: string
  social: SocialLinks
  about: {
    description: string
    stats: Stat[]
  }
  skills: SkillCategory[]
  projects: Project[]
}

export const defaultConfig: PortfolioConfig = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  location: 'City, Country',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'your.email@example.com'
  },
  about: {
    description: 'I am a passionate developer...',
    stats: [
      { number: '3+', label: 'Years Experience' },
      { number: '20+', label: 'Projects Completed' }
    ]
  },
  skills: [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'PostgreSQL']
    },
    {
      title: 'Tools',
      skills: ['Git', 'Docker', 'AWS']
    }
  ],
  projects: [
    {
      title: 'Project Name',
      description: 'Project description...',
      tags: ['React', 'Node.js'],
      github: 'https://github.com/yourusername/project',
      demo: 'https://demo-link.com'
    }
  ]
}
