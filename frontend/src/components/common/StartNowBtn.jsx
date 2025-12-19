import React from 'react'
import { Link } from 'react-router-dom'

function StartNowBtn() {
  return (

    <Link to="/register">
         <button className='w-26 h-12 bg-linear-to-b from-[#0047C7] to-[#5A92F2]  rounded-4xl text-white text-[16px] cursor-pointer hover:from-[#0047C7] hover:to-[#0036A5] transition-all duration-300 ease-out hover:scale-95'>Start Now</button>
    </Link>
    

  )
}

export default StartNowBtn