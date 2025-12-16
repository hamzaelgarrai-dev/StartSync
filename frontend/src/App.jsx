
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'


function App() {
  

  return (
    
    <div className='max-w-7xl mx-auto px-6'>

        <Navbar/>

        {/* <Login/> */}
        {/* <Register/> */}
        
        <Home/>

        <Footer/>

    </div>

          
    
  )
}

export default App
