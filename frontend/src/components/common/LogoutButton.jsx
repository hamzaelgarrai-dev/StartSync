import { useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../../features/auth/authApiSlice'
import { useDispatch } from 'react-redux'
import { LogOut } from 'lucide-react'

const LogoutButton = () =>{

      const dispatch = useDispatch()
      const navigate = useNavigate()
      const [logoutApi] = useLogoutMutation()

      const handleLogout = async () => {
        try {

            await logoutApi().unwrap()
        } catch (err) {
            console.error("Backend logout failed", err)
        } finally {
            
            dispatch(logOut())
            navigate('/login')
        }
    }

      return(

        <button onClick={handleLogout} className='text-white cursor-pointer flex space-x-4'> <span><LogOut /></span> <span>Log out</span> </button>

      )

}

export default LogoutButton