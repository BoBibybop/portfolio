import { Link, useLocation } from 'react-router-dom'
import './NavigationMenu.css'

function NavigationMenu() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <nav className="navigation-menu">
      {!isHomePage && (
        <Link 
          to="/" 
          className="nav-button nav-button-home"
        >
          <span className="button-text">ACCUEIL</span>
          <div className="button-glow"></div>
        </Link>
      )}
      
      <Link 
        to="/about" 
        className={`nav-button ${location.pathname === '/about' ? 'active' : ''}`}
      >
        <span className="button-text">À PROPOS</span>
        <div className="button-glow"></div>
      </Link>
      
      <Link 
        to="/projects" 
        className={`nav-button ${location.pathname === '/projects' ? 'active' : ''}`}
      >
        <span className="button-text">PROJETS</span>
        <div className="button-glow"></div>
      </Link>
      
      <Link 
        to="/contact" 
        className={`nav-button ${location.pathname === '/contact' ? 'active' : ''}`}
      >
        <span className="button-text">CONTACT</span>
        <div className="button-glow"></div>
      </Link>
    </nav>
  )
}

export default NavigationMenu
