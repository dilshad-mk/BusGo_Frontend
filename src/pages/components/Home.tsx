import React from 'react'

function Home() {

    // dummhy bus seats ---------
 const seats = [];

const rows = ["A", "B", "C", "D"];

for (let row of rows) {
  for (let i = 1; i <= 8; i++) {
    seats.push({
      id: row + i,
      row: row,
      number: i,
      isBooked: Math.random() < 0.3, 
    });
  }
}

    return (




        <div className=" pt-[65px] bg-[linear-gradient(to_bottom_right,#f3f4ff,white),linear-gradient(to_top_left,#f3fcf7,white)] min-h-screen flex flex-col md:flex-row justify-around items-center px-4 mb-10"
        id='home'>


            {/* headding etc------ top section / left section*/}
            <div className='flex flex-col gap-5 py-20 md:py-0'>
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

            <div className='md:mt-20  bg-white pb-5 px-5 rounded-xl drop-shadow-2xl flex flex-col gap-7 relative'>

                {/* label--- */}
                <div className='flex justify-between border-b py-5'>
                    <p className='text-[12px] md:text-[15px] font-semibold'>Bus #321 - UpHill</p>
                    <p className='text-[12px] md:text-[15px] bg-green-100 text-green-800 px-4 py-1 rounded-xl'>Available</p>
                </div>
                <div className="grid grid-cols-5 gap-2 ">

                    {seats.map((seat, index) => (
                        <>
                            {/* Add aisle after 2 seats */}
                            {(index + 1) % 4 === 3 && (
                                <div key={`gap-${index}`} />
                            )}

                            <div
                                key={seat.id}
                                className={`
          w-10 h-10 flex items-center justify-center rounded-md text-sm font-semibold
          ${seat.isBooked ? "bg-red-400 text-white" : "bg-green-200"}
        `}
                            >
                                {seat.id}
                            </div>
                        </>
                    ))}

                </div>

                <div className='flex gap-3 items-center'>
                   <span className='px-1 py-1 bg-red-400 w-3 h-3'></span> <p className='text-[12px] text-neutral-500'>Available</p>
                <span className='px-1 py-1 bg-green-200 w-3 h-3'></span> <p className='text-[12px] text-neutral-500'>Booked</p>
                </div>

                <div className='w-[80px] h-[70px] bg-orange-500 rounded-2xl px-2 py-2 justify-center
                items-center flex absolute bottom-[-20px] right-[-40px]'>
                    <p className='text-white flex flex-col justify-center text-[22px] font-bold'>
                        95%
                                <span className='text-[12px] font-light'>Satisfaction</span>
                    </p>

                </div>
            </div>

        </div>


    )
}

export default Home