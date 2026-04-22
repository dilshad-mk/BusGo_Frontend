import React from 'react'
import { useNavigate } from 'react-router-dom'
function Loginbtn() {

const navigate = useNavigate()

  return (
   
     <button className='px-4 py-1 tablet:hover:bg-[#f07800] bg-[#f07800] text-white tablet:text-black tablet:bg-white rounded-lg cursor-pointer hover:shadow-md duration-300 transition-colors hover:text-white' onClick={()=>navigate("/login")}>Login</button>
  )
}

export default Loginbtn