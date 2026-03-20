import { useBuilder } from '../context/BuilderContext'
import './Preview.css'

export default function Preview() {
  const { config } = useBuilder()

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h3>Live Preview</h3>
      </div>
      
      <div className="preview-content">
        {/* Hero Preview */}
        <section className="preview-hero">
          <div className="preview-hero-content">
            <p className="preview-greeting">Hello, I'm</p>
            <h1 className="preview-name">{config.name}</h1>
            <p className="preview-title">{config.title}</p>
            <div className="preview-buttons">
              <span className="preview-btn preview-btn-primary">View My Work</span>
              <span className="preview-btn preview-btn-secondary">Get In Touch</span>
            </div>
          </div>
          <div className="preview-avatar">
            {config.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
        </section>

        {/* About Preview */}
        <section className="preview-section">
          <h2>About Me</h2>
          <p className="preview-text">{config.about.description}</p>
          <div className="preview-stats">
            {config.about.stats.map((stat, i) => (
              <div key={i} className="preview-stat">
                <span className="preview-stat-number">{stat.number}</span>
                <span className="preview-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Preview */}
        <section className="preview-section preview-skills">
          <h2>Skills</h2>
          <div className="preview-skills-grid">
            {config.skills.map((category, i) => (
              <div key={i} className="preview-skill-card">
                <h4>{category.title}</h4>
                <ul>
                  {category.skills.slice(0, 4).map((skill, j) => (
                    <li key={j}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Preview */}
        <section className="preview-section">
          <h2>Projects</h2>
          <div className="preview-projects-grid">
            {config.projects.slice(0, 2).map((project, i) => (
              <div key={i} className="preview-project-card">
                <h4>{project.title}</h4>
                <p>{project.description.slice(0, 80)}...</p>
                <div className="preview-project-tags">
                  {project.tags.slice(0, 3).map((tag, j) => (
                    <span key={j} className="preview-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Preview */}
        <section className="preview-section preview-contact">
          <h2>Contact</h2>
          <p>{config.location}</p>
          <p>{config.social.email}</p>
        </section>
      </div>
    </div>
  )
}
