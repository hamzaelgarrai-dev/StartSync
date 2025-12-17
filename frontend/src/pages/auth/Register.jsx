import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import api from "../../services/api"
function Register() {


  const [name, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
  e.preventDefault()
    setLoading(true)
    setErrors({})
 

  try {
    const response = await api.post(
      "/register",
      {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
        
      }

      
      
    );


    navigate('/login')


 

  } catch (error) {
    console.log('Full error:', error)
    console.log('Response data:', error.response?.data)
    
    if (error.response?.status === 422) {
      setErrors(error.response.data.errors)
      console.log('Validation errors:', error.response.data.errors)
    } else {
      setErrors({ general: 'Registration failed. Please try again.' })
    }
  } finally {
    setLoading(false);
  }
  
}

  return (

    <div className='min-h-screen w-full flex justify-between items-center mb-22 mt-12'>

        <div className='w-[50%]'>
            <h2 className='text-5xl font-bold text-[#333333] mb-3.5 '>Start for free <br />— no credit card needed.</h2>
            <p className='text-[#044FD2] mb-3.5'>Fast-Track Onboarding puts feedback in your hands in under 5 minutes.</p>
            <p className='text-[#333333]'>No devs. No friction. Just proof of how easy great tools should be.</p>
        </div>


        <div className=' w-[42%] flex flex-col'>
             <h2 className='text-4xl font-medium mb-6'>Create An <span className='text-[#044FD2]'>Account</span></h2>
             <form className='w-full' onSubmit={handleSubmit}>

                <div className='flex flex-col  mb-3'>
                    <label className='mb-3' htmlFor="FullName">Full Name</label>
                    <input type='text' required value={name} onChange={(e)=> setFullName(e.target.value)} className=' h-12 rounded-4xl bg-[#F4F8FC] border border-[#D7D7D7] focus:outline-none focus:ring-1 focus:ring-blue-300 px-4' placeholder='Your Name'></input>
                </div>

                <div className='flex flex-col  mb-3'>
                    <label className='mb-3' htmlFor="email">Email Address</label>
                    <input type='email' required value={email} onChange={(e)=>setEmail(e.target.value)} className=' h-12 rounded-4xl bg-[#F4F8FC] border border-[#D7D7D7] focus:outline-none focus:ring-1 focus:ring-blue-300 px-4' placeholder='Email...'></input>
                </div>

                <div className='flex flex-col mb-3 '>
                    <label className='mb-3' htmlFor="password">Password</label>
                    <input type='password' required onChange={(e)=>setPassword(e.target.value)} className=' h-12 rounded-4xl bg-[#F4F8FC] border border-[#D7D7D7] focus:outline-none focus:ring-1 focus:ring-blue-300 px-4' placeholder='Enter your Password'></input>
                </div>

                <div className='flex flex-col mb-4 '>
                    <label className='mb-3' htmlFor="password_confirmation">Password</label>
                    <input type='password' required onChange={(e)=>setConfirmPassword(e.target.value)} className=' h-12 rounded-4xl bg-[#F4F8FC] border border-[#D7D7D7] focus:outline-none focus:ring-1 focus:ring-blue-300 px-4' placeholder='Confirm your Password'></input>
                </div>

                <div className='flex flex-col justify-center items-center space-y-3.5'>
                    <button type='submit' className='w-full h-12 bg-[#0059F3] rounded-4xl flex justify-center items-center text-white cursor-pointer'>Sign Up</button>
                    <p>Aleardy  Have an account ? <span className='text-[#044FD2]'>Sign In</span></p>
                </div>
                


                
            </form>
        </div>

    </div>

  )
}

export default Register