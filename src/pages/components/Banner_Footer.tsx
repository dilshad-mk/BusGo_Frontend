import React from 'react'

function Banner_Footer() {
  return (
    <div className='bg-blue-600 py-12 px-3 flex flex-col justify-center items-center gap-4'>
        <h1 className='text-[25px] font-bold tablet:text-[40px] text-white'>Stop Guessing. Start Booking.</h1>

        <p className='text-center text-white '>Join thousands of smart commuters who never worry about finding a seat again.</p>
        <button className='btn-orenge group'>Try Now <i className='fa-solid fa-arrow-right group-hover:translate-x-[2px] transition-transform duration-300'></i></button>
    </div>
  )
}

export default Banner_Footer