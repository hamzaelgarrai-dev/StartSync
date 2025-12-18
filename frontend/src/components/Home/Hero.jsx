import React from 'react'

import dashboardImage from "../../assets/images/hero/dashbord-image-wep.webp"
import leftglass from "../../assets/images/hero/left.webp"
import rightglass from "../../assets/images/hero/right.webp"

function Hero() {
  return (

    <section className='bg-[linear-gradient(180deg,#0052CC_10%,#3B8AEF_90%,#0052CC_100%)] w-full min-h-screen rounded-[40px] mb-28 flex flex-col justify-start items-center mx-auto pt-16'>

        <h1 className='text-7xl font-medium tracking-[-0.02em] max-w-7xl  text-white text-center leading-tight '>Elevate Your Feedback <br /> Management with StartSync </h1>

        <p className='mt-4 max-w-150 text-center text-lg font-normal leading-relaxed text-white/90'>Product teams rely on StartSync to collect actionable user feedback, so they can build better and keep customers happy.</p>

        <div className='flex mt-8 space-x-4 mb-14 '>
            <button className='bg-white w-42 h-10 font-medium text-[#297FFF] rounded-md cursor-pointer'>Get Started Free</button>
            <button className='text-white cursor-pointer'>Explore More</button>

        </div>




        <div className='relative w-full flex justify-center items-end'>


        <div>
            <img
                src={leftglass}
                alt="Hero section illustration"
                loading="lazy"
                className='w-80 absolute bottom-40 left-0'
                
                
                />
        </div>
        <div>
            <img
                src={rightglass}
                alt="Hero section illustration"
                loading="lazy"
                className='w-80 absolute bottom-40 right-0'

                
                
                />
        </div>

        <div className='w-210  outline-8 outline-[#F4F8FC]/52 rounded-md relative'>

            <img
                src={dashboardImage}
                alt="Hero section illustration"
                loading="lazy"
                className='rounded-md'
                
                
                />

        </div>


        </div>

    </section>

  )
}

export default Hero