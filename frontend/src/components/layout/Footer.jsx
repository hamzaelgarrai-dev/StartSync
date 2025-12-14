import React from 'react'


function Footer() {
  return (

    <div className='w-full  h-60 flex justify-between '>

        <div className=' w-85 h-full'>

            <div className=' font-bold text-[20px] text-[#333333] cursor-pointer mb-12'>StartSync</div>

            <div className='flex flex-col space-y-3.5 font-medium mb-8'>

                <p>123 Example Road New York, NY 12345</p>
                <p>hamzaelgarrai.dev@gmail.com</p>
                <p>+212 649-537-454</p>

            </div>

            <p className='text-[#909090]'>Copyright &copy; 2025</p>
            

        </div>



        <div className='  h-full'>

            <div className=' font-semibold text-[18px] text-[#333333] cursor-pointer mb-5'>Useful Links</div>

            <div className='flex flex-col space-y-3.5 text-[#909090] text-[16px] '>

                <p className='cursor-pointer hover:text-[#c]'>Features</p>
                <p className='cursor-pointer hover:text-[#1969f4]'>About Us</p>
                <p className='cursor-pointer hover:text-[#1969f4]'>How it works</p>
                <p className='cursor-pointer hover:text-[#1969f4]'>Support</p>

            </div>

        </div>


        <div className='  h-full'>

            <div className=' font-semibold text-[18px] text-[#333333] cursor-pointer mb-5'>Follow Us</div>

            <div className='flex flex-col space-y-3.5 text-[#909090] text-[16px]'>

                <p className='cursor-pointer hover:text-[#1969f4]'>Linkedin</p>
                <p className='cursor-pointer hover:text-[#1969f4]'>Instagram</p>
                <p className='cursor-pointer hover:text-[#1969f4]'>FaceBook</p>

            </div>
        </div>

        <div className=' w-82 h-full'>

            <div className=' font-semibold text-[18px] text-[#333333] cursor-pointer mb-5'>Subscribe our newsletter</div>

                <form className='relative'>

                    <input className='w-82 h-12 rounded-4xl bg-[#F4F8FC] border border-[#D7D7D7] focus:outline-none focus:ring-1 focus:ring-blue-300 px-4 relative' placeholder='Email...'>

                    </input>
                    <button className='bg-gradient-to-r from-[#005BF8] to-[#0047C7] w-24 h-10 absolute right-1 top-1/2 -translate-y-1/2 rounded-4xl text-white cursor-pointer' >Subscribe</button>

                </form>
                

        </div>
        



    </div>

  )
}

export default Footer