import React from 'react'

import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' max-w-7xl mx-auto  h-24 flex items-center justify-between mb-4'>

        <Link to="/">
            <div className=' font-bold text-[20px] text-[#333333] cursor-pointer'>StartSync</div>
        </Link>
        
        <nav >
            <ul className='flex justify-between w-110 text-[#909090] text-[16px] font-normal'>
            <li className='cursor-pointer hover:text-[#1969f4]'><NavLink to="/features">Features</NavLink></li>
            <li className='cursor-pointer hover:text-[#1969f4]'><NavLink to="how_it_work">How it works</NavLink></li>
            <li className='cursor-pointer hover:text-[#1969f4]'><NavLink to="integrations">Integrations</NavLink></li>
            <li className='cursor-pointer hover:text-[#1969f4]'><NavLink to="support">Support</NavLink></li>
            </ul>
            

        </nav>

        <div className='w-30  flex justify-end'>

          <Link to="/login">
              <button className='w-26 h-13 bg-linear-to-b from-[#0047C7] to-[#5A92F2]  rounded-4xl text-white text-[16px] cursor-pointer hover:from-[#0047C7] hover:to-[#0036A5] transition-all duration-300 ease-out hover:scale-95' >
                Sign In
            </button>
          </Link>
            
        </div>

        
        
    </div>
  )
}

export default Navbar