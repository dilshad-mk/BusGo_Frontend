import React from 'react'
import AdminMenu from '../components/AdminMenu.js'
import Dashboard from '../components/Dashboard.js'
import ManageBuses from '../components/ManageBuses.js'
import ManageSeats from '../components/ManageSeats.js'
import ManageBookings from '../components/ManageBookings.js'
import Users from '../components/Users.js'
import Analytics from '../components/Analytics.js'
import AdminNav from '../components/AdminNav.js'

function AdminDashbord() {
  const [active, setActive] = React.useState('Home');

  const renderContent = () => {
    const components = {
      Home: Dashboard,
      bus: ManageBuses,
      Seat: ManageSeats,
      booking: ManageBookings,
      users: Users,
      analytics: Analytics,
    };

    const Component = components[active];
    return Component ? <Component /> : <Dashboard />;
  };

  return (
    <div className='min-h-screen bg-slate-100'>
      <div className='flex'>
        <AdminMenu active={active} setActive={setActive} />
        <AdminNav setActive={setActive} active={active}/>
        {renderContent()}
      </div>
    </div>
  )
}

export default AdminDashbord