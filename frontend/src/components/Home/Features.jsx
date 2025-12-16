import React from 'react'
import StartNowBtn from '../common/StartNowBtn'
import {Camera} from "lucide-react"

function Features() {
  return (
    <section className='flex flex-col mb-6'>

        <div className='flex justify-between mb-12'>

            <h2 className='font-semibold text-5xl max-w-xl leading-tight'>Everything you need for better <span className='text-[#044FD2]'>feedback</span></h2>

            <div className='flex items-end'>
                <StartNowBtn/>
            </div>
            

        </div>

        <div className='flex justify-between'>

            <div className='flex justify-center items-center space-x-3 bg-white  py-4 w-[360px] outline-8 outline-[#F4F8FC]/80 rounded-md shadow-xs'>
                <div className='bg-[#2563EB] w-[72px] h-[72px] rounded-full flex justify-center items-center text-[#EFF5FF]'><Camera className='size-8' /></div>
                <div className='flex flex-col'>
                    <p className='font-medium mb-1.5'>Visual Feedback</p>
                    <p className='text-sm max-w-[260px]'>Capture screenshots automatically with every feedback submission. See exactly what users see. </p>
                </div>
            </div>

            <div className='flex justify-center items-center space-x-3 bg-white  py-4 w-[360px] outline-8 outline-[#F4F8FC]/80 rounded-md shadow-xs'>
                <div className='bg-[#2563EB] w-[72px] h-[72px] rounded-full flex justify-center items-center text-[#EFF5FF]'><Camera className='size-8' /></div>
                <div className='flex flex-col'>
                    <p className='font-medium mb-1.5'>Visual Feedback</p>
                    <p className='text-sm max-w-[260px]'>Capture screenshots automatically with every feedback submission. See exactly what users see. </p>
                </div>
            </div>

            <div className='flex justify-center items-center space-x-3 bg-white  py-4 w-[360px] outline-8 outline-[#F4F8FC]/80 rounded-md shadow-xs'>
                <div className='bg-[#2563EB] w-[72px] h-[72px] rounded-full flex justify-center items-center text-[#EFF5FF]'><Camera className='size-8' /></div>
                <div className='flex flex-col'>
                    <p className='font-medium mb-1.5'>Visual Feedback</p>
                    <p className='text-sm max-w-[260px]'>Capture screenshots automatically with every feedback submission. See exactly what users see. </p>
                </div>
            </div>

             
          

        </div>
        
    </section>
  )
}

export default Features