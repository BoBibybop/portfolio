import BackgroundGrid from '../components/BackgroundGrid'
import ProfileSection from '../components/ProfileSection'
import Title from '../components/Title'
import NavigationMenu from '../components/NavigationMenu'
import CornerDecorations from '../components/CornerDecorations'
import './Home.css'

function Home() {
  return (
    <div className="jarvis-container">
      <BackgroundGrid />
      
      <div className="content-wrapper">
        <ProfileSection />
        <Title />
        <NavigationMenu />
      </div>
      
      <CornerDecorations />
    </div>
  )
}

export default Home
