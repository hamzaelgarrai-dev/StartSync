
import DashboardLayout from '../../components/layout/DashboardLayout'
import { Outlet, useLocation } from 'react-router-dom'
import { ChartNoAxesGantt, Users, FolderKanban, HardDriveDownload, Plus } from "lucide-react"
import CreatTeamModal from '../../components/modals/CreatTeamModal'
import { Activity, useState } from 'react'

export const managerMenuItems = [
  { path: '/manager/dashboard/overview', label: 'Overview', icon: <ChartNoAxesGantt /> },
  { path: '/manager/dashboard/team', label: 'Team', icon: <Users /> },
  { path: '/manager/dashboard/projects', label: 'Projects', icon: <FolderKanban /> },
]

function OverviewHeader({ title }) {
  
  return (
    <div className='flex justify-between items-center'>
      <p className='text-xl font-semibold uppercase'>{title}</p>

      <div className="flex items-center space-x-4">
        <select className="px-4 py-2 border border-gray-300 rounded-lg">
          <option>All Projects</option>
          <option>Active Projects</option>
          <option>Archived Projects</option>
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <HardDriveDownload />
          <span>Export Report</span>
        </button>
      </div>
    </div>
  )
}

function TeamHeader({ title }) {

   const [show , setShow] = useState(false);
  return (
    <>
    
    
    <div className='flex justify-between items-center'>
      <p className='text-xl font-semibold uppercase'>{title}</p>

      <button onClick={() => setShow(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
        <Plus />
        <span>Add a Team</span>
      </button>
    </div>

    {show && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                   onClick={() => setShow(false)}>

                    <div className="w-full max-w-md"
                    onClick={(e) => e.stopPropagation()}>

                      <Activity
                       mode={show ? "visible" : "hidden"}
                       className="bg-white rounded-xl shadow-lg p-6">
    
                        <CreatTeamModal/>
    
                    </Activity>

                    </div>
                    
                </div>}

   </>
  )

  
}

function ProjectsHeader({ title }) {
  return (
    <div className='flex justify-between items-center'>
      <p className='text-xl font-semibold uppercase'>{title}</p>

      <input
        placeholder='Search...'
        type="text"
        className='border border-gray-400 rounded-md h-8 px-4'
      />
    </div>
  )
}

export default function ManagerDashboardLayout() {
  const { pathname } = useLocation()
  const currentKey = pathname.split("/").pop()

  const HEADERS = {
    overview: <OverviewHeader title="overview" />,
    team: <TeamHeader title="team" />,
    projects: <ProjectsHeader title="projects" />
  }

  return (
    <DashboardLayout
      menuItems={managerMenuItems}
      headerActions={HEADERS[currentKey]}
    >
    
      <Outlet />
    </DashboardLayout>
  )
}
