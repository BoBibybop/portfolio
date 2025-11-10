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
            href="https://github.com/BoBibybop/WillBot" 
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
            href="https://github.com/BoBibybop/Hnefatafl" 
            className="project-card project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-icon">💻</div>
            <h3 className="project-title">Hnefatafl</h3>
            <p className="project-description">Création d'une desktop app en console d'un jeu de Hnefatafl</p>
            <div className="project-tech">C++</div>
            <div className="project-link-indicator">Voir sur GitLab →</div>
          </a>
          
          <a 
            href="https://github.com/BoBibybop/h2r-hotel-bdd" 
            className="project-card project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-icon">🕹️</div>
            <h3 className="project-title">Hotel Database</h3>
            <p className="project-description">Création d'une app desktop de gestion d'hôtel. On peut gérer les réservations, les clients et les chambres.</p>
            <div className="project-tech">SQL • Python</div>
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
