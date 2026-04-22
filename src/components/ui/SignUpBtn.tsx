import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignUpBtn() {
  const navigate =useNavigate();

  return (
 
        
     <button className='bg-[#f07800] px-4 py-1 text-white rounded-lg hover:shadow-md transition-shadow duration-300' onClick={()=> navigate("/signUp")}>Sign Up</button>
    
  )
}

export default SignUpBtn