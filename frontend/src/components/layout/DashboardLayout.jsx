import { Link, useLocation } from 'react-router-dom'

const DashboardLayout = ({
  children,
  logo = 'StartSync',
  subtitle = 'Analytics',
  menuItems = [],
  headerActions,
  userName = 'Alex Morgan',
  userRole = 'Project Manager',
  userAvatar,
}) => {
  const location = useLocation()

  return (
    <div className="flex h-screen w-full bg-[#F9FAFB]">
      
      <aside className="w-58 bg-white border-r border-[#E5E7EB] flex flex-col">
        
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              {logo.charAt(0)}
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">{logo}</h1>
              <p className="text-xs text-gray-500">{subtitle}</p>
            </div>
          </div>
        </div>

       
        <nav className="p-4 flex-1">
          <p className="text-xs font-semibold text-gray-400 mb-3 uppercase">
            Main Menu
          </p>
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
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

     
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            {userAvatar ? (
              <img
                src={userAvatar}
                alt={userName}
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                {userName
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
            )}

            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{userName}</p>
              <p className="text-xs text-gray-500">{userRole}</p>
            </div>
          </div>
        </div>
      </aside>

      
      <div className="flex-1 flex flex-col overflow-hidden">
        
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          {headerActions}
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
