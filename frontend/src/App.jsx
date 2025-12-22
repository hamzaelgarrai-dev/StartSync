
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import DashboardLayout from './components/layout/DashboardLayout'
import ManagerDashboard from './pages/manager/ManagerDashboard'
import MemberDashboard from './pages/member/MemberDashboard'
import CreateProjectModal from './components/modals/CreateProjectModal'
import CreatTeamModal from './components/modals/CreatTeamModal'
import AddMemberModal from './components/modals/AddMemberModal'


function App() {
  

  return (

    <>
       <div className='max-w-7xl mx-auto px-6'>

        {/* <Navbar/>

        <Routes>

         <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />

        </Routes>

        <Footer/> */}

        

        </div>
       {/* <DashboardLayout/> */}
       <ManagerDashboard/>
      
        {/* <MemberDashboard/> */}

        {/* <CreateProjectModal/> */}
        {/* <CreatTeamModal/> */}
        {/* <AddMemberModal/> */}
    </>
    
    

          
    
  )
}

export default App
