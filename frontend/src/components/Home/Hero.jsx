import React from 'react'

import dashboardImage from "../../assets/images/hero/dashbord-image-wep.webp"

function Hero() {
  return (

    <section className='bg-[linear-gradient(to_bottom,#0B5CFF_0%,#044FD2_45%,#0339A6_100%)] w-full min-h-screen rounded-[44px] mb-16 flex flex-col justify-start items-center mx-auto pt-16'>

        <h1 className='text-6xl font-semibold max-w-5xl  text-white text-center leading-tight '>Collect and act on user feedback <span className='font-normal'>10x faster with StartSync.</span> </h1>

        <p className='mt-6 max-w-150 text-center text-lg font-normal leading-relaxed text-white/90'>Product teams rely on StartSync to collect actionable user feedback, so they can build better and keep customers happy.</p>

        <div className='flex mt-8 space-x-4 mb-8 '>
            <button className='bg-white w-42 h-10 font-medium text-[#297FFF] rounded-md cursor-pointer'>Get Started Free</button>
            <button className='text-white cursor-pointer'>Explore More</button>

        </div>

        <div className='w-[900px] outline-8 outline-[#F4F8FC]/52 rounded-md'>

            <img
                src={dashboardImage}
                alt="Hero section illustration"
                loading="lazy"
                className='rounded-md'
                
                
                />

        </div>

    </section>

  )
}

export default Hero