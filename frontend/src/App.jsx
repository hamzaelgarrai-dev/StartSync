
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import DashboardLayout from './components/layout/DashboardLayout'
import ManagerDashboard from './pages/manager/ManagerDashboard'
import MemberDashboard from './pages/member/MemberDashboard'


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
    </>
    
    

          
    
  )
}

export default App
