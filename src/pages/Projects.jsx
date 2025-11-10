import BackgroundGrid from '../components/BackgroundGrid'
import ProfileSection from '../components/ProfileSection'
import NavigationMenu from '../components/NavigationMenu'
import CornerDecorations from '../components/CornerDecorations'
import './Projects.css'

function Projects() {
  return (
    <div className="jarvis-container">
      <BackgroundGrid />
      
      <div className="content-wrapper">
        {/* Header with profile on the left */}
        <div className="projects-header">
          <div className="projects-profile-side">
            <ProfileSection />
          </div>
          <div className="projects-title-side">
            <h1 className="page-title">PROJETS</h1>
            <p className="page-subtitle">Découvrez mes réalisations</p>
          </div>
        </div>
        
        <div className="projects-grid">
          <a 
            href="https://forge.iut-larochelle.fr/willbot" 
            className="project-card project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-icon">🤖</div>
            <h3 className="project-title">WillBot</h3>
            <p className="project-description">Création d'un petit robot de livraison, 
                il reçoit des requêtes depuis un serveur FastAPI 
                puis effectue une livraison à partir des informations de cette requête.</p>
            <div className="project-tech">FastAPI • PostgresSQL • Python</div>
            <div className="project-link-indicator">Voir sur GitLab →</div>
          </a>
          
          <a 
            href="https://forge.iut-larochelle.fr/music-app-1000et1notes" 
            className="project-card project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-icon">💻</div>
            <h3 className="project-title">Music APP</h3>
            <p className="project-description">Création en équipe d'une WebAPP de gestion et d'inscription à une école de musique. Ce projet à été fait en équipe de 4</p>
            <div className="project-tech">React • FastAPI • PostgreSQL</div>
            <div className="project-link-indicator">Voir sur GitLab →</div>
          </a>
          
          <a 
            href="https://forge.iut-larochelle.fr/npaulmie/pokemon" 
            className="project-card project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-icon">🕹️</div>
            <h3 className="project-title">PokeFight</h3>
            <p className="project-description">Création d'une app desktop de combat de pokemon. On peut créer ses propres équipes, pokémon et affronter d'autres joueurs.</p>
            <div className="project-tech">C++</div>
            <div className="project-link-indicator">Voir sur GitLab →</div>
          </a>
        </div>
        
        <NavigationMenu />
      </div>
      
      <CornerDecorations />
    </div>
  )
}

export default Projects
