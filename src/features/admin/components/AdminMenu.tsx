import React from 'react'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
function AdminMenu({ active, setActive }) {

  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

// logout logic --------
  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('userRole');
    navigate('/login');
  };






  return (

    // menu wrapper 
  <motion.section
  initial={{width:"90px"}}

  animate={{width:isOpen ? "250px" : "90px"}}

  transition={{duration:.3, ease:"easeInOut"}}

  className="bg-[#0f1421] min-h-screen  justify-between items-center gap-6  relative z-50 hidden tablet:flex tablet:flex-col border-r border-neutral-800"
  
  >

    <div className='   border-neutral-800 w-full  flex flex-col justify-center items-center cursor-pointer gap-5'>
      <span className={`w-full  border-neutral-80 text-white h-20 flex items-center ${isOpen ? "justify-between px-5" : "justify-center"} border-b border-neutral-800`}>
   
     {isOpen && (
        <p className='font-Syne text-[20px] text-blue-400'>BusGo</p>
     )}


    <div className='hover:bg-neutral-800 px-2 py-1 rounded-xl duration-300 transition-all' onClick={toggleMenu}>
      <i className={`${isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars text-white"} `} ></i>
    </div>

      </span>
      

      {/* items ------- */}
    <ul className='w-full px-3 gap-3 flex flex-col'>
       
       <motion.li className={`flex items-center p-4 rounded-lg z-50 relative cursor-pointer ${isOpen ? "justify-start" : "justify-center"} gap-4`}
          onClick={()=>{setActive("Home")}}

          animate={{
            backgroundColor: active === "Home" ? "#3b82f5" : "transparent",
          }}

           transition={{
        duration:.3,
        ease:"easeInOut"
       }}
       >

        <i className="fa-regular fa-house text-white z-50 flex-shrink-0 text-lg"></i>

           {isOpen && (
            <p className='font-medium font-sans whitespace-nowrap text-white z-50'>Dashboard</p>
           )}
          {active === "Home" && (
        <span className={`absolute ${isOpen ? "w-full right-0" : "w-16"} bg-[#3b82f5] h-[60px] blur-xl z-0 rounded-lg opacity-60`}></span>
    )}
       </motion.li>

          
       <motion.li className={`flex items-center p-4 rounded-lg z-50 relative cursor-pointer ${isOpen ? "justify-start" : "justify-center"} gap-4`}
       onClick={()=>{setActive("bus")}}
       animate={{
        backgroundColor: active === "bus" ? "#3b82f5" : "transparent",
       }}

       transition={{
        duration:.3,
        ease:"easeInOut"
       }}
       >
        <i className="fa-solid fa-bus-side text-white z-50 flex-shrink-0 text-lg"></i>
           {isOpen && (
            <p className='font-medium font-sans whitespace-nowrap text-white z-50'>Manage Buses</p>
           )}
           {active === "bus" && (
        <span className={`absolute ${isOpen ? "w-full right-0" : "w-16"} bg-[#3b82f5] h-[60px] blur-xl z-0 rounded-lg opacity-60`}></span>
           )}
     
       </motion.li>
          
       <motion.li className={`flex items-center p-4 rounded-lg z-50 relative cursor-pointer ${isOpen ? "justify-start" : "justify-center"} gap-4`}
       onClick={()=>{setActive("Seat")}}
       animate={{
        backgroundColor: active === "Seat" ? "#3b82f5" : "transparent",
       }}

       transition={{
        duration:.3,
        ease:"easeInOut"
       }}
       >
        
        <i className="fa-solid fa-couch text-white z-50 flex-shrink-0 text-lg"></i>
           {isOpen && (
            <p className='font-medium font-sans whitespace-nowrap text-white z-50'>Manage Seats</p>
           )}
           {active === "Seat" && (
        <span className={`absolute ${isOpen ? "w-full right-0" : "w-16"} bg-[#3b82f5] h-[60px] blur-xl z-0 rounded-lg opacity-60`}></span>
           )}
     
       </motion.li>
       
       <motion.li className={`flex items-center p-4 rounded-lg z-50 relative cursor-pointer ${isOpen ? "justify-start" : "justify-center"} gap-4`}
       onClick={()=>{setActive("booking")}}
       animate={{
        backgroundColor: active === "booking" ? "#3b82f5" : "transparent",
       }}

       transition={{
        duration:.3,
        ease:"easeInOut"
       }}
       >
        
        <i className="fa-regular fa-calendar text-white z-50 flex-shrink-0 text-lg"></i>
           {isOpen && (
            <p className='font-medium font-sans whitespace-nowrap text-white z-50'>Manage Bookings</p>
           )}
           {active === "booking" && (
        <span className={`absolute ${isOpen ? "w-full right-0" : "w-16"} bg-[#3b82f5] h-[60px] blur-xl z-0 rounded-lg opacity-60`}></span>
           )}
     
       </motion.li>
       
       <motion.li className={`flex items-center p-4 rounded-lg z-50 relative cursor-pointer ${isOpen ? "justify-start" : "justify-center"} gap-4`}
       onClick={()=>{setActive("users")}}
       animate={{
        backgroundColor: active === "users" ? "#3b82f5" : "transparent",
       }}

       transition={{
        duration:.3,
        ease:"easeInOut"
       }}
       >
        
        <i className="fa-solid fa-users text-white z-50 flex-shrink-0 text-lg"></i>
           {isOpen && (
            <p className='font-medium font-sans whitespace-nowrap text-white z-50'>Users</p>
           )}
           {active === "users" && (
        <span className={`absolute ${isOpen ? "w-full right-0" : "w-16"} bg-[#3b82f5] h-[60px] blur-xl z-0 rounded-lg opacity-60`}></span>
           )}
     
       </motion.li>
       
       <motion.li className={`flex items-center p-4 rounded-lg z-50 relative cursor-pointer ${isOpen ? "justify-start" : "justify-center"} gap-4`}
       onClick={()=>{setActive("analytics")}}
       animate={{
        backgroundColor: active === "analytics" ? "#3b82f5" : "transparent",
       }}

       transition={{
        duration:.3,
        ease:"easeInOut"
       }}
       >
        
        <i className="fa-solid fa-chart-column text-white z-50 flex-shrink-0 text-lg"></i>
           {isOpen && (
            <p className='font-medium font-sans whitespace-nowrap text-white z-50'>Analytics</p>
           )}
           {active === "analytics" && (
        <span className={`absolute ${isOpen ? "w-full right-0" : "w-16"} bg-[#3b82f5] h-[60px] blur-xl z-0 rounded-lg opacity-60`}></span>
           )}
     
       </motion.li>


    </ul>

    </div>


{/* logout button -------- */}
    <div className={`w-full flex ${isOpen ? "" : "justify-center"} items-center  border-t border-neutral-800 p-6`}>
      <button className="flex gap-4 justify-center items-center text-white hover:bg-[#ff000036] hover:text-red-700 w-full p-3 rounded-xl"
      onClick={handleLogout}
      >

        <i className="fa-solid fa-arrow-right-from-bracket " ></i>
     {isOpen && (
         <span >Logout</span>
     )}
      </button>
    </div>



  </motion.section>
  )
}

export default AdminMenu