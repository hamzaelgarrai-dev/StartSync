import React from 'react'

function Navbar() {
  return (
    <div className=' w-full h-22 flex items-center justify-between'>

        <div className=' font-bold text-[20px] text-[#333333] cursor-pointer'>StartSync</div>
        <div className='flex justify-between w-110 text-[#4B5563] text-[16px]'>
            <div className='cursor-pointer'>Features</div>
            <div className='cursor-pointer'>How it works</div>
            <div className='cursor-pointer'>Integrations</div>
            <div className='cursor-pointer'>Support</div>
        </div>
        <div className='w-26 h-10 bg-blue-600 flex items-center justify-center rounded-4xl text-white text-[16px] cursor-pointer'>
            Sign Up
        </div>
        
    </div>
  )
}

export default Navbar