// pages/manager/Dashboard.jsx
import DashboardLayout from '../../components/layout/DashboardLayout'
import{MessageSquareText, } from "lucide-react"
import { Outlet, useLocation } from 'react-router-dom'
import { Feedbacks } from './Feedbacks';




const memberMenuItems = [
  { path: '/member/dashboard/feedbacks', label: 'FeedBacks', icon: <MessageSquareText />},
  
]

const MemberDashboard = () => {


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

      menuItems={memberMenuItems}
      headerActions={headerActions}

    >
     
      
        
        <Outlet/>


    
    </DashboardLayout>
  );
};

export default MemberDashboard;