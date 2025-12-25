
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'
import { Routes, Route , useLocation, Navigate } from "react-router-dom";
import DashboardLayout from './components/layout/DashboardLayout'
import ManagerDashboard from './pages/manager/ManagerDashboard'
import MemberDashboard from './pages/member/MemberDashboard'
import RequireAuth from './features/auth/RequireAuth'
import { Overview } from './pages/manager/Overview'
import { Team } from './pages/manager/Team'
import { Project } from './pages/manager/Project'
import { Feedbacks } from './pages/member/Feedbacks'


function App() {
  
  const location = useLocation()
  
  const hideLayout =
  location.pathname.startsWith("/manager") ||
  location.pathname.startsWith("/member") ||
  location.pathname.startsWith("/client")


  


  return (

    <>
           
     
      {!hideLayout && <Navbar />}


        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

         
          <Route
            path="/manager/dashboard"
            element={
              <RequireAuth>
                <ManagerDashboard />
              </RequireAuth>
            }
          >
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<Overview />} />
            <Route path="team" element={<Team />} />
            <Route path="projects" element={<Project />} />
          </Route>

         
          <Route
            path="/member/dashboard"
            element={
              <RequireAuth>
                <MemberDashboard />
              </RequireAuth>
            }
          >
            <Route index element={<Navigate to="feedbacks" replace />} />
            <Route path="feedbacks" element={<Feedbacks/>}/>

        </Route>

        </Routes>
      

      {!hideLayout && <Footer />}
    
        

        
       
    </>
    
    

          
    
  )
}

export default App
