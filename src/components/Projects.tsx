import './Projects.css'

const projects = [
  {
    title: 'Palm Fruit Ripeness Grading System',
    description: 'A full-stack palm fruit ripeness grading system that utilizes Computer Vision techniques for accurate fruit ripeness assessment from live video feed.',
    tags: ['Python', 'Computer Vision', 'PostgreSQL', 'Flask', 'Docker'],
  },
  {
    title: 'People Counter',
    description: 'A people counting system that utilizes Computer Vision techniques to count the number of people from a live video feed.',
    tags: ['Python', 'Computer Vision', 'Flask'],
    github: 'https://github.com/dkang131/people_counting',
  },
  {
    title: 'Cardiovascular Disease Risk Classification',
    description: 'A cardiovascular disease risk classification analysis that utilizes statistical methods and machine learning algorithms to predict the risk of cardiovascular disease based on patient data.',
    tags: ['Python', 'Data Analysis', 'Statistical Method'],
    github: 'https://github.com/dkang131/cardiovascular-classification',
  },
  {
    title: 'Hierarchical Bayesian Modelling on Predicting East Java Province Population',
    description: 'Published research paper on Hierarchical Bayesian Modelling on Predicting East Java Province Population. This work presents a novel approach to population prediction using hierarchical Bayesian modelling techniques.',
    tags: ['Research', 'Statistical Method'],
    demo: 'https://ieeexplore.ieee.org/document/11121518',
    isPaper: true
  }
]

function Projects() {
  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Projects</span>
          <h2>Featured Work</h2>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="link-icon">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="link-icon">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                      </svg>
                      {project.isPaper ? 'Paper' : 'Live Demo'}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
