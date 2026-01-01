import React from 'react'
import { useForm } from "react-hook-form"
import { useSubscribeNewsletterMutation } from '../../features/marketing/marketingApiSlice';
import toast from 'react-hot-toast';


function Footer() {

  const [subscribe, { isLoading }] = useSubscribeNewsletterMutation()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()


  const onSubmit = async(data) =>{

    const loadingToast = toast.loading('Subscribing ...')
    try{
         await subscribe(data.email).unwrap();
         toast.success("subscribe succefully" , {id : loadingToast})
          reset()
            
    }catch(error){
     const msg = error.data?.message || "Failed to subscribe try again"
      console.error(error)
      toast.error(msg, { id: loadingToast })
    }

    }
    

  


  return (

    <div className=' h-65 flex justify-between mt-20 max-w-7xl mx-auto px-6'>

        <div className=' w-80 h-full'>

            <div className=' font-bold text-[20px] text-[#333333] cursor-pointer mb-12'>StartSync</div>

            <div className='flex flex-col space-y-3.5 font-medium mb-8'>

                <p>123 Example Road New York, NY 12345</p>
                <p>hamzaelgarrai.dev@gmail.com</p>
                <p>+212 649-537-454</p>

            </div>

            <p className='text-[#909090]'>Copyright &copy; 2025</p>
            

        </div>



        <div className='  h-full'>

            <div className=' font-medium text-[20px] text-[#333333] cursor-pointer mb-5'>Useful Links</div>

            <div className='flex flex-col space-y-3.5 text-[#909090] text-[16px] '>

                <p className='cursor-pointer hover:text-[#1969f4]'>Features</p>
                <p className='cursor-pointer hover:text-[#1969f4]'>About Us</p>
                <p className='cursor-pointer hover:text-[#1969f4]'>How it works</p>
                <p className='cursor-pointer hover:text-[#1969f4]'>Support</p>

            </div>

        </div>


        <div className='  h-full'>

            <div className=' font-medium text-[20px] text-[#333333] cursor-pointer mb-5'>Follow Us</div>

            <div className='flex flex-col space-y-3.5 text-[#909090] text-[16px]'>

                <p className='cursor-pointer hover:text-[#1969f4]'>Linkedin</p>
                <p className='cursor-pointer hover:text-[#1969f4]'>Instagram</p>
                <p className='cursor-pointer hover:text-[#1969f4]'>FaceBook</p>

            </div>
        </div>

        <div className=' w-90 h-full'>

            <div className=' font-medium text-[24px] text-[#333333] cursor-pointer mb-5'>Subscribe our newsletter</div>
            

                <form className='relative' onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("email",{required:"email is required"})}
                     type='email' className='w-82 h-14 rounded-4xl bg-[#F4F8FC] border border-[#D7D7D7] focus:outline-none focus:ring-1 focus:ring-blue-300 px-4 relative' placeholder='Email...'>

                    </input>
                    {errors.email && (<p className="text-red-500">{`${errors.email.message}`}</p>)}
                    <button type='submit' disabled={isLoading} className='disabled:bg-linear-to-r disabled:from-[#bebebe] disabled:to-[#aeb0b4]  bg-linear-to-r from-[#005BF8] to-[#0047C7] w-25 h-11.5 absolute right-10 top-1/2 -translate-y-1/2 rounded-4xl text-white cursor-pointer' >Subscribe</button>

                </form>
                

        </div>
        



    </div>

  )

}
export default Footer