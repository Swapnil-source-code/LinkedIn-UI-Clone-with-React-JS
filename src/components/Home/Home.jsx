import '../Home/Home-style.css'
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  
  
  return (
    <>
      <Navbar/>
      <div className='container'>
        <LeftSideBar/>
      </div>
    </>
  )
}

export default Home