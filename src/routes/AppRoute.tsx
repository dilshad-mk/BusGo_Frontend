import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from '../pages/LandingPage.js'
import Login from '../features/auth/components/Login.js';
import SignUp from '../features/auth/components/SignUp.js';

function AppRoute() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
    </Routes>
       
    </BrowserRouter>
  )
}

export default AppRoute