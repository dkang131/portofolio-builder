import { useBuilder } from '../context/BuilderContext'
import './FormStyles.css'

export default function BasicInfoForm() {
  const { config, updateConfig, updateSocial } = useBuilder()

  return (
    <div className="form-section">
      <h2>Basic Information</h2>
      
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          value={config.name}
          onChange={(e) => updateConfig({ name: e.target.value })}
          placeholder="John Doe"
        />
      </div>

      <div className="form-group">
        <label htmlFor="title">Job Title</label>
        <input
          type="text"
          id="title"
          value={config.title}
          onChange={(e) => updateConfig({ title: e.target.value })}
          placeholder="Full Stack Developer"
        />
      </div>

      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={config.location}
          onChange={(e) => updateConfig({ location: e.target.value })}
          placeholder="City, Country"
        />
      </div>

      <h3>Social Links</h3>
      
      <div className="form-group">
        <label htmlFor="github">GitHub URL</label>
        <input
          type="url"
          id="github"
          value={config.social.github}
          onChange={(e) => updateSocial({ github: e.target.value })}
          placeholder="https://github.com/username"
        />
      </div>

      <div className="form-group">
        <label htmlFor="linkedin">LinkedIn URL</label>
        <input
          type="url"
          id="linkedin"
          value={config.social.linkedin}
          onChange={(e) => updateSocial({ linkedin: e.target.value })}
          placeholder="https://linkedin.com/in/username"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={config.social.email}
          onChange={(e) => updateSocial({ email: e.target.value })}
          placeholder="your@email.com"
        />
      </div>
    </div>
  )
}
