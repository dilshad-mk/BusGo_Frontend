import React from 'react'

function Dashboard() {
  return (
    <main className='flex-1 p-8 overflow-x-hidden bg-[#0b0f1a] mt-20'>
      <h1 className='text-4xl font-bold mb-4'>Admin Dashboard</h1>
      <p className='text-gray-600 mb-8'>Welcome to the admin panel. Use the menu to navigate admin actions.</p>
      <div className='grid gap-6 sm:grid-cols-2'>
        <div className='rounded-3xl bg-white p-6 shadow'>
          <h2 className='text-xl font-semibold mb-2'>Overview</h2>
          <p className='text-sm text-gray-500'>Summary of admin tasks and statistics will appear here.</p>
        </div>
        <div className='rounded-3xl bg-white p-6 shadow'>
          <h2 className='text-xl font-semibold mb-2'>Manage</h2>
          <p className='text-sm text-gray-500'>Add buses, view bookings, and manage users from the admin menu.</p>
        </div>
      </div>
    </main>
  )
}

export default Dashboard