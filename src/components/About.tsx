import './About.css'

function About() {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2>Get to know me</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm an AI Engineer with a background in Statistics and hands-on experience in computer vision and machine learning. 
              Experienced in building and deploying end-to-end CV applications, from data preparation and model training to production release. 
              Strong in Python, R, and data-driven problem solving, with a focus on delivering practical and scalable AI solutions.
            </p>
            <p>
              When I'm not working on AI or Machine Learning projects,
              I enjoy being back to my roots of statistics and data analysis
              where I work on data analysis and data science projects.
            </p>
            <p>
              I'm always looking for new challenges and opportunities to grow 
              as a developer. Let's build something amazing together!
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            {/* <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Completed</span>
            </div> */}
            {/* <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Happy Clients</span>
            </div> */}
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Commitment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
