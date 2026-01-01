import { LoadingIndicator } from "../../components/application/loading-indicator/loading-indicator";
import AddMemberModal from "../../components/modals/AddMemberModal";
import DeleteTeamModal from "../../components/modals/DeleteTeamModal";
import { useGetTeamsQuery } from "../../features/manager/teamApiSlice"
import { useState } from "react";


        
   




export const Team = () =>{


 
    

const { data : teams, isLoading } = useGetTeamsQuery()
const [showAddMember , setShowAddMember] = useState(false)
const [showDeleteMember , setShowDeleteMember] = useState(false)
const [selectedTeamId, setSelectedTeamId] = useState(null)
const handleOpenModal = (id) => {
        setSelectedTeamId(id)
        setShowAddMember(true)
        
}

const handleOpenDeleteModal = (teamID) =>{
    setShowDeleteMember(true)
    setSelectedTeamId(teamID)
}







if (isLoading) return <div className='flex justify-center items-center w-full h-screen'><LoadingIndicator type="dot-circle" size="md"  label="Loading..."  /></div>


return(
    
    <div className="flex flex-col rounded-3xl border border-[#e0e7f5] p-2 bg-[#F4F8FC]">

        <div className="rounded-2xl border border-[#e0e7f5] bg-white px-2 py-6  ">

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

                {teams?.length > 0 ?(

                
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
                      <span className="text-gray-900">{team.project?.name ?? "Not in Project"}</span>
                        </td>

                        <td className="px-6 py-4">
                      <span className="text-gray-900">{team.members_count}</span>
                        </td>

                        
                        <td className="px-6 py-4">
                            
                                <button className="bg-[#2563EB] w-22 h-8 text-white rounded-md cursor-pointer" onClick={() => handleOpenModal(team.id)}>Add</button>
                            
                        </td>

                        
                        <td className="px-6 py-4">
                           <button onClick={() => handleOpenDeleteModal(team.id)} className="bg-[#EB2528] w-22 h-8 text-white rounded-md cursor-pointer">Delete</button>
                        </td>

                        
                
                    </tr>
                    ))}
                </tbody>

                ):(
                    <tbody>

                      <tr>
                        <td colSpan="6" className="px-6 py-10 text-center">
                           <p className="text-gray-500 font-medium">No Team found</p>
                        </td>
                       </tr>
                    </tbody>
                
                )}
                </table>
            </div>


            {showAddMember && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
               onClick={() => setShowAddMember(false)}>
                <div className="w-full max-w-md"
                    onClick={(e) => e.stopPropagation()}>

                

                    <AddMemberModal teamId={selectedTeamId}/>

                
                </div>
            </div>}
            {showDeleteMember && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
               onClick={() => setShowDeleteMember(false)}>
                <div className="w-full max-w-md"
                    onClick={(e) => e.stopPropagation()}>

                

                    <DeleteTeamModal teamId={selectedTeamId} onClose={() => setShowDeleteMember(false)} />

                
                </div>
            </div>

            }



    </div>
    </div>
    
)


}