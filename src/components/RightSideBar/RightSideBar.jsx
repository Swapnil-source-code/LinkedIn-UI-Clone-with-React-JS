import '../RightSideBar/RightSideBar-style.css'
import more from '../../assets/images/more.png'
import user1 from '../../assets/images/user-1.png'
import milogo from '../../assets/images/mi-logo.png'
import logo from '../../assets/images/logo.png'


const RightSideBar = () => {
  
  
  return (
    <>
      <div className="right-sidebar">
        <div className="sidebar-news">
          <img src={more} className="info-icon" />
          <h3>Trending News</h3>
          <a href="#">High demand for Skilled manpower</a>
          <span>1d ago · 10,934 readers</span>
          <a href="#">Careers growing horizontally too </a>
          <span>19h ago · 1,434 readers</span>
          <a href="#">Less work visa for US more for UK</a>
          <span>1d ago · 27,334 readers</span>
          <a href="#">More hiring  = higher confidence ?</a>
          <span>18h ago · 8,208 readers</span>
          <a href="#">Adani is the world&#39;s third richest</a>
          <span>12h ago · 4,205 readers</span>
          <a href="#" className="read-more-link">Read More</a>
        </div>
        <div className="sidebar-ad">
          <small>Ad···</small>
          <p>Master the 5 Principles of the design</p>
          <div>
            <img src={user1} alt />
            <img src={milogo} alt />
          </div>
          <b>Brand and demand in Xiaomi</b>
          <a href="#" className="ad-link">Learn More</a>
        </div>
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

export default RightSideBar