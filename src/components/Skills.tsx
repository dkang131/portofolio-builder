import './Skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['Tailwind CSS', 'HTML5/CSS3', 'JavaScript (ES6+)']
  },
  {
    title: 'Backend',
    skills: ['Python', 'PostgreSQL', 'REST APIs', 'FastAPI', 'Flask']
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'UV']
  }
]

function Skills() {
  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Skills</span>
          <h2>Technologies I work with</h2>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-card">
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
