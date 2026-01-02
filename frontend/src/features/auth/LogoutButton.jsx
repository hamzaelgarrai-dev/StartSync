import { useNavigate } from 'react-router-dom'
import { useLogoutMutation } from './authApiSlice'
import { useDispatch } from 'react-redux'
import { LogOut } from 'lucide-react'
import { logOut } from './authSlice'

const LogoutButton = () =>{

      const dispatch = useDispatch()
      const navigate = useNavigate()
      const [logoutApi, { isLoading }] = useLogoutMutation()

      const handleLogout = async () => {
        try {

            await logoutApi().unwrap()
        } catch (err) {
            console.error("Backend logout failed", err)
        } finally {
            
            dispatch(logOut())
            dispatch(apiSlice.util.resetApiState())
            navigate('/login')
        }
    }

      return(

        <button onClick={handleLogout} className='text-white cursor-pointer flex space-x-4'> <span><LogOut /></span> <span>{isLoading ? 'Logging out...' : 'Log out'}</span> </button>

      )

}

export default LogoutButton