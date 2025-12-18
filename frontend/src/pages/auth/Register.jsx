
import { useNavigate } from "react-router-dom"
import api from "../../services/api"
import { useForm } from "react-hook-form"
function Register() {



  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors , isSubmitting},
  } = useForm()


  const onSubmit = async(data) =>{

    try{
         await api.post("/register", data)
            reset()
            navigate('/login')
            
    }catch(error){
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

    <div className='min-h-screen max-w-275 mx-auto flex justify-between  items-center mb-22 mt-12'>

        <div className='w-[48%] '>
            <h2 className='text-5xl font-bold text-[#333333] mb-3.5 '>Start for free <br/>— no credit card needed.</h2>
            <p className='text-[#044FD2] mb-3.5'>Fast-Track Onboarding puts feedback in your hands in under 5 minutes.</p>
            <p className='text-[#333333]'>No devs. No friction. Just proof of how easy great tools should be.</p>
        </div>


        <div className=' w-[45%] flex flex-col '>
             <h2 className='text-4xl font-medium mb-6'>Create An <span className='text-[#044FD2]'>Account</span></h2>

             <form className='w-full' onSubmit={handleSubmit(onSubmit)} >

                <div className='flex flex-col  mb-3'>
                    <label className='mb-3' htmlFor="FullName">Full Name</label>
                    <input type='text'  {...register("name",{required: "Name is required"})}  
                    
                    className=' h-12 rounded-4xl bg-[#F4F8FC] border border-[#D7D7D7] focus:outline-none focus:ring-1 focus:ring-blue-300 px-4' placeholder='Your Name'></input>
                    {errors.name && (<p className="text-red-500">{`${errors.name.message}`}</p>)}

                </div>

                <div className='flex flex-col  mb-3'>
                    <label className='mb-3' htmlFor="email">Email Address</label>
                    <input type='email'  {...register("email",{required:"email is required"})}
                    
                    className=' h-12 rounded-4xl bg-[#F4F8FC] border border-[#D7D7D7] focus:outline-none focus:ring-1 focus:ring-blue-300 px-4' placeholder='Email...'></input>
                    {errors.email && (<p className="text-red-500">{`${errors.email.message}`}</p>)}
                </div>

                <div className='flex flex-col mb-3 '>
                    <label className='mb-3' htmlFor="password">Password</label>
                    <input type='password'  {...register("password", {required:"password is required" , minLength:{value:6 , message:"password must be more than 6 characters"}})} 
                    
                    className=' h-12 rounded-4xl bg-[#F4F8FC] border border-[#D7D7D7] focus:outline-none focus:ring-1 focus:ring-blue-300 px-4' placeholder='Enter your Password'></input>
                    {errors.password && (<p className="text-red-500">{`${errors.password.message}`}</p>)}
                </div>

                <div className='flex flex-col mb-4 '>
                    <label className='mb-3' htmlFor="password_confirmation">Password</label>
                    <input type='password' {...register("password_confirmation" , {required:"password confirmation is requierd" , validate:(value)=> value === getValues("password")|| "password confirmation must match your password"})}  
                    
                    className=' h-12 rounded-4xl bg-[#F4F8FC] border border-[#D7D7D7] focus:outline-none focus:ring-1 focus:ring-blue-300 px-4' placeholder='Confirm your Password'></input>
                    {errors.password_confirmation && (<p className="text-red-500">{`${errors.password_confirmation.message}`}</p>)}
                </div>

                <div className='flex flex-col justify-center items-center space-y-3.5'>
                    <button disabled={isSubmitting} type='submit' className='disabled:bg-gray-300 w-full h-12 bg-[#0059F3] rounded-4xl flex justify-center items-center text-white cursor-pointer'>Sign Up</button>
                    <p>Aleardy  Have an account ? <span className=' text-[#044FD2]'>Sign In</span></p>
                </div>
                


                
            </form>
        </div>

    </div>

  )
}

export default Register