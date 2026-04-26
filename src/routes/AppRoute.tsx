import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from '../pages/LandingPage.js'
import Login from '../features/auth/components/Login.js';
import SignUp from '../features/auth/components/SignUp.js';
import AdminDashbord from '../features/admin/pages/AdminDashbord.js';
import ProtectedRoute from './ProtectedRoute.js';
import UserDashBoard from '../features/user/pages/UserDashBoard.js';

function AppRoute() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>

      <Route
       path='/userDashbord'
      element={<ProtectedRoute allowedRole="user">
        <UserDashBoard/>
        </ProtectedRoute>
    } />
   

    <Route 
    path='/adminDashbord'
    element={
    <ProtectedRoute allowedRole="admin">

      <AdminDashbord/>

    </ProtectedRoute>
  }
    />
 </Routes>


       
    </BrowserRouter>
  )
}

export default AppRoute