import React from 'react'

interface RecentBookingProps {
  setActive: (value: string) => void;
}

function RecentBooking({ setActive }: RecentBookingProps) {
  return (
    <div className='flex flex-col gap-4 w-full px-3 py-5 border-[1px] border-neutral-800 rounded-xl bg-[#0b1220]'>

{/* top section --------- */}
      <div className='flex justify-between items-center'>
        <h2 className="text-white text-lg font-semibold mb-4">
          Recent Bookings
        </h2>

        <button
          className='text-blue-500 hover:text-blue-400 transition-colors'
          onClick={() => setActive('booking')}
        >
          View All
        </button>
      </div>

      {/* data will be here */}
      {/* desktop table view -------- */}
      <table className='hidden tablet:table'>

        <thead>
            <tr className='text-left text-neutral-400 border-b border-neutral-800'>
                <th className='py-2'>User</th>
                <th className='py-2'>Bus</th>
                <th className='py-2'>Route</th>
                <th className='py-2'>Seats</th>
                <th className='py-2'>Amount</th>
                <th className='py-2'>Time</th>
            </tr>
        </thead>
        <tbody>
          {/* Sample data - replace with actual booking data */}
          <tr className='border-b border-neutral-800 text-white'>
            <td className='py-2'>User 1</td>
            <td className='py-2'>Bus 1</td>
            <td className='py-2'>Manjer-Calicut</td>
            <td className='py-2'>2</td>
            <td className='py-2'>&#8377;110.00</td>
            <td className='py-2 text-neutral-500'>1 min ago</td>
          </tr>

          <tr className='border-b border-neutral-800 text-white'>
            <td className='py-2'>User 2</td>
            <td className='py-2'>Bus 2</td>
            <td className='py-2'>Calicut-Palakkadu</td>
            <td className='py-2'>1</td>
            <td className='py-2'>&#8377;120.00</td>
            <td className='py-2 text-neutral-500'>5 min ago</td>
          </tr>

          <tr className='border-b border-neutral-800 text-white'>
            <td className='py-2'>User 3</td>
            <td className='py-2'>Bus 5</td>
            <td className='py-2'>Palakkadu-Calicut</td>
            <td className='py-2'>2</td>
            <td className='py-2'>&#8377;240.00</td>
            <td className='py-2 text-neutral-500'>7 min ago</td>
          </tr>
        </tbody>
      </table>

      {/* mobile view -------- */}


{/* card model  */}
{/* card 1  */}
      <div className='tablet:hidden'>
        <div className='bg-[#0b1220] p-4 rounded-xl border-[1px] border-neutral-800 mb-3'>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-white font-medium'>User 1</span>
              <span className='text-blue-500'>Bus 1</span>
            </div>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-neutral-400'>Manjer-Calicut</span>
              <span className='text-neutral-400'>2 seats</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-green-500'>&#8377;110.00</span>
              <span className='text-neutral-500'>1 min ago</span>
            </div>
          </div>
        </div>

        {/* card 2  */}
      <div className='tablet:hidden'>
        <div className='bg-[#0b1220] p-4 rounded-xl border-[1px] border-neutral-800 mb-3'>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-white font-medium'>User 2</span>
              <span className='text-blue-500'>Bus 2</span>
            </div>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-neutral-400'>Calicut-Palakkadu</span>
              <span className='text-neutral-400'>1 seat</span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-green-500'>&#8377;120.00</span>
              <span className='text-neutral-500'>5 min ago</span>
            </div>
          </div>
        </div>


      </div>

    // </div>
  )
}

export default RecentBooking