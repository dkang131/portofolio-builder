import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import BuilderApp from './builder/BuilderApp'

function Portfolio() {
  return (
    <div className="portfolio">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Darren Kang Wan Chee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function App() {
  const [mode, setMode] = useState<'portfolio' | 'builder'>('builder')

  return (
    <>
      <div className="mode-toggle">
        <button 
          className={mode === 'portfolio' ? 'active' : ''}
          onClick={() => setMode('portfolio')}
        >
          Portfolio
        </button>
        <button 
          className={mode === 'builder' ? 'active' : ''}
          onClick={() => setMode('builder')}
        >
          Builder
        </button>
      </div>
      {mode === 'portfolio' ? <Portfolio /> : <BuilderApp />}
    </>
  )
}

export default App
