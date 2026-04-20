import React from 'react'
import Logo from '../../assets/images/logo.png';

function Footer() {
  return (
    <footer className='bg-neutral-950 py-10 px-3 flex flex-col gap-5 ' id='contact'>
        {/* top  */}
       <div className='flex flex-col tablet:flex-row gap-4 justify-between tablet:px-10 border-b border-neutral-400 py-10'>
        {/* brand name etc---- */}

        <div className='flex flex-col gap-5'>

           <div className='flex gap-2 items-center '>

            <img src={Logo} alt="" className='w-12' />
            
            <span className='font-Syne font-semibold text-white'>BusGo</span>
            
           </div>

           <p className='text-neutral-400 w-[400px]'> 
            SeatSmart revolutionizes public bus travel by providing real-time seat availability and instant booking. Never stand in a crowded bus again.
           </p>
           {/* social links--- */}
           <div className='flex gap-2'>

            <span className=' bg-neutral-700 p-2 rounded-xl hover:bg-neutral-500 transition-colors duration-300 cursor-pointer flex justify-center items-center w-10 h-10'><i className="fa-brands fa-instagram  text-white text-xl "></i></span>

            <span className=' bg-neutral-700 p-2 rounded-xl hover:bg-neutral-500 transition-colors duration-300 cursor-pointer flex justify-center items-center w-10 h-10'><i className="fa-brands fa-facebook-f  text-white text-xl "></i></span>
          
            <span className=' bg-neutral-700 p-2 rounded-xl hover:bg-neutral-500 transition-colors duration-300 cursor-pointer flex justify-center items-center w-10 h-10'><i className="fa-brands fa-x-twitter  text-white text-xl "></i></span>
           </div>

        </div>

        {/* links etc-- */}
        <div className='flex flex-col justify-between tablet:flex-row gap-20'>
            {/* quick links ---- */}
           <ul className='flex flex-col justify-center text-white gap-3'>

            <h2 className='font-bold'>Quick Links</h2>

           <a href="#home">
            <li className='text-[12px] text-neutral-500 hover:text-neutral-50 transition-colors duration-300'>Home</li>
           </a>

           <a href="#features">
            <li className='text-[12px] text-neutral-500 hover:text-neutral-50 transition-colors duration-300'>Features</li>
           </a>

           <a href="#howitworks">
            <li className='text-[12px] text-neutral-500 hover:text-neutral-50 transition-colors duration-300'>How It Works</li>
           </a>
           </ul>

           {/* leagal --- */}
           <ul className='flex flex-col justify-center text-white gap-3'>

            <h2 className='font-bold'>Legal</h2>
             <a href="#"> 
                 <li className='text-[12px] text-neutral-500 hover:text-neutral-50 transition-colors duration-300'>Privacy Policy</li>
                 </a>

            <a href="#">
                   <li className='text-[12px] text-neutral-500 hover:text-neutral-50 transition-colors duration-300'>Terms of Service</li>
            </a>
              
              <a href="#contact">
                 <li className='text-[12px] text-neutral-500 hover:text-neutral-50 transition-colors duration-300'>Contact</li>
              </a>


           </ul>
        </div>

       </div>

       {/* bottom-- */}

       <div className='w-full flex justify-center items-center text-neutral-600'>
        © 2026 BusGo. All rights reserved.
       </div>
    </footer>
  )
}

export default Footer