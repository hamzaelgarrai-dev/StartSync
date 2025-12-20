// pages/manager/Dashboard.jsx
import DashboardLayout from '../../components/layout/DashboardLayout'
import{MessageSquareText, HardDriveDownload} from "lucide-react"
import { useLocation } from 'react-router-dom'


// import { useAuth } from '../../context/AuthContext';

const managerMenuItems = [
  { path: '/member/feedback', label: 'FeedBacks', icon: <MessageSquareText />},
  
]

const MemberDashboard = () => {
  // const { user } = useAuth();

  const { pathname } = useLocation();
  const title = pathname
  .substring(pathname.lastIndexOf('/') + 1)

  const headerActions = (

    <div className='flex justify-between items-center'>

      <div>
        <p className='text-xl font-semibold'>{title}</p>
      </div>

      <div className="flex items-center space-x-4">
      
      <select className="px-4 py-2 border border-gray-300 rounded-lg">
        <option>All Projects</option>
        <option>Active Projects</option>
        <option>Archived Projects</option>
      </select>

      
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2 cursor-pointer">
        <span><HardDriveDownload /></span>
        <span>Export Report</span>
      </button>

    </div>


    </div>
    
  );

  return (
    <DashboardLayout
      logo="StartSync"
      subtitle="Analytics"
      menuItems={managerMenuItems}
      headerActions={headerActions}
      // userName={user?.name || "Alex Morgan"}
      // userRole="Project Manager"
      // userAvatar={user?.avatar}
    >
      {/* Your dashboard content */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Feedbacks</h1>
        {/* Stats, charts, etc. */}
      </div>
    </DashboardLayout>
  );
};

export default MemberDashboard;