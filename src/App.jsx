import { Route,Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'

function App() {

  return (
    <>
     <Header/>
     <Routes>
     <Route path='/' element={<LandingPage/>}/>
     <Route path='/home' element={<Home/>}/>

     </Routes>
     <Footer/>
    </>
  )
}

export default App
