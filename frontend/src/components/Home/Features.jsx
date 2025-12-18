import React from 'react'
import StartNowBtn from '../common/StartNowBtn'
import {Camera} from "lucide-react"

function Features() {
  return (
    <section className='flex mx-auto flex-col mb-28 max-w-285'>

        <div className='flex justify-between mb-12'>

            <h2 className='font-medium tracking-[-0.02em] text-[64px] max-w-3xl leading-tight'>Everything You Need For Better <span className='text-[#044FD2]'>Feedback</span></h2>

            <div className='flex items-end'>
                <StartNowBtn/>
            </div>
            

        </div>

        <div className='flex justify-between'>

             <div className='rounded-3xl border border-[#e0e7f5] p-2 bg-[#F4F8FC]'>
                <div className='rounded-2xl border border-[#e0e7f5] bg-white px-2 py-6 flex items-center gap-3'>
                <div className='bg-linear-to-b from-[#0047C7] to-[#5A92F2] w-18 h-18 rounded-full flex justify-center items-center text-[#EFF5FF]'><Camera className='size-8' /></div>
                <div className='flex flex-col'>
                    <p className='font-medium mb-1.5'>Visual Feedback</p>
                    <p className='text-sm max-w-60'>Capture screenshots automatically with every feedback submission. See exactly what users see. </p>
                </div>

             </div>
            </div>

            <div className='rounded-3xl border border-[#e0e7f5] p-2 bg-[#F4F8FC]'>
                <div className='rounded-2xl border border-[#e0e7f5] bg-white px-2 py-6 flex items-center gap-3'>
                <div className='bg-linear-to-b from-[#0047C7] to-[#5A92F2] w-18 h-18 rounded-full flex justify-center items-center text-[#EFF5FF]'><Camera className='size-8' /></div>
                <div className='flex flex-col'>
                    <p className='font-medium mb-1.5'>Visual Feedback</p>
                    <p className='text-sm max-w-60'>Capture screenshots automatically with every feedback submission. See exactly what users see. </p>
                </div>

             </div>
            </div>


            <div className='rounded-3xl border border-[#e0e7f5] p-2 bg-[#F4F8FC]'>
                <div className='rounded-2xl border border-[#e0e7f5] bg-white px-2 py-6 flex items-center gap-3'>
                <div className='bg-linear-to-b from-[#0047C7] to-[#5A92F2] w-18 h-18 rounded-full flex justify-center items-center text-[#EFF5FF]'><Camera className='size-8' /></div>
                <div className='flex flex-col'>
                    <p className='font-medium mb-1.5'>Visual Feedback</p>
                    <p className='text-sm max-w-60'>Capture screenshots automatically with every feedback submission. See exactly what users see. </p>
                </div>

             </div>
            </div>
             

            
            
          

        </div>
        
    
    
    </section>
  )
}

export default Features