import '../Home/Home-style.css'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import MainContent from '../MainContent/MainContent'
import Navbar from '../Navbar/Navbar'
import RightSideBar from '../RightSideBar/RightSideBar'

const Home = () => {
  
  
  return (
    <>
      <Navbar/>
      <div className='container'>
        <LeftSideBar />
        <MainContent />
        <RightSideBar/>
      </div>
    </>
  )
}

export default Home