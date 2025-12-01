import { useState } from 'react'
import './App.css'
import Header from "./Header.jsx"
import HiddenMenu from "./HiddenMenu.jsx"
import LandingPicture from './LandingPicture.jsx'
import Section1 from './Section1.jsx'
import Section2 from './Section2.jsx'
import Section3 from './Section3.jsx'
import Footer from './Footer.jsx'
import Form from "./Form.jsx"
import DHeader from './DHeader.jsx'
import DLandingPage from './DLandingPage.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
// import Services from './pages/Services.jsx'
import Gallery from './pages/Gallery.jsx'
import LandScape from './LandScape.jsx'



function App() {
  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <DHeader/>
        <Routes>
          <Route path='/GreenScape/' element={<Home/>}/>
          <Route path='/GreenScape/Gallery' element={<Gallery/>}/>

        </Routes>

      </>
  )

}

export default App
