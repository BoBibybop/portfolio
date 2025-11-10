import BackgroundGrid from '../components/BackgroundGrid'
import ProfileSection from '../components/ProfileSection'
import NavigationMenu from '../components/NavigationMenu'
import CornerDecorations from '../components/CornerDecorations'
import './Contact.css'

function Contact() {
  return (
    <div className="jarvis-container">
      <BackgroundGrid />
      
      <div className="content-wrapper">
        {/* Header with profile on the left */}
        <div className="contact-header">
          <div className="contact-profile-side">
            <ProfileSection />
          </div>
          <div className="contact-title-side">
            <h1 className="page-title">CONTACT</h1>
            <p className="page-subtitle">Restons en contact</p>
          </div>
        </div>
        
        <div className="contact-content">
          <a 
            href="mailto:noah.paulmier@outlook.fr" 
            className="contact-item contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">📧</div>
            <div className="contact-label">EMAIL</div>
            <div className="contact-value">noah.paulmier@outlook.fr</div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/noah-paulmier-04908934b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
            className="contact-item contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">💼</div>
            <div className="contact-label">LINKEDIN</div>
            <div className="contact-value">linkedin.com/in/noahpaulmier</div>
          </a>
          
          <a 
            href="https://github.com/BoBibybop" 
            className="contact-item contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">💻</div>
            <div className="contact-label">GITHUB</div>
            <div className="contact-value">github.com/BoBibybop</div>
          </a>
          
          <a 
            href="tel:+33783641975" 
            className="contact-item contact-link"
          >
            <div className="contact-icon">📱</div>
            <div className="contact-label">TÉLÉPHONE</div>
            <div className="contact-value">+33 7 83 64 19 75</div>
          </a>
        </div>
        
        <NavigationMenu />
      </div>
      
      <CornerDecorations />
    </div>
  )
}

export default Contact
