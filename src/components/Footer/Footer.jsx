import '../Footer/Footer-style.css'
import  logo from '../../assets/images/logo.png'


const Footer = () => {
 
 
  return (
    <>
      <div className="profile-footer">
        <div className="sidebar-useful-link">
          <a href="#">About</a>
          <a href="#">Accessbility</a>
          <a href="#">Help Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Advertising</a>
          <a href="#">Get the app</a>
          <a href="#">More</a>
          <div className="copyright-msg">
            <img src={logo} />
            <p>LinkedIn © 2024 All right reserved</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer