
const StatsCard = ({ icon, title, value, color = "blue" }) => {
 
  const colorVariants = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    yellow: "bg-yellow-100 text-yellow-600",
    purple: "bg-purple-100 text-purple-600",
    red: "bg-red-100 text-red-600",
    gray: "bg-gray-100 text-gray-600",
  };

  return (
    <div className='rounded-3xl border border-[#e0e7f5] p-2 bg-[#F4F8FC]'>
        <div className="rounded-2xl border border-[#e0e7f5] bg-white p-4 flex justify-start items-center space-x-4">
              
              <div className={`w-11 h-11 rounded-lg ${colorVariants[color]} flex items-center justify-center text-2xl `}>
                {icon}
              </div>

              <div>
                <p className="text-[26px] font-bold text-gray-900">{value}</p>
                <p className="text-sm text-gray-500 mb-1">{title}</p>
              </div>
              

              
              
            </div>

    </div>
    
  );
};

export default StatsCard