import DashboardLayout from '../../components/layout/DashboardLayout'
import{ChartNoAxesGantt , Users , FolderKanban, HardDriveDownload, Plus} from "lucide-react"
import { useLocation } from 'react-router-dom'
import { Project } from './Project';
import { Overview } from './Overview';
import { Team } from './Team';





// import { useAuth } from '../../context/AuthContext';

const managerMenuItems = [
  { path: '/manager/overview', label: 'Overview', icon: <ChartNoAxesGantt />},
  { path: '/manager/team', label: 'Team', icon: <Users /> },
  { path: '/manager/projects', label: 'Projects', icon: <FolderKanban />},
  
]

const ManagerDashboard = () => {
  // const { user } = useAuth();

  const { pathname } = useLocation();
  const currentPage = pathname.substring(pathname.lastIndexOf('/') + 1)

  let headerActions

  if(currentPage === "overview" ){

   headerActions = (

    <div className='flex justify-between items-center'>

      <div>
        <p className='text-xl font-semibold'>{currentPage}</p>
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

  }

  
  if(currentPage === "team"){
      headerActions = (

          <div className='flex justify-between items-center'>
      <div>
        <p className='text-xl font-semibold'>{currentPage}</p>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2 cursor-pointer">
        <span><Plus /></span>
        <span>Add a Team</span>
      </button>
    </div>

      )

  }

  if(currentPage === "projects" ){

    headerActions = (
    <div className='flex justify-between items-center'>
      <div>
        <p className='text-xl font-semibold'>{currentPage}</p>
      </div>

      <div className='py-1'>
        <input placeholder='Search...' type="text" className='border border-gray-400 rounded-md  h-8  px-4 ' />
      </div>
    </div>
  )
  }

  const renderContent = ()=>{

    switch(currentPage){
      case "overview":
        return <div> <Overview/> </div>
      case "projects":
        return <div><Project/></div>
      case "team":
      return <div><Team/></div>
    }
  }
 

  




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

        {renderContent()}

      </div>
    </DashboardLayout>
  );
};

export default ManagerDashboard;