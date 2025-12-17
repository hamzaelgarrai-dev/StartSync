import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import api from "../../services/api"

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
  e.preventDefault()
    setLoading(true)
    setErrors({})

    try {
    const response = await api.post(
      "/login",{  
        email,
        password,    
      }

      
      
    );

    const { access_token, user } = response.data

      if (!user || !user.role) {
        throw new Error('Invalid login response')
      }

      localStorage.setItem('access_token', access_token)
      localStorage.setItem('user', JSON.stringify(user))


    const role = user.role
      if (role === 'project_manager') {  
        navigate('/manager/dashboard')
      } else if (role === 'project_member') {
        navigate('/member/dashboard')
      } else if (role === 'client') {
        navigate('/client/dashboard')
      } else {
        
        setErrors({ general: 'Unauthorized role' })

      }


  } catch (error) {
    console.log('Full error:', error)
    console.log('Response data:', error.response?.data)
    
    if (error.response?.status === 422) {
      setErrors(error.response.data.errors)
      console.log('Validation errors:', error.response.data.errors)
    } else {
      setErrors({ general: 'login failed. Please try again.' })
    }
  } finally {
    setLoading(false);
  }


}


  return (

    <div className='min-h-screen'>

        <div className=' w-112.5 h-112.5 mt-18 flex flex-col items-start mx-auto  '>

            <h2 className='text-5xl font-medium mb-16'>Welcome <span className='text-[#044FD2]'>Back!</span></h2>

            <form className='w-full' onSubmit={handleSubmit}>
                <div className='flex flex-col  mb-5'>
                    <label className='mb-5' htmlFor="email">Email Address</label>
                    <input type='email' required value={email} onChange={(e)=>setEmail(e.target.value)} className=' h-12 rounded-4xl bg-[#F4F8FC] border border-[#D7D7D7] focus:outline-none focus:ring-1 focus:ring-blue-300 px-4' placeholder='Email...'></input>
                </div>

                <div className='flex flex-col mb-10 '>
                    <label className='mb-5' htmlFor="password">Password</label>
                    <input type='password' required onChange={(e)=>setPassword(e.target.value)} className=' h-12 rounded-4xl bg-[#F4F8FC] border border-[#D7D7D7] focus:outline-none focus:ring-1 focus:ring-blue-300 px-4' placeholder='Enter your Password'></input>
                </div>

                <div className='flex flex-col justify-center items-center space-y-3.5'>
                    <button type='submit' className='w-full h-12 bg-[#0059F3] rounded-4xl flex justify-center items-center text-white cursor-pointer'>Sign In</button>
                    <p>Don’t Have an account ? <span className='text-[#044FD2]'>Create an Account</span></p>
                </div>
                


                
            </form>

        </div>
        
    </div>

  )
}

export default Login