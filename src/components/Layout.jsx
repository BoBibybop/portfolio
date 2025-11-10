import BackgroundGrid from '../components/BackgroundGrid'
import CornerDecorations from '../components/CornerDecorations'
import './Layout.css'

function Layout({ children }) {
  return (
    <div className="jarvis-container">
      <BackgroundGrid />
      <div className="content-wrapper">
        {children}
      </div>
      <CornerDecorations />
    </div>
  )
}

export default Layout
