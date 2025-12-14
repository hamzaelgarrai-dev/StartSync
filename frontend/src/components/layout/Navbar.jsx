import React from 'react'

import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' w-full h-22 flex items-center justify-between'>

        <div className=' font-bold text-[20px] text-[#333333] cursor-pointer'>StartSync</div>
        <nav >
            <ul className='flex justify-between w-110 text-[#4B5563] text-[16px]'>
            <li className='cursor-pointer hover:text-[#1969f4]'><NavLink to="/features">Features</NavLink></li>
            <li className='cursor-pointer hover:text-[#1969f4]'><NavLink to="how_it_work">How it works</NavLink></li>
            <li className='cursor-pointer hover:text-[#1969f4]'><NavLink to="integrations">Integrations</NavLink></li>
            <li className='cursor-pointer hover:text-[#1969f4]'><NavLink to="support">Support</NavLink></li>
            </ul>
            

        </nav>

        <div className='w-28'>
            <button className='w-26 h-12 bg-gradient-to-b from-[#005BF8] to-[#0047C7] flex items-center justify-center rounded-4xl text-white text-[16px] cursor-pointer hover:from-[#0047C7] hover:to-[#0036A5] transition-all duration-300 ease-out hover:scale-90' >
            Sign Up
        </button>
        </div>

        
        
    </div>
  )
}

export default Navbar