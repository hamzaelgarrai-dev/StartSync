import { useState } from 'react'
import Navbar from './components/layout/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='max-w-[1280px] mx-auto px-6'>

        <Navbar/>

    </div>

          
    
  )
}

export default App
