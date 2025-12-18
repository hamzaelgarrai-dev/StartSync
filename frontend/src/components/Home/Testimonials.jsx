import React from 'react'
import profile1 from "../../assets/images/testimonials/profile1.webp"
import profile2 from "../../assets/images/testimonials/profile2.webp"
import profile3 from "../../assets/images/testimonials/profile3.webp"
import profile4 from "../../assets/images/testimonials/profile4.webp"
import { Star } from 'lucide-react'

function Testimonials() {
  return (

    <section className='flex mx-auto flex-col mb-24 max-w-285'>

        <h2 className=' font-medium tracking-[-0.02em] text-[64px] max-w-6xl leading-tight mx-auto text-center mb-16'>What Our Clients Are <span className='text-[#044FD2]'>Saying</span></h2>

        <div className='grid grid-cols-3 gap-x-6 gap-y-4'>

            <div className=' min-h-60 '>

              <div className='rounded-3xl border border-[#e0e7f5] p-2 bg-[#F4F8FC]'>
                    <div className='rounded-2xl border h-62 border-[#e0e7f5] bg-white px-2 py-6 flex flex-col items-start pl-6 gap-4'>
                        <div className='flex space-x-2.5'>
                             <div className=' w-18 h-18 rounded-full overflow-hidden '>

                                    <img
                                    src={profile1}
                                    alt="profile 1"
                                    loading="lazy"
                                    className='w-full h-full object-cover object-[50%_10%]  '
                        
                                />

                              </div>

                              <div className='flex flex-col'>

                                <p className='font-medium text-[16px] mb-1'>Taylor James</p>
                                <div className='flex'>

                                    <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />
                                <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />
                                <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />
                                <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />
                                <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />

                                </div>
                                


                              </div>
                     </div>
                   
                    <div className='flex flex-col text-[16px]'>
                        <p className=' text-[#909090] max-w-75 mb-6'>Capture screenshots automatically with every feedback submission. See exactly what users see. </p>
                        <p className='font-medium'>August 29, 2025</p>
                    </div>
                        
                        
                    

              </div>
            </div>
        </div>






            <div className=' min-h-50 col-span-2'>
                <div className='rounded-3xl border  border-[#e0e7f5] p-2 bg-[#F4F8FC]'>
                <div className='rounded-2xl border h-55 border-[#e0e7f5] bg-white px-2 py-6 flex flex-col items-start pl-6 gap-4'>
                <div className='flex space-x-2.5'>
                             <div className=' w-18 h-18 rounded-full overflow-hidden '>

                                    <img
                                    src={profile2}
                                    alt="profile 2"
                                    loading="lazy"
                                    className='w-full h-full object-cover object-[50%_10%]  '
                        
                                />

                              </div>

                              <div className='flex flex-col'>

                                <p className='font-medium text-[16px] mb-1'>Anna Satrin</p>
                                <div className='flex'>

                                    <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />
                                <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />
                                <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />
                                <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />
                                <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />

                                </div>
                                


                              </div>
                     </div>
                   
                    <div className='flex flex-col text-[16px]'>
                        <p className=' text-[#909090] w-full px-2 mb-3.5'>Before StartSync, managing client feedback was messy and time-consuming. We dealt with scattered messages and zero real-time visibility. StartSync changed everything. </p>
                        <p className='font-medium'>August 29, 2025</p>
                    </div>

             </div>
            </div>
            </div>
            <div className=' min-h-50 col-span-2'>
                <div className='rounded-3xl border border-[#e0e7f5] p-2 bg-[#F4F8FC]'>
                <div className='rounded-2xl border h-55 border-[#e0e7f5] bg-white px-2 py-6 flex flex-col items-start  gap-4 pl-6'>
                <div className='flex space-x-2.5'>
                             <div className=' w-18 h-18 rounded-full overflow-hidden '>

                                    <img
                                    src={profile3}
                                    alt="profile 3"
                                    loading="lazy"
                                    className='w-full h-full object-cover object-[50%_10%]  '
                        
                                />

                              </div>

                              <div className='flex flex-col'>

                                <p className='font-medium text-[16px] mb-1'>Jasmine Coler</p>
                                <div className='flex'>

                                    <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />
                                <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />
                                <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />
                                <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />
                                <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />

                                </div>
                                


                              </div>
                     </div>
                   
                    <div className='flex flex-col text-[16px]'>
                        <p className=' text-[#909090] w-full px-2 mb-3.5'>I highly recommend StartSync to any team looking to simplify their feedback process and gain full clarity over their projects.</p>
                        <p className='font-medium'>August 29, 2025</p>
                    </div>

             </div>
            </div>
            </div>
            <div className='min-h-50'>
                <div className='rounded-3xl border border-[#e0e7f5] p-2 bg-[#F4F8FC]'>
                <div className='rounded-2xl border h-62 border-[#e0e7f5] bg-white px-2 py-6 flex flex-col items-start gap-4 pl-6'>
                <div className='flex space-x-2.5'>
                             <div className=' w-18 h-18 rounded-full overflow-hidden '>

                                    <img
                                    src={profile4}
                                    alt="profile 4"
                                    loading="lazy"
                                    className='w-full h-full object-cover object-[50%_10%]  '
                        
                                />

                              </div>

                              <div className='flex flex-col'>

                                <p className='font-medium text-[16px] mb-1'>Andres Gostavo</p>
                                <div className='flex'>

                                    <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />
                                <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />
                                <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />
                                <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />
                                <Star size={20} fill='#FEC600' color="#FEC600" strokeWidth={1} />

                                </div>
                                


                              </div>
                     </div>
                   
                    <div className='flex flex-col text-[16px]'>
                        <p className=' text-[#909090] max-w-75 mb-6'>If you want clearer communication and smoother project workflows, StartSync is the tool I’d recommend every time. </p>
                        <p className='font-medium'>August 29, 2025</p>
                    </div>

             </div>
            </div>
            </div>

        </div>

    </section>

  )
}

export default Testimonials