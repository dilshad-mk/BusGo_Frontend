import React from 'react'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Features from './components/Features.js'
import HowItWorks from './components/HowItWorks.js'
import Benefits from './components/Benefits.js'
import Banner_Footer from './components/Banner_Footer.js'
import Footer from './components/Footer.js'

function LandingPage() {
  return (
    <div className='scroll-smooth'>
      <Navbar/>
      <Home/> 
      <Features/> 
      <HowItWorks/>
      <Benefits/>
      <Banner_Footer/>
      <Footer/>
    </div>
  )
}

export default LandingPage