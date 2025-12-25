import { useGetTeamsQuery } from "../../features/manager/teamApiSlice"

export const Team = () =>{

const { data, teamsLoading } = useGetTeamsQuery();

const teams = data?.data ?? [];

if (teamsLoading) return <p>Loading...</p>


return(
    
    <div className="bg-white rounded-xl min-h-screen border border-gray-300 space-y-2.5 mx-auto p-6 ">

        <p className="text-lg font-semibold text-gray-900">Recent Teams</p>

        <div className="overflow-x-auto">
                <table className="w-full">
                
                <thead className="border-b">
                    <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Team ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Team Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Project
                    </th>
                    <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Members
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Add Member
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Delete Member
                    </th>
                    
                    
                    </tr>
                </thead>

                
                <tbody className="divide-y divide-gray-200">
                    {teams.map((team) => (
                    <tr key={team.id} className="hover:bg-gray-50">
                    
                        <td className="px-6 py-4">
                        <span className="text-blue-600 font-medium">{team.id}</span>
                        </td>

                    
                        <td className="px-2 py-4">
                        <span className="text-gray-900">{team.name}</span>
                        </td>

                        
                        <td className="px-6 py-4">
                      <span className="text-gray-900">test</span>
                        </td>

                        <td className="px-6 py-4">
                      <span className="text-gray-900">5</span>
                        </td>

                        
                        <td className="px-6 py-4">
                            
                                <button className="bg-[#2563EB] w-22 h-8 text-white rounded-md cursor-pointer">Add</button>
                            
                        </td>

                        
                        <td className="px-6 py-4">
                           <button className="bg-[#EB2528] w-22 h-8 text-white rounded-md cursor-pointer">Delete</button>
                        </td>

                        
                
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

    </div>
)


}