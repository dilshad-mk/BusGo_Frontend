import React from 'react'

function Benefits() {
  return (
    <section className='  flex flex-col bg-white w-full items-center gap-20 px-3 py-14'>
        
   <div className='flex flex-col justify-center items-center gap-4'>
            <h3 className='text-center text-blue-500 font-semibold'>BENEFITS</h3>
        <h2 className='text-center  text-[30px] font-bold tablet:text-[35px] leading-10'>Why Riders Love SeatSmart</h2>
        <p className='text-center text-[18px] text-neutral-600 '>Join thousands of happy commuters who have transformed their daily travel.</p>
        
</div>

{/* grid wrapper - */}
<div className='grid tablet:grid-cols-4 tablet:grid-rows-1 grid-cols-1 grid-rows-4 gap-7 tablet:relative text-center'>

    {/* card-1------------ */}
    <div className='flex flex-col items-center gap-5 px-3  p-5 rounded-md border bg-neutral-50'>
        {/* icon-------- */}
        <div className='w-14 h-14 bg-blue-100 border rounded-xl flex justify-center items-center '>
            <i className="fa-solid fa-hourglass-half text-blue-500 text-[25px]"></i>

                
        </div>

        <div className='flex flex-col gap-3 items-center'>
        <h1 className='text-black font-bold tablet:text-[20px]'>Save Time</h1>
        <p className='text-neutral-600 text-[15px] text-center'>No more waiting in queues. Book your seat in seconds from anywhere.</p>
        </div>

    </div>

    {/* card-2------------ */}
    <div className='flex flex-col items-center gap-5 px-3  p-5 rounded-md border bg-neutral-50'>
        {/* icon-------- */}
        <div className='w-14 h-14 bg-blue-100 border rounded-xl flex justify-center items-center '>
            <i className="fa-solid fa-people-group text-blue-500 text-[25px]"></i>

                
        </div>

        <div className='flex flex-col gap-3 items-center'>
        <h1 className='text-black font-bold tablet:text-[20px]'>Avoid Crowds</h1>
        <p className='text-neutral-600 text-[15px] text-center'>Choose less crowded buses and travel in comfort every time.</p>
        </div>

    </div>

    {/* card-3------------ */}
    <div className='flex flex-col items-center gap-5 px-3  p-5 rounded-md border bg-neutral-50'>
        {/* icon-------- */}
        <div className='w-14 h-14 bg-blue-100 border rounded-xl flex justify-center items-center '>
            <i className="fa-solid fa-calendar-check text-blue-500 text-[25px]"></i>

                
        </div>

        <div className='flex flex-col gap-3 items-center'>
        <h1 className='text-black font-bold tablet:text-[20px]'>Better Planning</h1>
        <p className='text-neutral-600 text-[15px] text-center'>Plan your journey ahead with guaranteed seat availability.</p>
        </div>

    </div>

    {/* card-4------------ */}
    <div className='flex flex-col items-center gap-5 px-3  p-5 rounded-md border bg-neutral-50'>
        {/* icon-------- */}
        <div className='w-14 h-14 bg-blue-100 border rounded-xl flex justify-center items-center '>
            <i className="fa-solid fa-heart-circle-check text-blue-500 text-[25px]"></i>

                
        </div>

        <div className='flex flex-col gap-3 items-center'>
        <h1 className='text-black font-bold tablet:text-[20px]'>Comfortable Journey</h1>
        <p className='text-neutral-600 text-[15px] text-center'>Always get your preferred seat for a relaxing travel experience.</p>
        </div>

    </div>


    

    
   

</div>
    </section>
  )
}

export default Benefits