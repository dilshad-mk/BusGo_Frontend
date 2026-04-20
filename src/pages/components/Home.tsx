import React from 'react'
import SeatBooking from './SeatBooking.js'

function Home() {


    return (




        <section className=" pt-[65px] bg-[linear-gradient(to_bottom_right,#f3f4ff,white),linear-gradient(to_top_left,#f3fcf7,white)] min-h-screen flex flex-col tablet:flex-row justify-around items-center px-4 mb-10 pb-10" id='home'>

            {/* headding etc------ top section / left section*/}
            <div className='flex flex-col gap-5 py-20 md:py-7'>
                   <span className='bg-blue-200 w- w-[250px] text-center px-2 py-2 rounded-full text-blue-800 font-semibold'><i className="fa-solid fa-location-dot"></i> Real-time seat booking</span>
                <h1 className='text-[50px] font-semibold leading-[50px] md:w-[520px] font-Roboto text-neutral-800'>Book Your Bus Seat  Before You Even Arrive</h1>
                <p className='text-neutral-600 md:w-[450px]'>Check real-time seat availability and reserve your seat instantly. No more standing in crowded buses.</p>


                {/* btns------ */}

                <div className='flex gap-3 text-[12px] font-semibold'>
                    <button className='btn-orenge group flex justify-center items-center gap-2'>
                        <span>  Get Started</span>
                        <i className="fa-solid fa-arrow-right group-hover:translate-x-2 duration-300 transition-all"></i>
                    </button>

                    <button className='blue-btn'>
                        <i className="fa-solid fa-play text-blue-500" ></i><span> View Buses</span>
                    </button>
                </div>


                {/* stats section --- */}
                <div className='flex gap-2 flex-wrap'>
                    <p className='text-[24px] font-semibold border-r px-3 flex flex-col text-blue-500'>
                        50K+
                        <span className='text-[12px] text-neutral-500 font-normal leading-3'>Happy Travelers</span>
                    </p>
                    <p className='text-[24px] font-semibold border-r px-3 flex flex-col text-green-500'>
                        1000+
                        <span className='text-[12px] text-neutral-500 font-normal leading-3'>Active Buses</span>
                    </p>
                    <p className='text-[24px] font-semibold border-r px-3 flex flex-col text-red-500'>
                        24/7
                        <span className='text-[12px] text-neutral-500 font-normal leading-3'>Support</span>
                    </p>

                </div>
            </div>


            {/* left/ bottom section -- seat booking card------------ */}
<SeatBooking/>

        </section>


    )
}

export default Home