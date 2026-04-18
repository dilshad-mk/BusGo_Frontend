import React, { useState } from 'react'
import Logo from '../../assets/images/logo.png';
import {motion} from "framer-motion";
import Loginbtn from '../ui/Loginbtn.js';
import SignUpBtn from '../ui/SignUpBtn.js';
function Navbar() {



    //  hamburger menu toogler state - 
    const [open , setOpen] = useState(false);


  return (



    <nav className='flex md:justify-around justify-between  items-center bg-white shadow-xl md:px-7 px-3 min-h-[65px] fixed left-0 right-0 top-0 z-50'>

      {/* left (logo part )-------- */}
   <div className='flex items-center gap-2'>
    <img src={Logo} alt="Logo" className='w-12'/>
    <h1 className='font-semibold md:text-[25px] font-Syne'>BusGo</h1>
   </div>

   {/* center nav items ---------- desktop only (lg screens)*/}
   <div className='hidden md:flex'>
     <ul className=' hidden md:flex items-center gap-12 font-semibold text-[13px] text-neutral-500'>
      
      <a href="#home">
      <li className=' hover:text-black cursor-pointer duration-300 transition-colors'>Home</li>

      </a>
      <li className=' hover:text-black cursor-pointer duration-300 transition-colors'>Features</li>
      <li className=' hover:text-black cursor-pointer duration-300 transition-colors'>How It Works</li>
      <li className=' hover:text-black cursor-pointer duration-300 transition-colors'>Contact</li>
    </ul>
   </div>


   {/* right (login & sign up btns)--------------- desktop only (lg screens ) */}
    <div className='md:flex hidden items-center gap-3 text-[12px] font-semibold'>
   <Loginbtn/>
   <SignUpBtn/>
   

    </div> 

   {/* hamburger hidden in lg screens (above md)  */}

   <button className='md:hidden flex flex-col gap-3' onClick={()=>{setOpen(!open)}}>
        <motion.span className='w-[33px] bg-black h-[2px] '
        animate={{
           rotate: open ? 45 :0,
           opacity : open ? 0.5 :1,
           y: open ? 7 : 0
        }}

        transition={{
          duration:.3,
          ease:"easeInOut"
        }}
        >
        </motion.span>

        <motion.span className='w-[33px] bg-black h-[2px] '
         animate={{
           rotate: open ? -45 :0,
            opacity : open ? 0.5 :1,
           y: open ? -7 : 0
        }}

        transition={{
          duration:.3,
          ease:"easeInOut"
        }}
        >
        </motion.span>
   </button>
  
  {/* hidden by default (mini screen nav items - mobile nav------) */}
   <motion.div className={`md:hidden   inset-0 bg-black/50 backdrop-blur-sm z-50 fixed top-[65px]  ${open ? "pointer-events-auto" : "pointer-events-none"}`}
  
   onClick={()=>setOpen(!open)}

   initial={{
    x:"100%",
   }}
   animate={{
    x: open ? "0%": "100%",
   }}
   transition={{
    duration:0.4,
    ease:"easeInOut"
   }}
   
   
   >

    <motion.div
    initial={{
      x: "100%"
    }}

    animate={{
      x: open ? "0%" : "100%"
    }}
    transition={{
      duration:.5,
      // delay:1,
      ease:"easeInOut"
    }}

    onClick={()=>{setOpen(!open)}}

    className='bg-white md:hidden fixed top-0 right-0 bottom-0 w-full  z-10 shadow-2xl h-[60%] flex flex-col px-2 py-5 gap-4'
    >
    <ul className='w-full flex flex-col items-center justify-center text-[17px] gap-4 font-semibold text-neutral-600 '>
      
      <a href="#home">
      <li className='border-b w-full text-center border-neutral-100'>Home</li>

      </a>
      <li className='border-b w-full text-center border-neutral-100'>Features</li>
      <li className='border-b w-full text-center border-neutral-100'>How It Works</li>
      <li className='border-b w-full text-center border-neutral-100'>Contact</li>
    </ul>

   <div className='md:hidden flex flex-col items-center gap-3 text-[17px] font-semibold'>
     <button className='px-4 py-1 bg-[#f07800] rounded-lg cursor-pointer duration-300 transition-colors text-white'>Login</button>
     <button className='bg-[#f07800] px-4 py-1 text-white rounded-lg'>Sign Up</button>
    </div> 


    </motion.div>
     
   </motion.div>


    </nav>
  )
}

export default Navbar