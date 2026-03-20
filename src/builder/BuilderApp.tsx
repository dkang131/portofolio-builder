import { BuilderProvider } from './context/BuilderContext'
import BasicInfoForm from './components/BasicInfoForm'
import AboutForm from './components/AboutForm'
import ProjectsForm from './components/ProjectsForm'
import Preview from './components/Preview'
import { generatePortfolioFiles, downloadAsZip } from './utils/export'
import { useBuilder } from './context/BuilderContext'
import './BuilderApp.css'

function BuilderContent() {
  const { config } = useBuilder()

  const handleExport = () => {
    const files = generatePortfolioFiles(config)
    downloadAsZip(files, 'portfolio-config')
    alert('Portfolio configuration downloaded! In the full version, this will generate a complete deployable portfolio.')
  }

  return (
    <div className="builder-app">
      <header className="builder-header">
        <div className="builder-header-content">
          <h1>Portfolio Builder</h1>
          <p>Create your professional portfolio in minutes</p>
        </div>
        <button className="btn-export" onClick={handleExport}>
          Export Portfolio
        </button>
      </header>

      <main className="builder-main">
        <div className="builder-forms">
          <BasicInfoForm />
          <AboutForm />
          <ProjectsForm />
        </div>
        
        <aside className="builder-preview">
          <Preview />
        </aside>
      </main>
    </div>
  )
}

export default function BuilderApp() {
  return (
    <BuilderProvider>
      <BuilderContent />
    </BuilderProvider>
  )
}
