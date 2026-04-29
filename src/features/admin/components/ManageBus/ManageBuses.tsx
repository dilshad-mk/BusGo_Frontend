import React from 'react'

function ManageBuses() {
  return (
    <main className='flex w-full flex-col p-8 overflow-x-hidden bg-[#0b0f1a] mt-20 gap-6 tablet:ml-[90px] min-h-screen'>
      <h1 className='text-4xl font-bold mb-4'>Manage Buses</h1>
      <p className='text-gray-600 mb-8'>Add, edit, or remove buses from the system.</p>
      <div className='bg-white p-6 rounded-lg shadow'>
        <p className='text-sm text-gray-500'>Bus management interface will be implemented here.</p>
      </div>
    </main>
  )
}

export default ManageBuses