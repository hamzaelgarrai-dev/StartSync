import React from 'react'

function Login() {
  return (

    <div className='min-h-screen'>

        <div className=' w-[450px] h-[450px] mt-18 flex flex-col items-start mx-auto  '>

            <h2 className='text-5xl font-medium mb-16'>Welcome <span className='text-[#044FD2]'>Back!</span></h2>

            <form className='w-full' action="">
                <div className='flex flex-col  mb-5'>
                    <label className='mb-5' htmlFor="email">Email Address</label>
                    <input type='text' className=' h-12 rounded-4xl bg-[#F4F8FC] border border-[#D7D7D7] focus:outline-none focus:ring-1 focus:ring-blue-300 px-4' placeholder='Email...'></input>
                </div>

                <div className='flex flex-col mb-10 '>
                    <label className='mb-5' htmlFor="password">Password</label>
                    <input type='password' className=' h-12 rounded-4xl bg-[#F4F8FC] border border-[#D7D7D7] focus:outline-none focus:ring-1 focus:ring-blue-300 px-4' placeholder='Enter your Password'></input>
                </div>

                <div className='flex flex-col justify-center items-center space-y-3.5'>
                    <button className='w-full h-12 bg-[#0059F3] rounded-4xl flex justify-center items-center text-white cursor-pointer'>Sign In</button>
                    <p>Don’t Have an account ? <span className='text-[#044FD2]'>Create an Account</span></p>
                </div>
                


                
            </form>

        </div>
        
    </div>

  )
}

export default Login