import React from 'react'

function HowItWorks() {
  return (
    <section id='howitworks' className='flex flex-col bg-[linear-gradient(to_bottom_right,#f3f4ff,white),linear-gradient(to_top_left,#f3fcf7,white)] w-full items-center gap-20 px-3 py-14 '>
        <div className='flex flex-col justify-center items-center gap-4'>
            <h3 className='text-center text-blue-500 font-semibold'>How It Works</h3>
        <h2 className='text-center  text-[30px] font-bold tablet:text-[35px] leading-10'>Book Your Seat in 4 Simple Steps</h2>
        <p className='text-center text-[18px] text-neutral-600 '>Getting your preferred seat has never been easier. Follow these simple steps.</p>
        
</div>


{/* grid wrapper - */}
<div className='grid tablet:grid-cols-4 tablet:grid-rows-1 grid-cols-1 grid-rows-4 gap-7 tablet:relative text-center'>
<span className='hidden tablet:flex w-full h-[1px] bg-neutral-300  absolute top-14 bottom-0 left-0 right-0'></span>


    {/* card-1------------ */}
    <div className='flex flex-col items-center gap-5 px-3 border p-5 rounded-md tablet:border-none'>
        {/* icon-------- */}
        <div className='w-20 h-20 bg-white border rounded-xl shadow-xl flex justify-center items-center relative'>
            <i className="fa-solid fa-route text-blue-500 text-[20px]"></i>

                <div className='absolute bg-orange-500 w-5 tablet:w-10 rounded-full h-5 tablet:h-10 flex items-center justify-center text-white font-semibold text-[10px] top-[-8px] right-[-4px] tablet:top-[-10px]'><span>01</span></div>
        </div>

        <div className='flex flex-col gap-3 items-center'>
        <h1 className='text-black font-bold tablet:text-[20px]'>Select Route or Bus</h1>
        <p className='text-neutral-600 text-[15px] text-center'>Choose your starting point, destination, and preferred bus from our extensive network.</p>
        </div>

    </div>


    {/* card-2------------ */}
    <div className='flex flex-col items-center gap-5 px-3 border p-5 rounded-md tablet:border-none'>
        {/* icon-------- */}
        <div className='w-20 h-20 bg-white border rounded-xl shadow-xl flex justify-center items-center relative'>
            <i className="fa-solid fa-wheelchair text-blue-500 text-[20px]"></i>

                <div className='absolute bg-orange-500 w-5 tablet:w-10 rounded-full tablet:h-10 h-5 flex items-center justify-center text-white font-semibold text-[10px] top-[-8px] right-[-4px] tablet:top-[-10px]'><span>02</span></div>
        </div>

        <div className='flex flex-col gap-3 items-center'>
        <h1 className='text-black font-bold tablet:text-[20px]'>View Available Seats</h1>
        <p className='text-neutral-600 text-[15px] text-center'>See the real-time seat layout with available and booked seats clearly marked.</p>
        </div>

    </div>

    {/* card-3------------ */}
    <div className='flex flex-col items-center gap-5 px-3 border p-5 rounded-md tablet:border-none'>
        {/* icon-------- */}
        <div className='w-20 h-20 bg-white border rounded-xl shadow-xl flex justify-center items-center relative'>
            <i className="fa-regular fa-circle-check text-blue-500 text-[20px]"></i>

                <div className='absolute bg-orange-500 w-5 tablet:w-10 rounded-full tablet:h-10 h-5 flex items-center justify-center text-white font-semibold text-[10px] top-[-8px] right-[-4px] tablet:top-[-10px]'><span>03</span></div>
        </div>

        <div className='flex flex-col gap-3 items-center'>
        <h1 className='text-black font-bold tablet:text-[20px]'>Book Your Seat</h1>
        <p className='text-neutral-600 text-[15px] text-center'>Select your preferred seat and complete the quick and secure booking process.

</p>
        </div>

    </div>

    {/* card-4------------ */}
    <div className='flex flex-col items-center gap-5 px-3 border p-5 rounded-md tablet:border-none'>
        {/* icon-------- */}
        <div className='w-20 h-20 bg-white border rounded-xl shadow-xl flex justify-center items-center relative'>
            <i className="fa-solid fa-ticket text-blue-500 text-[20px]"></i>
                <div className='absolute bg-orange-500 w-5 tablet:w-10 rounded-full tablet:h-10 h-5 flex items-center justify-center text-white font-semibold text-[10px] top-[-8px] right-[-4px] tablet:top-[-10px]'><span>04</span></div>
        </div>

        <div className='flex flex-col gap-3 items-center'>
        <h1 className='text-black font-bold tablet:text-[20px]'>Show Ticket & Travel</h1>
        <p className='text-neutral-600 text-[15px] text-center'>Receive your digital ticket and simply show it when boarding. That's it!</p>
        </div>

    </div>

    
   

</div>
    </section>
  )
}

export default HowItWorks