import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2>Let's work together</h2>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Ready to start a project?</h3>
            <p>
              I'm always open to discussing new projects, creative ideas or 
              opportunities to be part of your vision.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="currentColor" className="contact-icon">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>darrenkang03@gmail.com</span>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="currentColor" className="contact-icon">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
          
          {/* <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your name"
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="your@email.com"
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              Send Message
            </button>
          </form> */}
        </div>
      </div>
    </section>
  )
}

export default Contact
