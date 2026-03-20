import { useState } from 'react'
import { BuilderProvider } from './context/BuilderContext'
import BasicInfoForm from './components/BasicInfoForm'
import AboutForm from './components/AboutForm'
import ProjectsForm from './components/ProjectsForm'
import Preview from './components/Preview'
import { downloadAsZip, deployToGitHub } from './utils/export'
import { useBuilder } from './context/BuilderContext'
import './BuilderApp.css'

function BuilderContent() {
  const { config } = useBuilder()
  const [isDeploying, setIsDeploying] = useState(false)
  const [deployStatus, setDeployStatus] = useState<string | null>(null)
  const [deployedUrl, setDeployedUrl] = useState<string | null>(null)

  const handleDownload = async () => {
    await downloadAsZip(config, 'my-portfolio')
    setDeployStatus('Portfolio downloaded! Extract and run: npm install && npm run deploy')
  }

  const handleDeploy = async () => {
    // For MVP, we use a simple token input approach
    // Future: Implement full GitHub OAuth flow
    const token = prompt('Enter your GitHub Personal Access Token:\n\n(Create one at: https://github.com/settings/tokens)\nRequired scopes: repo, public_repo')
    
    if (!token) return
    
    const repoName = prompt('Enter repository name:', 'my-portfolio')
    if (!repoName) return

    setIsDeploying(true)
    setDeployStatus('Creating repository...')

    try {
      const result = await deployToGitHub(config, token, repoName)
      setDeployedUrl(result.pagesUrl)
      setDeployStatus(`Success! Your portfolio will be live at:`)
    } catch (error) {
      setDeployStatus(`Error: ${error instanceof Error ? error.message : 'Failed to deploy'}`)
    } finally {
      setIsDeploying(false)
    }
  }

  return (
    <div className="builder-app">
      <header className="builder-header">
        <div className="builder-header-content">
          <h1>Portfolio Builder</h1>
          <p>Create your professional portfolio in minutes</p>
        </div>
        <div className="builder-actions">
          <button className="btn-download" onClick={handleDownload} disabled={isDeploying}>
            Download ZIP
          </button>
          <button className="btn-deploy" onClick={handleDeploy} disabled={isDeploying}>
            {isDeploying ? 'Deploying...' : 'Deploy to GitHub'}
          </button>
        </div>
      </header>

      {deployStatus && (
        <div className={`deploy-status ${deployedUrl ? 'success' : ''}`}>
          {deployStatus}
          {deployedUrl && (
            <div className="deployed-url">
              <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
                {deployedUrl}
              </a>
              <p>Wait 2-3 minutes for GitHub Pages to activate, then refresh the link.</p>
            </div>
          )}
        </div>
      )}

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
