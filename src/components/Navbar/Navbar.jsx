import '../Navbar/Navbar-style.css'
import logo from '../../assets/images/logo.png'
import search from '../../assets/images/search.png'
import home from '../../assets/images/home.png'
import network from '../../assets/images/network.png'
import jobs from '../../assets/images/jobs.png'
import message from '../../assets/images/message.png'
import notification from '../../assets/images/notification.png'
import user1 from '../../assets/images/user-1.png'
import feedback from '../../assets/images/feedback.png'
import setting from '../../assets/images/setting.png'
import help from '../../assets/images/help.png'
import display from '../../assets/images/display.png'
import logout from '../../assets/images/logout.png'
import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo"><img src={logo} alt="logo" /></Link>
          <div className="search-box">
            <img src={search} alt="img" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="navbar-center">
          <ul>
            <li><a href="#" className="active-link"><img src={home} /><span>Home</span></a></li>
            <li><a href="#"><img src={network} /><span>My Network</span></a></li>
            <li><a href="#"><img src={jobs} /><span>Job</span></a></li>
            <li><a href="#"><img src={message} /><span>Messaging</span></a></li>
            <li><a href="#"><img src={notification} /><span>Notifiaction</span></a></li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="online">
            <img src={user1} alt="user-img" className="nav-profile-img" onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
        <div ref={menuRef} className={`profile-menu-wrap ${isOpen ? "open-menu" : ""}`} id="profileMenu">
          <div className="profile-menu">
            <div className="user-info">
              <img src={user1} />
              <div>
                <h3>Rayan Walton</h3>
                <Link to="/profile">See your profile</Link>
              </div>
            </div>
            <hr />
            <a href="#" className="profile-menu-link">
              <img src={feedback} alt />
              <p>Give Feedback</p>
              <span> &gt; </span>
            </a>
            <a href="#" className="profile-menu-link">
              <img src={setting} alt />
              <p>Setting</p>
              <span> &gt; </span>
            </a>
            <a href="#" className="profile-menu-link">
              <img src={help} alt />
              <p>Help &amp; Support</p>
              <span> &gt; </span>
            </a>
            <a href="#" className="profile-menu-link">
              <img src={display} alt />
              <p>Display &amp; Accessiblity</p>
              <span> &gt; </span>
            </a>
            <a href="#" className="profile-menu-link">
              <img src={logout} alt />
              <p>Logout</p>
              <span> &gt; </span>
            </a>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar