import React from 'react'
import {motion} from 'framer-motion'
import BookingTrands from './BookingTrands.js'
import RevenueOverview from './RevenueOverview.js'
import RecentBooking from './RecentBooking.js'

interface DashboardProps {
  setActive: (value: string) => void;
}

function Dashboard({ setActive }: DashboardProps) {
  return (
    <main className='flex w-full flex-col p-8 overflow-x-hidden bg-[#0b0f1a] mt-20 gap-6 tablet:ml-[90px] min-h-screen'>
  
   {/* top section ------ */}
   <div className='flex w-full flex-col tablet:flex-row  justify-between'>

       <div>
          <h1 className='text-3xl font-bold text-white'>Admin Dashboard</h1>
        <p className='text-neutral-400 leading-10'>OverView of your bus booking system</p>
       </div>

        <button className='bg-[#0f1421] w-fit h-fit px-4 py-2 rounded-xl border-neutral-800  border-[1px] text-white flex gap-3 justify-center items-center z-[10]'><span className='z-[10]'> <i className="fa-solid fa-circle fa-fade text-green-600" ></i> </span> System Online</button>
   </div>

{/* stats secttion ----- */}
   <div className='grid tablet:grid-cols-4 tablet:grid-rows-1 gap-6'>

    {/* cards --------- */}

    {/* card-1 */}
      <motion.div
          
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            whileHover={{scale:1.02}}
              transition={{duration:0.3, delay:0.1}}

      className='bg-[#0f1421] rounded-xl flex  gap-3 p-7 border-[1px] border-neutral-800 '>

      <div className='flex  tablet:flex-col tablet:gap-2  w-full justify-between'>
       <span className='bg-blue-600 w-fit h-fit p-4 rounded-xl'>   <i className="fa-solid fa-users text-white" ></i></span>
       <div>
         <p className='text-3xl font-bold text-white'>1,234</p>
          <h2 className=' font-normal text-neutral-400'>Total Users</h2>
       </div>
      </div>

      </motion.div>


    {/* card-2 */}
      <motion.div
          
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            whileHover={{scale:1.02}}
              transition={{duration:0.4, delay:0.2}}

      className='bg-[#0f1421] rounded-xl flex  gap-3 p-7 border-[1px] border-neutral-800'>

      <div className='flex  tablet:flex-col tablet:gap-2  w-full justify-between'>
       <span className='bg-green-600 w-fit h-fit p-4 rounded-xl'>   <i className="fa-solid fa-calendar text-white" ></i></span>

          <div>
               <p className='text-3xl font-bold text-white'>856</p>
          <h2 className=' font-normal text-neutral-400'>Total Bookings</h2>
          </div>


      </div>

      </motion.div>

    {/* card-3 */}
      <motion.div
          
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            whileHover={{scale:1.02}}
              transition={{duration:0.5, delay:0.3}}

      className='bg-[#0f1421] rounded-xl flex  gap-3 p-7 border-[1px] border-neutral-800 '>

      <div className='flex  tablet:flex-col tablet:gap-2  w-full justify-between'>
       <span className='bg-purple-600 w-fit h-fit p-4 rounded-xl'>   <i className="fa-solid fa-bus-side text-white" ></i></span>
        
        <div>
          <p className='text-3xl font-bold text-white'>12</p>
          <h2 className=' font-normal text-neutral-400'>Active Buses</h2>
        </div>
      </div>

      </motion.div>

      {/* card-4  */}
      <motion.div
          
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            whileHover={{scale:1.02}}
              transition={{duration:0.6, delay:0.4}}

      className='bg-[#0f1421] rounded-xl flex  gap-3 p-7 border-[1px] border-neutral-800 '>

      <div className='flex  tablet:flex-col tablet:gap-2  w-full justify-between'>
       <span className='bg-orange-600 w-fit h-fit p-4 rounded-xl'>   <i className="fa-solid fa-indian-rupee-sign text-white" ></i></span>
   <div>
         <p className='text-3xl font-bold text-white'>&#8377;24.3K</p>
          <h2 className=' font-normal text-neutral-400'>Revenue</h2>
   </div>
      </div>

      </motion.div>

   </div>

{/* trends and revenue section ----- */}
<motion.div
initial={{opacity:0, y:20}}
animate={{opacity:1, y:0}}
// whileHover={{scale:1.02}}
transition={{duration:0.7, delay:0.7}}

className='grid tablet:grid-rows-1 tablet:grid-cols-2 gap-6 grid-rows-2 grid-cols-1 w-full'
>

      <div>
        <BookingTrands />
      </div>
      <div>
        <RevenueOverview />
      </div>
</motion.div>


{/* recent booking section ----- */}
<motion.div
initial={{opacity:0, y:20}}
animate={{opacity:1, y:0}}
// whileHover={{scale:1.02}}
transition={{duration:0.8, delay:0.9}}
>

<RecentBooking setActive={setActive} />
  
  
</motion.div>
 
    </main>
  )
}

export default Dashboard