import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import { useForm } from "react-hook-form"

function Login() {

    const navigate = useNavigate()


    const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting},
  } = useForm()


  const onSubmit = async(data) =>{

    try {

      const response = await api.post("/login", data)
   

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
        
        alert("role permision denied")

      }
      
      
    } catch (error) {
      if (error.response?.status === 422) {
      const serverErrors = error.response.data.errors

      Object.entries(serverErrors).forEach(([field, messages]) => {
        setError(field, {
          type: "server",
          message: messages[0],
        });
      });
    }
    }

    

  }



  return (

    <div className='min-h-screen'>

        <div className=' w-112.5 h-112.5 mt-18 flex flex-col items-start mx-auto  '>

            <h2 className='text-5xl font-medium mb-16'>Welcome <span className='text-[#044FD2]'>Back!</span></h2>

            <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col  mb-5'>
                    <label className='mb-5' htmlFor="email">Email Address</label>
                    <input type='email' {...register("email",{required:"email is required"})} className=' h-12 rounded-4xl bg-[#F4F8FC] border border-[#D7D7D7] focus:outline-none focus:ring-1 focus:ring-blue-300 px-4' placeholder='Email...'></input>
                    {errors.email && (<p className="text-red-500">{`${errors.email.message}`}</p>)}
                </div>

                <div className='flex flex-col mb-10 '>
                    <label className='mb-5' htmlFor="password">Password</label>
                    <input type='password' {...register("password", {required:"password is required" , minLength:{value:6 , message:"password must be more than 6 characters"}})} 
                     className=' h-12 rounded-4xl bg-[#F4F8FC] border border-[#D7D7D7] focus:outline-none focus:ring-1 focus:ring-blue-300 px-4' placeholder='Enter your Password'></input>
                     {errors.password && (<p className="text-red-500">{`${errors.password.message}`}</p>)}
                </div>

                <div className='flex flex-col justify-center items-center space-y-3.5'>
                    <button disabled={isSubmitting} type='submit'
                     className=' disabled:bg-gray-300 w-full h-12 bg-[#0059F3] rounded-4xl flex justify-center items-center text-white cursor-pointer'>Sign In</button>
                    <p>Don’t Have an account ? <span className='text-[#044FD2]'>Create an Account</span></p>
                </div>
                


                
            </form>

        </div>
        
    </div>

  )
}

export default Login