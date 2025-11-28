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


function DesktopApp(){
    return(
        <>
      <DHeader/>
      <DLandingPage/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Form/>
      <Footer/>
        </>
    );
}

export default DesktopApp;