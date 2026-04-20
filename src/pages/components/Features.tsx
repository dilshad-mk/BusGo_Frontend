import React from 'react'

function Features() {
  return (
    <section id='features' className='flex flex-col bg-white w-full items-center gap-20 px-3 py-14'>

<div className='flex flex-col justify-center items-center gap-4'>
            <h3 className='text-center text-blue-500 font-semibold'>FEATURES</h3>
        <h2 className='text-center  text-[30px] font-bold tablet:text-[35px] w-[400px] leading-10'>Everything You Need For Smart Travel</h2>
        <p className='text-center text-[18px] text-neutral-600 tablet:w-[600px]'> Our platform is designed to make your bus travel experience seamless and comfortable.</p>
        
</div>

        {/* cards wrapper grid-------\ */}

        <div className='grid grid-cols-1 grid-rows-4 tablet:grid-cols-4 tablet:grid-rows-1 px-3 mt-4 gap-5'>
            {/* card-1/ ---------- */}
            <div className='flex flex-col items-center justify-evenly bg-white shadow-md p-7 rounded-xl gap-5 tablet:hover:shadow-xl transition-shadow duration-300 cursor-pointer border'>
                    {/* icon---- */}
                    <div className='bg-blue-100 px-5 py-5 rounded-lg'>
                        <i className="fa-solid fa-tv text-blue-500"></i>
                    </div>

                    {/* text--- */}
                    <div className='flex flex-col gap-3 items-center'>
                        <h1 className='text-black font-bold tablet:text-[20px]'>Real-Time Seat Availability</h1>
                        <p className='text-neutral-600 text-[15px] '>See exactly which seats are available right now. Our live updates ensure you always have the latest information.</p>
                    </div>
            </div>

            {/* card-2/ ---------- */}
            <div className='flex flex-col items-center justify-evenly bg-white shadow-md p-7 rounded-xl gap-5 tablet:hover:shadow-xl transition-shadow duration-300 cursor-pointer border'>
                    {/* icon---- */}
                    <div className='bg-blue-100 px-5 py-5 rounded-lg'>
                        <i className="fa-solid fa-bolt text-blue-500" ></i>
                    </div>

                    {/* text--- */}
                    <div className='flex flex-col gap-3 items-center'>
                        <h1 className='text-black font-bold tablet:text-[20px]'>Instant Seat Booking</h1>
                        <p className='text-neutral-600 text-[15px] '>Book your preferred seat in seconds. Quick, easy, and secure booking process at your fingertips.</p>
                    </div>
            </div>


            {/* card-3/ ---------- */}
            <div className='flex flex-col items-center justify-evenly bg-white shadow-md p-7 rounded-xl gap-5 tablet:hover:shadow-xl transition-shadow duration-300 cursor-pointer border'>
                    {/* icon---- */}
                    <div className='bg-blue-100 px-5 py-5 rounded-lg'>
                        <i className="fa-solid fa-location-dot text-blue-500" ></i>
                    </div>

                    {/* text--- */}
                    <div className='flex flex-col gap-3 items-center'>
                        <h1 className='text-black font-bold tablet:text-[20px]'>Live Bus Tracking (GPS)</h1>
                        <p className='text-neutral-600 text-[15px] '>Track your bus in real-time with GPS. Know exactly when your bus will arrive at your stop.</p>
                    </div>
            </div>
            
            {/* card-4/ ---------- */}
            <div className='flex flex-col items-center justify-evenly bg-white shadow-md p-7 rounded-xl gap-5 tablet:hover:shadow-xl transition-shadow duration-300 cursor-pointer border'>
                    {/* icon---- */}
                    <div className='bg-blue-100 px-5 py-5 rounded-lg'>
                        <i className="fa-regular fa-bell text-blue-500" ></i>
                    </div>

                    {/* text--- */}
                    <div className='flex flex-col gap-3 items-center'>
                        <h1 className='text-black font-bold tablet:text-[20px]'>Smart Notifications</h1>
                        <p className='text-neutral-600 text-[15px] '>Get timely alerts about your booking, bus arrival, and any schedule changes automatically.</p>
                    </div>
            </div>
            
        </div>
        
    </section>
  )
}

export default Features