import './ProfileSection.css'
import profileImage from '../assets/PDP_Portfolio.png'

function ProfileSection() {
  return (
    <div className="profile-container">
      <div className="ring ring-outer"></div>
      <div className="ring ring-inner"></div>
      <div className="profile-image">
        <img src={profileImage} alt="Noah Paulmier Profile" />
      </div>
    </div>
  )
}

export default ProfileSection
