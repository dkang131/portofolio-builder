import { createContext, useContext, useState, type ReactNode } from 'react'
import { type PortfolioConfig, defaultConfig } from '../types/portfolio'

interface BuilderContextType {
  config: PortfolioConfig
  updateConfig: (updates: Partial<PortfolioConfig>) => void
  updateAbout: (updates: Partial<PortfolioConfig['about']>) => void
  updateSocial: (updates: Partial<PortfolioConfig['social']>) => void
  addProject: (project: PortfolioConfig['projects'][0]) => void
  removeProject: (index: number) => void
  updateProject: (index: number, project: Partial<PortfolioConfig['projects'][0]>) => void
  addSkill: (categoryIndex: number, skill: string) => void
  removeSkill: (categoryIndex: number, skillIndex: number) => void
  addStat: (stat: PortfolioConfig['about']['stats'][0]) => void
  removeStat: (index: number) => void
}

const BuilderContext = createContext<BuilderContextType | undefined>(undefined)

export function BuilderProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<PortfolioConfig>(defaultConfig)

  const updateConfig = (updates: Partial<PortfolioConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }))
  }

  const updateAbout = (updates: Partial<PortfolioConfig['about']>) => {
    setConfig(prev => ({ ...prev, about: { ...prev.about, ...updates } }))
  }

  const updateSocial = (updates: Partial<PortfolioConfig['social']>) => {
    setConfig(prev => ({ ...prev, social: { ...prev.social, ...updates } }))
  }

  const addProject = (project: PortfolioConfig['projects'][0]) => {
    setConfig(prev => ({ ...prev, projects: [...prev.projects, project] }))
  }

  const removeProject = (index: number) => {
    setConfig(prev => ({ 
      ...prev, 
      projects: prev.projects.filter((_, i) => i !== index) 
    }))
  }

  const updateProject = (index: number, project: Partial<PortfolioConfig['projects'][0]>) => {
    setConfig(prev => ({
      ...prev,
      projects: prev.projects.map((p, i) => i === index ? { ...p, ...project } : p)
    }))
  }

  const addSkill = (categoryIndex: number, skill: string) => {
    setConfig(prev => ({
      ...prev,
      skills: prev.skills.map((cat, i) => 
        i === categoryIndex ? { ...cat, skills: [...cat.skills, skill] } : cat
      )
    }))
  }

  const removeSkill = (categoryIndex: number, skillIndex: number) => {
    setConfig(prev => ({
      ...prev,
      skills: prev.skills.map((cat, i) => 
        i === categoryIndex ? { ...cat, skills: cat.skills.filter((_, si) => si !== skillIndex) } : cat
      )
    }))
  }

  const addStat = (stat: PortfolioConfig['about']['stats'][0]) => {
    setConfig(prev => ({
      ...prev,
      about: { ...prev.about, stats: [...prev.about.stats, stat] }
    }))
  }

  const removeStat = (index: number) => {
    setConfig(prev => ({
      ...prev,
      about: { ...prev.about, stats: prev.about.stats.filter((_, i) => i !== index) }
    }))
  }

  return (
    <BuilderContext.Provider value={{
      config,
      updateConfig,
      updateAbout,
      updateSocial,
      addProject,
      removeProject,
      updateProject,
      addSkill,
      removeSkill,
      addStat,
      removeStat
    }}>
      {children}
    </BuilderContext.Provider>
  )
}

export function useBuilder() {
  const context = useContext(BuilderContext)
  if (!context) {
    throw new Error('useBuilder must be used within BuilderProvider')
  }
  return context
}
