import './App.css'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile'


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="profile" element={<Profile/>} />
      </Routes> 
    </>
  )
}

export default App
