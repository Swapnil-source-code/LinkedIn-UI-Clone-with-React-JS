import '../MainContent/MainContent-style.css'
import user1 from '../../assets/images/user-1.png'
import photo from '../../assets/images/photo.png'
import video from '../../assets/images/video.png'
import event from '../../assets/images/event.png'
import downarrow from '../../assets/images/down-arrow.png'
import user3 from '../../assets/images/user-3.png'
import user4 from '../../assets/images/user-4.png'
import user5 from '../../assets/images/user-5.png'
import imagepost1 from '../../assets/images/post-image-1.png'
import imagepost2 from '../../assets/images/post-image-2.png'
import imagepost3 from '../../assets/images/post-image-3.png'
import imagepost4 from '../../assets/images/post-image-4.png'
import thumbsup from '../../assets/images/thumbsup.png'
import love from '../../assets/images/love.png'
import clap from '../../assets/images/clap.png'
import like from '../../assets/images/like.png'
import comment from '../../assets/images/comment.png'
import share from '../../assets/images/share.png'
import send from '../../assets/images/send.png'



const MainContent = () => {
  
  
  return (
    <>
      <div className="main-content">
        <div className="create-post">
          <div className="create-post-input">
            <img src={user1} />
            <textarea rows={1} placeholder="Write a post" defaultValue={""} />
          </div>
          <div className="create-post-links">
            <li><img src={photo} />Photo</li>
            <li><img src={video} />Video</li>
            <li><img src={event} />Event</li>
            <li>Post</li>
          </div>
        </div>
        <div className="sort-by">
          <hr />
          <p>sort-by:<span> Top <img src={downarrow} /></span></p>
        </div>
        <div className="post">
          <div className="post-author">
            <img src={user3} />
            <div>
              <h1>Benjamin Leo</h1>
              <small>Founder &amp; CES at Gellelio Group | Angile Investor</small>
              <small>2 hours ago</small>
            </div>
          </div>
          <p>The Successof every website depends on search engine optimization and digital marketing strategy. if you are on the first page of all major search engines then you are ahead among your compititors.</p>
          <img src={imagepost1} width="100%" />
          <div className="post-stats">
            <div>
              <img src={thumbsup} />
              <img src={love} />
              <img src={clap} />
              <small className="liked-users">Abhishek Patil and 75 others</small>
            </div>
            <div>
              <span>22 commits · 40 shares</span>
            </div>        
          </div>
          <div className="post-activity">
            <div>
              <img src={user1} className="post-activity-user-icon" />
              <img src={downarrow} className="post-activity-arrow-icon" />
            </div>
            <div className="post-activity-link">
              <img src={like} />
              <span>like</span>
            </div>
            <div className="post-activity-link">
              <img src={comment} />
              <span>Comment</span>
            </div>
            <div className="post-activity-link">
              <img src={share} />
              <span>Share</span>
            </div>
            <div className="post-activity-link">
              <img src={send} />
              <span>Send</span>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="post-author">
            <img src={user4} />
            <div>
              <h1>Clearenc Geroge</h1>
              <small>Founder &amp; CES at Gellelio Group | Angile Investor</small>
              <small>2 hours ago</small>
            </div>
          </div>
          <p>The Successof every website depends on search engine optimization and digital marketing strategy. if you are on the first page of all major search engines then you are ahead among your compititors.</p>
          <img src={imagepost2} width="100%" />
          <div className="post-stats">
            <div>
              <img src={thumbsup} />
              <img src={love} />
              <img src={clap} />
              <small className="liked-users">Abhishek Patil and 75 others</small>
            </div>
            <div>
              <span>22 commits · 40 shares</span>
            </div>        
          </div>
          <div className="post-activity">
            <div>
              <img src={user1} className="post-activity-user-icon" />
              <img src={downarrow} className="post-activity-arrow-icon" />
            </div>
            <div className="post-activity-link">
              <img src={like} />
              <span>like</span>
            </div>
            <div className="post-activity-link">
              <img src={comment} />
              <span>Comment</span>
            </div>
            <div className="post-activity-link">
              <img src={share} />
              <span>Share</span>
            </div>
            <div className="post-activity-link">
              <img src={send} />
              <span>Send</span>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="post-author">
            <img src={user5} />
            <div>
              <h1>Benjamin Leo</h1>
              <small>Founder &amp; CES at Gellelio Group | Angile Investor</small>
              <small>2 hours ago</small>
            </div>
          </div>
          <p>The Successof every website depends on search engine optimization and digital marketing strategy. if you are on the first page of all major search engines then you are ahead among your compititors.</p>
          <img src={imagepost3} width="100%" />
          <div className="post-stats">
            <div>
              <img src={thumbsup} />
              <img src={love} />
              <img src={clap} />
              <small className="liked-users">Abhishek Patil and 75 others</small>
            </div>
            <div>
              <span>22 commits · 40 shares</span>
            </div>        
          </div>
          <div className="post-activity">
            <div>
              <img src={user1} className="post-activity-user-icon" />
              <img src={downarrow} className="post-activity-arrow-icon" />
            </div>
            <div className="post-activity-link">
              <img src={like} />
              <span>like</span>
            </div>
            <div className="post-activity-link">
              <img src={comment} />
              <span>Comment</span>
            </div>
            <div className="post-activity-link">
              <img src={share} />
              <span>Share</span>
            </div>
            <div className="post-activity-link">
              <img src={send} />
              <span>Send</span>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="post-author">
            <img src={user1} />
            <div>
              <h1>Benjamin Leo</h1>
              <small>Founder &amp; CES at Gellelio Group | Angile Investor</small>
              <small>2 hours ago</small>
            </div>
          </div>
          <p>The Successof every website depends on search engine optimization and digital marketing strategy. if you are on the first page of all major search engines then you are ahead among your compititors.</p>
          <img src={imagepost4} width="100%" />
          <div className="post-stats">
            <div>
              <img src={thumbsup} />
              <img src={love} />
              <img src={clap} />
              <small className="liked-users">Abhishek Patil and 75 others</small>
            </div>
            <div>
              <span>22 commits · 40 shares</span>
            </div>        
          </div>
          <div className="post-activity">
            <div>
              <img src={user1} className="post-activity-user-icon" />
              <img src={downarrow} className="post-activity-arrow-icon" />
            </div>
            <div className="post-activity-link">
              <img src={like} />
              <span>like</span>
            </div>
            <div className="post-activity-link">
              <img src={comment} />
              <span>Comment</span>
            </div>
            <div className="post-activity-link">
              <img src={share} />
              <span>Share</span>
            </div>
            <div className="post-activity-link">
              <img src={send} />
              <span>Send</span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default MainContent