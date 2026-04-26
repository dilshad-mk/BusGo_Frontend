import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function AdminNav({ setActive, active }) {

    // mobile navigation state
    const [mobileNav, setMobileNav] = React.useState(false);
    const navigate = useNavigate();

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav);
    }

    const handleLogout = () => {
        localStorage.removeItem('isAuth');
        localStorage.removeItem('userRole');
        navigate('/login');
    }

    const handleMenuClick = (menu) => {
        setActive(menu);
        setMobileNav(false);
    }

    return (

        <nav className='w-full flex bg-[#0f1421] h-20 items-center tablet:justify-end justify-between px-6 border-b border-neutral-800 fixed top-0'>

            {/* desktop nav=-------- */}
            <div className='justify-end px-3 w-full gap-3 items-center hidden tablet:flex'>

                <div className=''>
                    <motion.i className="fa-regular fa-bell text-white text-xl relative cursor-pointer"
                        whileHover={{
                            rotate: [0, -15, 15, -10, 10, 0],
                            transition: { duration: 0.5 }
                        }}
                    >
                        <span className='absolute -top-[2px] -right-[2px] w-3 h-3 rounded-full bg-red-500 text-white text-xs flex items-center justify-center'></span>
                    </motion.i>
                </div>
                <div className='border border-neutral-800 flex w-fit px-4 py-1 rounded-xl' >

                    <div className='bg-gradient-to-t from-blue-600 to-cyan-600 w-11 h-11 rounded-full flex justify-center items-center'>
                        <i className='fa-regular fa-user text-white '></i>

                    </div>

                    <div className='ml-2'>
                        <p className='text-white font-medium'>John Doe</p>
                        <p className='text-gray-400 text-sm'>Administrator</p>
                    </div>
                </div>

            </div>



            {/* mobile nav --------- */}

            <div className=' flex w-fit px-4 py-1 rounded-xl tablet:hidden' >

                <div className='bg-gradient-to-t from-blue-600 to-cyan-600 w-11 h-11 rounded-full flex justify-center items-center'>
                    <i className='fa-regular fa-user text-white '></i>

                </div>

                <div className='ml-2'>
                    <p className='text-white font-medium'>User</p>
                    <p className='text-gray-400 text-sm'>Administrator</p>
                </div>
            </div>

         <div>
               <motion.i className="fa-regular fa-bell text-white text-xl relative cursor-pointer tablet:hidden mr-4"
                whileHover={{
                    rotate: [0, -15, 15, -10, 10, 0],
                    transition: { duration: 0.5 }
                }}
            >
                <span className='absolute -top-[2px] -right-[2px] w-3 h-3 rounded-full bg-red-500 text-white text-xs flex items-center justify-center'></span>
            </motion.i>

            <i className={`${mobileNav ? "fa-solid fa-xmark" : "fa-solid fa-bars"}  text-white text-xl cursor-pointer tablet:hidden`} onClick={toggleMobileNav}></i>
         </div>




            <motion.div className={`bg-[#0f1421] w-60 mt-20 min-h-screen fixed top-0 right-0 z-50 flex flex-col justify-start gap-3 ${mobileNav ? "translate-x-0" : "translate-x-full"} tablet:hidden text-white px-3 `}
                initial={{ translateX: "100%" }}
                animate={{ translateX: mobileNav ? "0%" : "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >

{/* links ----------- */}
              <ul className=' w-full h-fit flex flex-col gap-3'>
                
                <h2 className='font-Syne text-blue-600 text-[30px] mb-10'>
                    BusGo
                </h2>


                  <motion.li className='flex items-center p-4 rounded-lg z-50 relative cursor-pointer justify-start gap-4'
                    onClick={() => handleMenuClick('Home')}
                    animate={{
                        backgroundColor: active === "Home" ? "#3b82f5" : "transparent",
                    }}
                    transition={{
                        duration: .3,
                        ease: "easeInOut"
                    }}
                >
                    <i className="fa-regular fa-house text-white z-50 flex-shrink-0 text-lg"></i>
                    <p className='font-medium font-sans whitespace-nowrap text-white z-50'>Dashboard</p>
                    {active === "Home" && (
                        <span className='absolute w-full right-0 bg-[#3b82f5] h-[60px] blur-xl z-0 rounded-lg opacity-60'></span>
                    )}
                </motion.li>

                <motion.li className='flex items-center p-4 rounded-lg z-50 relative cursor-pointer justify-start gap-4'
                    onClick={() => handleMenuClick('bus')}
                    animate={{
                        backgroundColor: active === "bus" ? "#3b82f5" : "transparent",
                    }}
                    transition={{
                        duration: .3,
                        ease: "easeInOut"
                    }}
                >
                    <i className="fa-solid fa-bus-side text-white z-50 flex-shrink-0 text-lg"></i>
                    <p className='font-medium font-sans whitespace-nowrap text-white z-50'>Manage Buses</p>
                    {active === "bus" && (
                        <span className='absolute w-full right-0 bg-[#3b82f5] h-[60px] blur-xl z-0 rounded-lg opacity-60'></span>
                    )}
                </motion.li>

                <motion.li className='flex items-center p-4 rounded-lg z-50 relative cursor-pointer justify-start gap-4'
                    onClick={() => handleMenuClick('Seat')}
                    animate={{
                        backgroundColor: active === "Seat" ? "#3b82f5" : "transparent",
                    }}
                    transition={{
                        duration: .3,
                        ease: "easeInOut"
                    }}
                >
                    <i className="fa-solid fa-couch text-white z-50 flex-shrink-0 text-lg"></i>
                    <p className='font-medium font-sans whitespace-nowrap text-white z-50'>Seat Control</p>
                    {active === "Seat" && (
                        <span className='absolute w-full right-0 bg-[#3b82f5] h-[60px] blur-xl z-0 rounded-lg opacity-60'></span>
                    )}
                </motion.li>

                <motion.li className='flex items-center p-4 rounded-lg z-50 relative cursor-pointer justify-start gap-4'
                    onClick={() => handleMenuClick('booking')}
                    animate={{
                        backgroundColor: active === "booking" ? "#3b82f5" : "transparent",
                    }}
                    transition={{
                        duration: .3,
                        ease: "easeInOut"
                    }}
                >
                    <i className="fa-regular fa-calendar text-white z-50 flex-shrink-0 text-lg"></i>
                    <p className='font-medium font-sans whitespace-nowrap text-white z-50'>Bookings</p>
                    {active === "booking" && (
                        <span className='absolute w-full right-0 bg-[#3b82f5] h-[60px] blur-xl z-0 rounded-lg opacity-60'></span>
                    )}
                </motion.li>

                <motion.li className='flex items-center p-4 rounded-lg z-50 relative cursor-pointer justify-start gap-4'
                    onClick={() => handleMenuClick('users')}
                    animate={{
                        backgroundColor: active === "users" ? "#3b82f5" : "transparent",
                    }}
                    transition={{
                        duration: .3,
                        ease: "easeInOut"
                    }}
                >
                    <i className="fa-solid fa-users text-white z-50 flex-shrink-0 text-lg"></i>
                    <p className='font-medium font-sans whitespace-nowrap text-white z-50'>Users</p>
                    {active === "users" && (
                        <span className='absolute w-full right-0 bg-[#3b82f5] h-[60px] blur-xl z-0 rounded-lg opacity-60'></span>
                    )}
                </motion.li>

                <motion.li className='flex items-center p-4 rounded-lg z-50 relative cursor-pointer justify-start gap-4'
                    onClick={() => handleMenuClick('analytics')}
                    animate={{
                        backgroundColor: active === "analytics" ? "#3b82f5" : "transparent",
                    }}
                    transition={{
                        duration: .3,
                        ease: "easeInOut"
                    }}
                >
                    <i className="fa-solid fa-chart-column text-white z-50 flex-shrink-0 text-lg"></i>
                    <p className='font-medium font-sans whitespace-nowrap text-white z-50'>Analytics</p>
                    {active === "analytics" && (
                        <span className='absolute w-full right-0 bg-[#3b82f5] h-[60px] blur-xl z-0 rounded-lg opacity-60'></span>
                    )}
                </motion.li>
              </ul>

               

                
                     <motion.button 
                        onClick={handleLogout}
                        whileTap={{ backgroundColor: "red" }}
                        transition={{ ease: "easeInOut", duration: .3 }}
                        className='border border-neutral-600 px-5 py-3 rounded-xl w-full mt-5' >
                            Logout
                        </motion.button>
                   
                
            </motion.div>




        </nav>
    )
}

export default AdminNav