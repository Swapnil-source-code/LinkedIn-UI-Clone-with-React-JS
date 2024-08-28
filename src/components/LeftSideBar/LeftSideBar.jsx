import '../LeftSideBar/LeftSideBar-style.css'
import coverpic from '../../assets/images/cover-pic.png'
import user1 from '../../assets/images/user-1.png'
import items from '../../assets/images/items.png'
import premium from '../../assets/images/premium.png'
import recent from '../../assets/images/recent.png'
import group from '../../assets/images/group.png'
import hashtag from '../../assets/images/hashtag.png'


const LeftSideBar = () => {
  
  
  return (
    <>
      <div className="left-sidebar">
        <div className="sidebar-profile-box">
          <img src={coverpic} className="bg-img" alt="cover-pic" width="100%" />
          <div className="sidebar-profile-info">
            <img src={user1} />
            <h1>Rayan Waltone</h1>
            <h3>Web Developer at Microsoft</h3>
            <ul>
              <li>Your Prpfile Views <span>52</span></li>
              <li>Your Post Views <span>810</span></li>
              <li>Your Connections <span>205</span></li>
            </ul>
          </div>
          <div className="sidebar-profile-link">
            <a href="#"><img src={items} /> My items</a>
            <a href="#"><img src={premium} /> Try Premium</a>
          </div>
        </div>
        <div className="sidebar-activity" id="sidebar-activity">
          <h3>RECENT</h3>
          <a href="#"><img src={recent} /> Web Development</a>
          <a href="#"><img src={recent} /> User Interface</a>
          <a href="#"><img src={recent} /> Online Learning</a>
          <a href="#"><img src={recent} /> Learn Online</a>
          <a href="#"><img src={recent} /> Code Better</a>
          <a href="#"><img src={recent} /> Group Learning</a>
          <h3>GROUP</h3>
          <a href="#"><img src={group} /> Web Design Group</a>
          <a href="#"><img src={group} /> HTML &amp; CSS Learners</a>
          <a href="#"><img src={group} /> Python &amp; JavaScript Group</a>
          <a href="#"><img src={group} /> Learn Coding Online</a>
          <h3>HASHTAG</h3>
          <a href="#"><img src={hashtag} /> Web Design Group</a>
          <a href="#"><img src={hashtag} /> HTML &amp; CSS Learners</a>
          <a href="#"><img src={hashtag} /> Python &amp; JavaScript Group</a>
          <div className="discover-more-link">
            <a href="#">Discover more</a>
          </div>
        </div>
        <p id="ShowMoreLink" onClick="toogleActivity()">Show more +</p>
      </div>

    </>
  )
}

export default LeftSideBar