import React from 'react'
import { useDeleteTeamMutation } from '../../features/teams/teamApiSlice'
import toast from 'react-hot-toast';

function DeleteTeamModal({onClose , teamId}) {

  const [deleteTeam ,{isLoading:deletingTeam}] = useDeleteTeamMutation()

  const handleDelete = async (teamId) => {
    const loadingToast = toast.loading('Creating Team...')
    toast.success('Team created successfully!', { id: loadingToast })
    if (onClose) onClose()
  try {
   
    await deleteTeam(teamId).unwrap();
    
  } catch (error) {
    const msg = error.data?.message || "Failed to delete Team"
      console.error(error)
      toast.error(msg, { id: loadingToast })
  }
}
  return (
    <div className='w-72 bg-white rounded-xl p-6 flex flex-col mx-auto gap-5 shadow-lg'>

     
        <p className="text-xl font-semibold">
          Delete <span className="text-[#044FD2]">Team</span>
        </p>
        <p>This Action can't be undone</p>
        <div className='flex justify-start mx-auto items-center space-x-6'>

          <button onClick={() => handleDelete(teamId)} 
           disabled={deletingTeam}  className='bg-red-500 text-white w-22 h-10 rounded-md cursor-pointer disabled:bg-gray-300'>Delete</button>

          <button onClick={()=>{if (onClose) onClose()}} className='bg-gray-400 w-22 h-10 rounded-md text-white cursor-pointer'>Cancel</button>


        </div>
      

    </div>
  )
}

export default DeleteTeamModal