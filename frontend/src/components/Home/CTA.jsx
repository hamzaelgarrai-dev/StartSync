import React from 'react'
import StartNowBtn from '../common/StartNowBtn'
import CtaImage from "../../assets/images/CTA/ctaImage.webp"

export default function CTA() {
  return (

    <section className='w-full'>

        <div className='flex bg-[#f4f8fc] min-h-screen rounded-[44px] pt-6'>

            <div className='flex flex-col p-12'>

                <h2 className='font-medium tracking-[-0.02em] text-[64px] max-w-2xl leading-tight mb-2.5'>Ready to Transform Your Client<br /> <span className='text-[#044FD2]'>Feedback?</span></h2>
                <p className='max-w-145 text-[#909090] text-[16px] mb-10'>Product teams rely on StartSync to collect actionable user feedback, so they can build better and keep customers happy.</p>

                <StartNowBtn/>

            </div>

            <div className='p-12 mt-6'>
                <div className='rounded-3xl border border-[#e0e7f5]  w-120   '>

                <div className='w-120    outline-8 outline-[#F4F8FC] rounded-3xl  '>
                
                            <img
                                src={CtaImage}
                                alt="Hero section illustration"
                                loading="lazy"
                                className='rounded-3xl  shadow-[0_213.544px_59.43px_#0a438000,0_135.983px_54.393px_#0a438003,0_76.553px_46.335px_#0a43800d,0_34.248px_34.248px_#0a438017,0_8.058px_19.138px_#0a43801a]'
                                
                                
                                />
                
                 </div>
           
            </div>
            </div>

            
                

        </div>

    </section>


  )
}
