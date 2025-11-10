import BackgroundGrid from '../components/BackgroundGrid'
import ProfileSection from '../components/ProfileSection'
import NavigationMenu from '../components/NavigationMenu'
import CornerDecorations from '../components/CornerDecorations'
import './About.css'

function About() {
  return (
    <div className="jarvis-container">
      <BackgroundGrid />
      
      <div className="content-wrapper">
        {/* Header with profile on the left */}
        <div className="about-header">
          <div className="about-profile-side">
            <ProfileSection />
          </div>
          <div className="about-title-side">
            <h1 className="page-title">À PROPOS</h1>
            <p className="page-subtitle">Développeur Full-Stack passionné</p>
          </div>
        </div>
        
        {/* Content sections */}
        <div className="about-content">
          <div className="about-section">
            <h3 className="about-section-title">COMPÉTENCES</h3>
            <div className="skills-grid">
              <div className="skill-item">Frontend: React, HTML, CSS</div>
              <div className="skill-item">Backend: Node.js, Express, Python FastAPI</div>
              <div className="skill-item">Database: SQLite, PostgreSQL, MySQL</div>
              <div className="skill-item">Tools: Git, Docker</div>
            </div>
          </div>
          
          <div className="about-section">
            <h3 className="about-section-title">FORMATION</h3>
            <div className="experience-item">
              <div className="experience-title">BUT Informatique - Data & IA</div>
              <div className="experience-date">2024 - Présent</div>
              <div className="experience-desc">Développement d'applications web modernes, intégrant de l'intelligence artificielle et de la gestion de données.</div>
            </div>
          </div>
          <div className="about-section">
            <h3 className="about-section-title">DIPLÔMES</h3>
            <div className='experience-item'>
                <div className='experience-title'>BACCALAUREAT</div>
                <div className='experience-date'>2023</div>
                <div className="experience-desc">Bac général en mathématiques, Physique-Chimie, Numérique et sciences de l'informatique. <br /> Mention Bien</div>
            </div>
            <div className='experience-item'>
                <div className='experience-title'>CQP Kayak</div>
                <div className='experience-date'>2023</div>
                <div className="experience-desc">Certification de qualification professionnelle en kayak.</div>
            </div>
          </div>
        </div>
        
        <NavigationMenu />
      </div>
      
      <CornerDecorations />
    </div>
  )
}

export default About
