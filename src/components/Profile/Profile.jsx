import '../Profile/Profile-style.css'
import coverpic from '../../assets/images/cover-pic.png'
import user1 from '../../assets/images/user-1.png'
import user2 from '../../assets/images/user-2.png'
import connect from '../../assets/images/connect.png'
import chat from '../../assets/images/chat.png'
import microsoft from '../../assets/images/microsoft.png'
import slack from '../../assets/images/slack.png'
import google from '../../assets/images/google.png'
import rightarrow from '../../assets/images/right-arrow.png'
import stanford from '../../assets/images/stanford.png'
import north from '../../assets/images/north.png'
import mit from '../../assets/images/mit.png'
import milogo from '../../assets/images/mi-logo.png'
import user3 from '../../assets/images/user-3.png'
import user4 from '../../assets/images/user-4.png'
import user5 from '../../assets/images/user-5.png'


const Profile = () => {
  
  
  return (
    <>
      <div className="p-container">
        {/* Profile-Main */}
        <div className="profile-main">
          <div className="profile-container">
            <img src={coverpic} className="pro-bg" width="100%" />
            <div className="profile-container-inner">
              <img src={user1} className="profile-pic" />
              <h1>Rayan Walton</h1>
              <b>Web Developer at Microsoft | Former Developer at DataStuck and inter at Oracle</b>
              <p>San francisco, United States · <a href="#">Contact info</a></p>
              <div className="mutual-connection">
                <img src={user2} />
                <span>1 Mutual Connect : Orlando Diggs </span>
              </div>
              <div className="profile-btn">
                <a href="#" className="primary-btn"><img src={connect} />Connect</a>
                <a href="#"><img src={chat} />Message</a>
              </div>
            </div>
          </div>
          <div className="profile-description">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit netus ac a himenaeos convallis, ad dictumst leo nullam egestas vel quam praesent aptent suscipit. Nec feugiat sollicitudin interdum vulputate ultrices urna consequat faucibus justo, mollis massa bibendum neque id risus platea nunc porttitor, porta nascetur odio maecenas fringilla elementum curae vehicula.</p>
            <a href="#" className="see-more-link">See more...</a>
          </div>
          <div className="profile-description">
            <h2>Experience</h2>
            <div className="profile-desc-row">
              <img src={microsoft} alt />
              <div>
                <h3>Lead Front-End Developer</h3>
                <b>Microsoft · Full-time</b>
                <b>Feb 21 - Present · 1.5 Years</b>
                <p>Computer Programming is the process of performing a particular computation, usually by  designing and executable computer program </p>
                <hr />
              </div>
            </div>
            <div className="profile-desc-row">
              <img src={slack} alt />
              <div>
                <h3>Full-Stack Developer</h3>
                <b>Slack · Full-time</b>
                <b>June 2018 - Jan 2021 · 2.6 Years</b>
                <p>Computer Programming is the process of performing a particular computation, usually by  designing and executable computer program </p>
                <hr />
              </div>
            </div>
            <div className="profile-desc-row">
              <img src={google} alt />
              <div>
                <h3>Web Developer</h3>
                <b>Google Inc · Full-time</b>
                <b>Sept 2015 - May 2018 · 2.8 Years</b>
                <p>Computer Programming is the process of performing a particular computation, usually by  designing and executable computer program </p>
              </div>
            </div>
            <hr />
            <a href="#" className="experience-link">Show all 2 experiences <img src={rightarrow} alt /></a>
          </div>
          <div className="profile-description">
            <h2>Education</h2>
            <div className="profile-desc-row">
              <img src={stanford} alt />
              <div>
                <h3>Standford University</h3>
                <b>BSEE, Electrical Engineering </b>
                <b>2018 - 2022</b>
                <hr />
              </div>
            </div>
            <div className="profile-desc-row">
              <img src={north} alt />
              <div>
                <h3>Northwestern University</h3>
                <b>Computer Science </b>
                <b>2015 - 2018</b>
                <hr />
              </div>
            </div>
            <div className="profile-desc-row">
              <img src={mit} alt />
              <div>
                <h3>Harvard University</h3>
                <b>Senior High School </b> 
                <b>2005 - 2015</b>
              </div>
            </div>
          </div>
          <div className="profile-description">
            <h2>Skill</h2>
            <a href="#" className="skills-btn">Leadership</a>
            <a href="#" className="skills-btn">Web Desinging</a>
            <a href="#" className="skills-btn">Development</a>
            <a href="#" className="skills-btn">Communication</a>
            <a href="#" className="skills-btn">UI / UX</a>
            <a href="#" className="skills-btn">Planning</a>
            <a href="#" className="skills-btn">Coding</a>
            <a href="#" className="skills-btn">JavaScript</a>
            <a href="#" className="skills-btn">Python</a>
            <a href="#" className="skills-btn">Enterprenuorship</a>
          </div>
          <div className="profile-description">
            <h2>Language</h2>
            <a href="#" className="language-btn">English</a>
            <a href="#" className="language-btn">German</a>
          </div>
        </div>
        {/* Profile Sidebar */}
        <div className="profile-sidebar">
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
          <div className="sidebar-people">
            <h3>People you may know</h3>
            <div className="sidebar-people-row">
              <img src={user3} />
              <div>
                <h2>Samuel Tony</h2>
                <p>Head of Marketing at Alibaba</p>
                <a href="#">Connect</a>
              </div>
            </div>
            <div className="sidebar-people-row">
              <img src={user4} />
              <div>
                <h2>Benjamin Leo</h2>
                <p>Head of Marketing at Alibaba</p>
                <a href="#">Connect</a>
              </div>
            </div>
            <div className="sidebar-people-row">
              <img src={user5} />
              <div>
                <h2>Steave Greg</h2>
                <p>Head of Marketing at Alibaba</p>
                <a href="#">Connect</a>
              </div>
            </div>
            <div className="sidebar-people-row">
              <img src={user2} />
              <div>
                <h2>Martin Lewis</h2>
                <p>Head of Marketing at Alibaba</p>
                <a href="#">Connect</a>
              </div>
            </div>
            <div className="sidebar-people-row">
              <img src={user1} />
              <div>
                <h2>Clarence  George</h2>
                <p>Head of Marketing at Alibaba</p>
                <a href="#">Connect</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile