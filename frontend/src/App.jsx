
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'


function App() {
  

  return (
    
    <div className='max-w-[1280px] mx-auto px-6'>

        <Navbar/>

        {/* <Login/> */}
        <Register/>

        <Footer/>

    </div>

          
    
  )
}

export default App
