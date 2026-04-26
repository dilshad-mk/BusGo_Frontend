import React from 'react'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Features from './components/Features.js'
import HowItWorks from './components/HowItWorks.js'
import Benefits from './components/Benefits.js'
import Banner_Footer from './components/Banner_Footer.js'
import Footer from './components/Footer.js'
import Login from '../features/auth/components/Login.js'
import UserDashBoard from '../features/user/pages/UserDashBoard.js'
import AdminDashbord from '../features/admin/pages/AdminDashbord.js'
import { Navigate } from "react-router-dom";

function LandingPage() {

  const role = localStorage.getItem("userRole");
  const isAuth = localStorage.getItem("isAuth");

   if (isAuth === "true" && role === "user") {
    return <Navigate to="/userDashbord" />;
  }

  if (isAuth === "true" && role === "admin") {
    return <Navigate to="/adminDashbord" />;
  }
  
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