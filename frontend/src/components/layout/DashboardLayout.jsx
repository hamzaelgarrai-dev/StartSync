import { Link, useLocation } from 'react-router-dom'
import {LogOut, User} from "lucide-react"
import { useSelector } from "react-redux"
import { selectCurrentUser} from "../../features/auth/authSlice"
const DashboardLayout = ({
  children,
  menuItems = [],
  headerActions,
  userAvatar,
}) => {
  const location = useLocation()
  const user = useSelector(selectCurrentUser)
  console.log(user)

  return (
    <div className="flex h-screen w-full bg-[#F9FAFB]">
      
      <aside className="w-58 bg-[linear-gradient(180deg,#1F1A43_10%,#111435_90%,#241E66_100%)] border-r border-[#E5E7EB] flex flex-col">
        
        <div className="p-4 ">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              S
            </div>
            <div>
              <h1 className="font-semibold text-white">StartSync</h1>
              <p className="text-xs text-gray-500">Analytics</p>
            </div>
          </div>
        </div>

       
        <nav className="p-4 flex-1">
          <p className="text-xs font-semibold text-gray-400 mb-3 uppercase">
            Main Menu
          </p>
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname.startsWith(item.path);

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-white hover:bg-gray-500'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

     
        <div className="p-4 flex flex-col space-y-6">
          <div className="flex items-center space-x-3">
            {userAvatar ? (
              <img
                src={userAvatar}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                {user.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
            )}

            <div className="flex-1">
              <p className="text-sm font-medium text-white">{user.name}</p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>

            

               
          </div>
          <div className=' px-2'>
            <button className='text-white cursor-pointer flex space-x-4'> <span><LogOut /></span> <span>Log out</span> </button>
          </div>
          


        </div>



      </aside>

      
      <div className="flex-1 flex flex-col overflow-hidden pt-2">

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-8">
          {headerActions}
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
