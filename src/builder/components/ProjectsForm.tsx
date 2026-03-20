import { useState } from 'react'
import { useBuilder } from '../context/BuilderContext'
import type { Project } from '../types/portfolio'
import './FormStyles.css'

const emptyProject: Project = {
  title: '',
  description: '',
  tags: [],
  github: '',
  demo: '',
  isPaper: false
}

export default function ProjectsForm() {
  const { config, addProject, removeProject } = useBuilder()
  const [newProject, setNewProject] = useState<Project>(emptyProject)
  const [tagInput, setTagInput] = useState('')

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      addProject(newProject)
      setNewProject(emptyProject)
      setTagInput('')
    }
  }

  const handleAddTag = () => {
    if (tagInput.trim()) {
      setNewProject({
        ...newProject,
        tags: [...newProject.tags, tagInput.trim()]
      })
      setTagInput('')
    }
  }

  const removeTag = (index: number) => {
    setNewProject({
      ...newProject,
      tags: newProject.tags.filter((_, i) => i !== index)
    })
  }

  return (
    <div className="form-section">
      <h2>Projects</h2>
      
      <div className="projects-list">
        {config.projects.map((project, index) => (
          <div key={index} className="project-card-form">
            <div className="project-header">
              <h4>{project.title}</h4>
              <button 
                type="button" 
                className="btn-remove"
                onClick={() => removeProject(index)}
              >
                ×
              </button>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="add-project-form">
        <h4>Add New Project</h4>
        
        <input
          type="text"
          placeholder="Project Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        
        <textarea
          rows={3}
          placeholder="Project Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />

        <div className="tags-input-row">
          <input
            type="text"
            placeholder="Add tag (e.g., React)"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
          />
          <button type="button" className="btn-add" onClick={handleAddTag}>
            Add Tag
          </button>
        </div>
        
        <div className="tags-preview">
          {newProject.tags.map((tag, i) => (
            <span key={i} className="tag removable" onClick={() => removeTag(i)}>
              {tag} ×
            </span>
          ))}
        </div>

        <input
          type="url"
          placeholder="GitHub URL (optional)"
          value={newProject.github}
          onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
        />
        
        <input
          type="url"
          placeholder="Demo URL (optional)"
          value={newProject.demo}
          onChange={(e) => setNewProject({ ...newProject, demo: e.target.value })}
        />

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={newProject.isPaper}
            onChange={(e) => setNewProject({ ...newProject, isPaper: e.target.checked })}
          />
          This is a research paper (will show "Paper" button)
        </label>

        <button type="button" className="btn-primary" onClick={handleAddProject}>
          Add Project
        </button>
      </div>
    </div>
  )
}
