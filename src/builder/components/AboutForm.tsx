import { useState } from 'react'
import { useBuilder } from '../context/BuilderContext'
import './FormStyles.css'

export default function AboutForm() {
  const { config, updateAbout, addStat, removeStat } = useBuilder()
  const [newStat, setNewStat] = useState({ number: '', label: '' })

  const handleAddStat = () => {
    if (newStat.number && newStat.label) {
      addStat(newStat)
      setNewStat({ number: '', label: '' })
    }
  }

  return (
    <div className="form-section">
      <h2>About Section</h2>
      
      <div className="form-group">
        <label htmlFor="description">About Description</label>
        <textarea
          id="description"
          rows={5}
          value={config.about.description}
          onChange={(e) => updateAbout({ description: e.target.value })}
          placeholder="Tell us about yourself..."
        />
      </div>

      <h3>Stats</h3>
      
      <div className="stats-list">
        {config.about.stats.map((stat, index) => (
          <div key={index} className="stat-item-row">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
            <button 
              type="button" 
              className="btn-remove"
              onClick={() => removeStat(index)}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="add-stat-form">
        <input
          type="text"
          placeholder="Number (e.g., 3+)"
          value={newStat.number}
          onChange={(e) => setNewStat({ ...newStat, number: e.target.value })}
          className="stat-input"
        />
        <input
          type="text"
          placeholder="Label (e.g., Years Experience)"
          value={newStat.label}
          onChange={(e) => setNewStat({ ...newStat, label: e.target.value })}
          className="stat-input"
        />
        <button type="button" className="btn-add" onClick={handleAddStat}>
          Add Stat
        </button>
      </div>
    </div>
  )
}
