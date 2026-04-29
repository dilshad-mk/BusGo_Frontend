import React from 'react'
import AdminMenu from '../components/AdminMenu.js'
import Dashboard from '../components/Dashbord/Dashboard.js'
import ManageBuses from '../components/ManageBus/ManageBuses.js'
import ManageSeats from '../components/SeateManage/ManageSeats.js'
import ManageBookings from '../components/BookingManage/ManageBookings.js'
import Users from '../components/Users/Users.js'
import Analytics from '../components/Analytics/Analytics.js'
import AdminNav from '../components/AdminNav.js'

function AdminDashbord() {
  const [active, setActive] = React.useState('Home');

  const renderContent = () => {
    const components: Record<string, React.FC<{ setActive?: (value: string) => void }>> = {
      Home: () => <Dashboard setActive={setActive} />,
      bus: () => <ManageBuses />,
      Seat: () => <ManageSeats />,
      booking: () => <ManageBookings />,
      users: () => <Users />,
      analytics: () => <Analytics />,
    };

    const Component = components[active] || components.Home;
    return <Component />;
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