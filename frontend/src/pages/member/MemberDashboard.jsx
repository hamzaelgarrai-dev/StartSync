// pages/manager/Dashboard.jsx
import DashboardLayout from '../../components/layout/DashboardLayout'
import{MessageSquareText, HardDriveDownload} from "lucide-react"
import { useLocation } from 'react-router-dom'
import { MyTasks } from './MyTasks';


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

    <div className='flex justify-between items-center p-1'>

     
        <p className='text-xl font-semibold uppercase'>{title}</p>
      
    </div>
    
  );

  return (
    <DashboardLayout

      menuItems={managerMenuItems}
      headerActions={headerActions}

    >
      {/* Your dashboard content */}
      <div>
        
        <MyTasks/>


      </div>
    </DashboardLayout>
  );
};

export default MemberDashboard;